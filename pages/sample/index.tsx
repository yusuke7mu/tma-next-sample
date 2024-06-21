import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import Sample from "@/features/sample/components/Sample";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sample"])),
    },
  };
}

export default function Page() {
  return (
    <BaseLayout>
      <Sample />
    </BaseLayout>
  );
}
