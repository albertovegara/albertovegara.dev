import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function SocialLink({ link }) {
  // Destructure the icon component from the link object
  const IconComponent = link.icon;
  return (
    <Link
      key={link.name}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" size="icon">
        <IconComponent className="inline-block" />
      </Button>
    </Link>
  );
}
