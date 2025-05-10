import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className=" max-w-xl mx-auto h-full ">
      <div className=" h-24 w-full"></div>
      {children}
    </main>
  );
};

export default layout;
