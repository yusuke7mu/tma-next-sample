import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export default function Top({ buildId }: { buildId: string }) {
  const { t } = useTranslation("top");
  const router = useRouter();

  return <div>top</div>;
}
