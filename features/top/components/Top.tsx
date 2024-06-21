import { useRouter } from "next/router";
import React from "react";

export default function Top({ buildId }: { buildId: string }) {
  const router = useRouter();

  return <div>top</div>;
}
