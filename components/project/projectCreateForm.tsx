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
import { createProject } from "@/server/action/projectAction";

export default function ProjectUploadForm({
  initialData,
}: {
  initialData?: z.infer<typeof projectSchema>;
}) {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData || {
      name: "",
      imageUrl: "",
      description: "",
      sourceCode: "",
    },
  });

  const { execute, status } = useAction(createProject, {
    onSuccess({ data }) {
      if (!data) {
        toast.error("Failed to save project.");
        return;
      }

      toast.success(`Project ${data.name} saved successfully.`);
      form.reset(data);
    },
  });

  const isSubmitting = status === "executing";

  const onSubmit = (values: z.infer<typeof projectSchema>) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-xl mx-auto mt-24"
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
                <Input placeholder="React, Next.js" {...field} />
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
          {isSubmitting ? "Saving..." : "Save Project"}
        </Button>
      </form>
    </Form>
  );
}
