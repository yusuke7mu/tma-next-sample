import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import React from "react";

export default function Home() {
  const { t } = useTranslation("home");
  return (
    <>
      <h2>home</h2>
    </>
  );
}
