import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import AuthFooter from "./authFooter";

type AuthFormProps = {
  children: React.ReactNode;
  formTitle: string;
  showProvider: boolean;
  footerLabel: string;
  footerHref: string;
};

const AuthForm = ({
  children,
  formTitle,
  footerLabel,
  footerHref,
}: AuthFormProps) => {
  return (
    <div>
      <Card>
        <CardHeader className=" font-bold text-2xl">{formTitle}</CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <AuthFooter footerLabel={footerLabel} footerHref={footerHref} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
