"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAction } from "next-safe-action/hooks";
import { upsertContact } from "@/server/action/contactAction";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactSchema } from "@/type/contact-schema";

interface ContactFormProps {
  initialData?: z.infer<typeof contactSchema>; // optional for editing
}

export default function ContactForm({ initialData }: ContactFormProps) {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: initialData || {
      email: "",
      phone: "",
      linkIn: "",
    },
  });

  const { execute, status } = useAction(upsertContact, {
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
      form.reset(); // Reset to saved data
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    execute(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Email</label>
        <Input type="email" {...form.register("email")} />
      </div>
      <div>
        <label>Phone</label>
        <Input type="text" {...form.register("phone")} />
      </div>
      <div>
        <label>LinkedIn URL</label>
        <Input type="url" {...form.register("linkIn")} />
      </div>
      <Button type="submit" disabled={status === "executing"}>
        {status === "executing" ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}
