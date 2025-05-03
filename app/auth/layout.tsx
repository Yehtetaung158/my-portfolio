import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className=" max-w-xl mx-auto h-full ">{children}</main>;
};

export default layout;
