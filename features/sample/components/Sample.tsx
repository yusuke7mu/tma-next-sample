import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export default function Sample() {
  const { t } = useTranslation("sample");

  return <div>sample</div>;
}
