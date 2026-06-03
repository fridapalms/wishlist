import Link from "next/link";
import { FolderHeart, ScanHeart, Tag, Receipt, Plus } from "lucide-react";

const menuItems = [
  {
    icon: FolderHeart,
    title: "My wishlists",
    href: "/wishlists",
  },
  {
    icon: ScanHeart,
    title: "All wishes",
    href: "/",
  },
  {
    icon: Tag,
    title: "Categories",
    href: "/categories",
  },
  {
    icon: Receipt,
    title: "Purchased",
    href: "/purchased",
  },
];

export const Sidebar = () => {
  return (
    <div className="bg-[#EEDCDB] flex flex-col gap-9 justify-start items-center lg:items-start pt-8 lg:p-8 text-[#353333] h-screen">
      <Link href={"/add"} className="flex flex-row gap-2 items-center justify-center text-[#BF5048] border p-1.5 transition delay-150 ease-in-out hover:bg-[#DFC6C0]">
        <Plus />
        <span className="hidden lg:block font-semibold">ADD WISH</span>
      </Link>
      {menuItems.map((i) => {
        const Icon = i.icon;
        return (
          <Link key={i.title} href={i.href} className="flex flex-row gap-2 items-center">
            <Icon />
            <span className="hidden lg:block">{i.title}</span>
          </Link>
        );
      })}
    </div>
  );
};
