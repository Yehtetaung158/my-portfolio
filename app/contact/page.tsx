import { EmailDisplay } from "@/components/contact/EmailDisplay";
import { LinkInDisplay } from "@/components/contact/LinkInDisplay";
import { PhoneDisplay } from "@/components/contact/PhoneDisplay";
import IsAdmin from "@/components/nav/IsAdmin";
import { db } from "@/server";
import { auth } from "@/server/auth";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactPage = async () => {
  const session = await auth();
  const role = session?.user.role;
  const contactData = await db.query.contact.findFirst();
  console.log("I am contact data", contactData);
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" w-full space-y-4">
        <div className=" flex gap-2 items-center ">
          {/* <h1 className=" flex items-center gap-4">
            <span className=" text-4xl font-bold ">About</span>
            {role === "admin" && (
              <>
                <Link href={"/dashboard/about-edit"}>
                  <Pencil className=" size-4 text-purple-600" />
                </Link>
              </>
            )}
          </h1> */}
          <div className=" flex gap-2 items-center ">
            <IsAdmin role={role!} name="Contact" path="/dashboard/contact" />
          </div>
          <hr />
        </div>
        <hr />
        <div className=" pt-4">
          <div className="flex flex-col lg:flex-row justify-start lg:justify-around items-start lg:items-center gap-4">
            {contactData?.email && <EmailDisplay email={contactData.email} />}
            {contactData?.phone && <PhoneDisplay phone={contactData.phone} />}
            {contactData?.linkIn && <LinkInDisplay link={contactData.linkIn} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
