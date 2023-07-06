import React, { ReactNode } from "react";
import IconLinkined from "@/assets/images/IconLinkined";
import IconGithub from "@/assets/images/IconGithub";
import IconIg from "@/assets/images/IconIg";
import Link from "next/link";
export default function Contact() {
  return (
    <div className="bg-brand-whitist-pastel h-max">
      <div className="flex flex-col items-center py-10">
        <div className="mb-8">
          <p className="text-center">Get in touch with me</p>
          <hr className="w-[200px] m-auto bg-brand-blue-pastel  border-black shadow-[1.8px_1px_0px_0_rgba(0,0,0)]" />
        </div>
        <div className="flex gap-5 md:gap-10">
          <LinkContact
            href="https://github.com/arisbimas/"
            icon={<IconGithub />}
            text="/arisbimas"
          />
          <LinkContact
            href="https://www.linkedin.com/in/aris-bimas-nugroho/"
            icon={<IconLinkined />}
            text="/in/aris-bimas-nugroho"
          />

          <LinkContact
            href="https://www.instagram.com/arisbimas/"
            icon={<IconIg />}
            text="/arisbimas"
          />
        </div>
      </div>
    </div>
  );
}

interface LinkContactProps {
  href: string;
  text: string;
  icon: ReactNode;
}

const LinkContact = (props: LinkContactProps) => {
  return (
    <Link href={props.href} target="_blank">
      <div className="flex flex-col items-center">
        {props.icon}
        {/* {props.text} */}
      </div>
    </Link>
  );
};
