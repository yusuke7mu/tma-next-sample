import { useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { LocaleType, localSettingAtom } from "../atoms";
import React, { useCallback } from "react";

export const useLocalSetting = () => {
  const localSetting = useAtomValue(localSettingAtom);
  const setLocalSetting = useSetAtom(localSettingAtom);

  const setLocale = (locale: LocaleType) => {
    setLocalSetting({
      locale: locale,
      soundMute: localSetting.soundMute,
    });
  };

  const setSoundMute = (soundMute: boolean) => {
    setLocalSetting({
      locale: localSetting.locale,
      soundMute: soundMute,
    });
  };

  const resetLocalSetting = useCallback(() => {
    // RESET を渡すと localStorage から削除される
    setLocalSetting(RESET);
  }, [setLocalSetting]);

  return {
    localSetting,
    setLocale,
    setSoundMute,
    resetLocalSetting,
    localeList: Object.values(LocaleType),
  };
};
