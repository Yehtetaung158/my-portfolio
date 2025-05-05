import DownloadResume from "@/components/about/DownloadResume";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutPage = async () => {
  const session = await auth();
  const role = session?.user.role;
  return (
    <div>
      <div>
        <div className=" flex gap-2 items-center">
          <h1>About</h1>
          {role === "admin" && (
            <>
              <Link href={"/dashboard/about-edit"}>
                <Pencil className=" size-4 text-purple-600" />
              </Link>
            </>
          )}
        </div>
        <hr />
        <p>
          Hey, my name is Charles Bruyerre and I use Sharlee as my nickname
          across social medias. I’m a graphic designer, UX/UI designer &
          front-end web developer from France. I’m also passionate about pop
          music and make portraits and universes around what I listen to and I’m
          always curious to learn more when it comes to new technologies and
          creative coding.
        </p>
      </div>
      <DownloadResume />
      {/* <img src="" alt="" /> */}
    </div>
  );
};

export default AboutPage;
