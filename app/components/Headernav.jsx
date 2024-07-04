// components/HeaderNav.jsx
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 ${
                  pathname === link.href ? 'text-blue-600' : ''
                }`}
              >
                <LinkIcon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
        <div>
          {/* Puedes agregar más elementos aquí, como un botón de logout o el perfil del usuario */}
        </div>
      </nav>
    </header>
  );
}
