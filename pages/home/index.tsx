import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import Home from "@/features/home/components/Home";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

export default function Page() {
  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  );
}
