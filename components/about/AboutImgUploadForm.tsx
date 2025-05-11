"use client";

import { useForm } from "react-hook-form";
import { aboutSchema } from "@/type/about";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAction } from "next-safe-action/hooks";
import { upsertAbout } from "@/server/action/aboutAction";
import { UploadButton } from "@/app/api/uploadthing/uploadthing";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Image from "next/image";

export default function AboutForm({
  initialData,
}: {
  initialData?: z.infer<typeof aboutSchema>;
}) {
  const form = useForm<z.infer<typeof aboutSchema>>({
    resolver: zodResolver(aboutSchema),
    defaultValues: initialData || {
      aboutMe: "",
      image: "",
    },
  });

  const { execute, status } = useAction(upsertAbout, {
    onSuccess({ data }) {
      if (!data) {
        toast.error("Something went wrong.");
        return;
      }

      if ("error" in data) {
        toast.error("Failed to save About");
        return;
      }

      toast.success(`About ${data.id} successfully`);
      form.reset(data); // Reset to saved data
    },
  });

  const isSubmitting = status === "executing";

  const onSubmit = (values: z.infer<typeof aboutSchema>) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-xl mx-auto"
      >
        <FormField
          name="aboutMe"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>About Me</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Write something about yourself..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="image"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
               {/* Display existing image */}
                            {field.value && (
                              <div className="mb-2">
                                <Image
                                  src={field.value}
                                  alt="Current project image"
                                  width={300}
                                  height={200}
                                  className="rounded-md object-cover"
                                />
                              </div>
                            )}
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  form.setValue("image", res[0].url);
                }}
                onUploadError={(error) => {
                  form.setError("image", {
                    message: error.message,
                  });
                }}
              />
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
  );
}
