import DownloadResume from "@/components/about/DownloadResume";
import { db } from "@/server";
import { auth } from "@/server/auth";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import IsAdmin from "@/components/nav/IsAdmin";

const AboutPage = async () => {
  const session = await auth();
  const role = session?.user.role ?? "user";
  const aboutData = await db.query.about.findFirst();
  console.log("I am about data", aboutData);
  return (
    <>
      <div className=" h-screen flex items-start mt-2">
        <div className=" flex justify-between w-full items-end gap-2">
          <div className=" w-[800px] space-y-4">
            <div className=" flex gap-2 items-center ">
              <IsAdmin role={role!} name="About" path="/dashboard/about-edit" />
            </div>
            <hr />
            <p>{aboutData?.aboutMe}</p>
            <DownloadResume />
          </div>
          <div className=" w-[400px] h-[600px] object-cover overflow-hidden  rounded-bl-4xl rounded-tr-4xl">
            {aboutData?.image && (
              <Image
                src={aboutData.image}
                alt="img"
                width={600} // အသုံးပြုမဲ့ UI အတိုင်းသတ်မှတ်
                height={400}
                className=" w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
