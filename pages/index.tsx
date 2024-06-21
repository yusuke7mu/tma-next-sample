import { Inter } from "next/font/google";
import { execSync } from "child_process";
import { BaseLayout } from "@/components/layouts/BaseLayout";
import Top from "@/features/top/components/Top";

const lastCommitCommand = "git rev-parse HEAD";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const buildId = execSync(lastCommitCommand, { cwd: process.cwd() })
    .toString()
    .trim();

  return {
    props: {
      buildId: buildId,
    },
  };
}

type TopPageProps = {
  buildId: string;
};
export default function Page({ buildId }: TopPageProps) {
  return (
    <BaseLayout>
      <Top buildId={buildId} />
    </BaseLayout>
  );
}
