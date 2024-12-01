// NavLink.tsx
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  className?: string;  // Asegúrate de agregar className aquí
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className, mobile }) => {
  return (
    <a href={href} className={`nav-link ${className ? className : ''} ${mobile ? 'mobile' : ''}`}>
      {children}
    </a>
  );
};
