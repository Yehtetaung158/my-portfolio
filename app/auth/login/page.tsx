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
import { loginSchema } from "@/type/login-schem";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useAction } from "next-safe-action/hooks";
import { LoginAction } from "@/server/action/loginAction";
import { toast } from "sonner";
import { z } from "zod";

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { execute, isExecuting, status, result } = useAction(LoginAction, {
    onSuccess: ({ data }) => {
      form.reset();
      if (data?.error) {
        toast.error(data.error);
      }
      if (data?.success) {
        toast.success(data.success);
      }
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    const { email, password } = values;
    console.log("Form submitted with values:", values);
    try {
      await execute({ email, password });
      console.log("Execution completed: ", { isExecuting, status, result });
    } catch (error) {
      console.error("Error during execution:", error);
    }
  };

  return (
    <AuthForm
      formTitle="Login"
      showProvider={false}
      footerLabel="Don't have an account? Sign up"
      footerHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Form>
    </AuthForm>
  );
};

export default LoginPage;
