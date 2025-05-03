"use client";

import AuthForm from "@/components/auth/auth-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/type/register-schem";
import { useAction } from "next-safe-action/hooks";
import { RegisterAction } from "@/server/action/registerAction";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { execute, isExecuting, status, result } = useAction(RegisterAction, {
    onSuccess: ({ data }) => {
      form.reset();
      if (data?.error) {
        toast.error(data.error);
      }
      if (data?.success) {
        toast.success(data.success);
        router.push("/auth/login"); 
      }
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const { name, email, password } = values;
    try {
      await execute({ name, email, password });
      console.log("Execution completed: ", { isExecuting, status, result });
    } catch (error) {
      console.error("Error during execution:", error);
    }
  };

  return (
    <AuthForm
      formTitle="Register"
      showProvider={false}
      footerLabel="Already have an account? Login"
      footerHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Mr. Yehtet" {...field} />
                </FormControl>
              </FormItem>
            )}
          />{" "}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className=" w-full flex justify-end mt-8">
            <Button type="submit">Register</Button>
          </div>
        </form>
      </Form>
    </AuthForm>
  );
};

export default LoginPage;
