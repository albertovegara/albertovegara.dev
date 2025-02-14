import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<IconProps>;
}

export default function SocialLink({ link }: { link: SocialLink }) {
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
