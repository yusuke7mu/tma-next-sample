import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-black p-2">
      <h1 className="text-white">Sample App</h1>
      <LocaleSwitcher />
    </div>
  );
}