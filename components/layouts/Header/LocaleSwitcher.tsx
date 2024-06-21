import { usePathname } from "next/navigation";
import { useLocalSetting } from "@/store/hooks/useLocalSetting";
import Dropdown from "@/components/elements/Dropdown";
import { LocaleType } from "@/store/atoms";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const { localSetting, localeList, setLocale } = useLocalSetting();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <Dropdown
      options={localeList}
      current={localSetting.locale}
      onSelect={(option: string) => {
        //設定を保存
        setLocale(option as LocaleType);
        router.push({ pathname, query }, asPath, { locale: option });
      }}
      className="text-center text-white"
      optionStyle="bg-gray-300"
    />
  );
}
