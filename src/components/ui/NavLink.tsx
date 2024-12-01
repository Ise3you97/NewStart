import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  const baseStyles = "font-medium transition-colors";
  const desktopStyles = "text-gray-700 hover:text-gray-900";
  const mobileStyles = "block px-3 py-2 text-gray-700 hover:text-gray-900";

  return (
    <a
      href={href}
      className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}
    >
      {children}
    </a>
  );
}