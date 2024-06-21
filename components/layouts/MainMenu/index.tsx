import Link from "next/link";
import React from "react";

export default function MainMenu() {
  const menuList = [
    { label: "home", href: "/home" },
    { label: "sample", href: "/sample" },
  ];

  return (
    <div className="z-50 w-full max-w-[640px] p-4 bg-gray-300 flex justify-around">
      {menuList.map((menu, i) => {
        return (
          <Link href={menu.href} key={i}>
            {menu.label}
          </Link>
        );
      })}
    </div>
  );
}
