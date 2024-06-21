import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// 言語
export enum LocaleType {
  ja = "ja",
  en = "en",
}

// ローカル設定（localStorageに保存）
type localSettingValue = {
  soundMute: boolean;
  locale: LocaleType;
};
export const localSettingAtom = atomWithStorage<localSettingValue>(
  "local-setting",
  {
    soundMute: true,
    locale: LocaleType.ja,
  }
);
