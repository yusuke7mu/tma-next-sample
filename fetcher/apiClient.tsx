import { StatusCode } from "grpc-web";

export const API_HOST = ((): string => {
  switch (process.env.NEXT_PUBLIC_ENVIRONMENT_VALUE) {
    default:
      return "http://localhost:8080";
  }
})();

export const apiMetadata = (accessToken: string) => {
  return {
    authorization: "Bearer " + accessToken,
  };
};

export function useApiErrorCommon() {
  const onApiError = (error: any) => {
    // 認証エラーの場合はログイン画面へ遷移;
    if (error.code == StatusCode.UNAUTHENTICATED) {
      // TODO ログアウト & Topへ遷移
      return;
    }
    console.log(error);
    // TODO 予期しないエラーなのでアラート表示
  };
  return onApiError;
}
