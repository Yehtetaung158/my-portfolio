"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UploadButton } from "@/app/api/uploadthing/uploadthing";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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
import { useAction } from "next-safe-action/hooks";
import { projectSchema } from "@/type/projectSchema";
import Image from "next/image";
import { updateProject } from "@/server/action/projectAction";

export default function ProjectEditForm({
  initialData,
}: {
  initialData: z.infer<typeof projectSchema> & { id: number };
}) {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData,
  });

  const { execute, status } = useAction(updateProject, {
    onSuccess({ data }) {
      if (!data) {
        toast.error("Failed to update project.");
        return;
      }
      toast.success(`Project "${data.name}" updated successfully.`);
    },
  });

  const isSubmitting = status === "executing";

  const onSubmit = (values: z.infer<typeof projectSchema>) => {
    execute({ id: initialData.id, ...values });
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-xl mx-auto"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="My Portfolio Site" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a short description of your project"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="sourceCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source Code URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://github.com/yourproject"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="project_url"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project URL</FormLabel>
              <FormControl>
                <Input placeholder="https://yourproject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <FormField
          name="technologies"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technologies</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="imageUrl"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Image</FormLabel>

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
                  form.setValue("imageUrl", res[0].url);
                }}
                onUploadError={(error) => {
                  form.setError("imageUrl", {
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
          {isSubmitting ? "Updating..." : "Update Project"}
        </Button>
      </form>
    </Form>
  );
}
