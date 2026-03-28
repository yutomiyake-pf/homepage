import type { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  [key: string]: unknown;
};

const Link = ({ href, children, ...props }: LinkProps) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
