import { Span } from "next/dist/trace";
import Link from "next/link";

type NavigationItem = {
  label: string;
  href?: string;
};

type PageNavigationProps = {
  items: NavigationItem[];
};

export const PageNavigation = ({ items }: PageNavigationProps) => {
  return (
    <nav className="flex flex-wrap gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span>&gt;</span>}
        </div>
      ))}
    </nav>
  );
};
