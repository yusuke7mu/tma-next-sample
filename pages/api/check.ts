import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  verify(req.body.data);
  if (!req.body.data) {
    return res.status(400).json({ message: "Bad Request" });
  }
  return res.status(200).json({
    result: verify(req.body.data),
  });
}

function verify(data: string) {
  // https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app

  // data_check_string = ...
  // secret_key = HMAC_SHA256(<bot_token>, "WebAppData")
  // if (hex(HMAC_SHA256(data_check_string, secret_key)) == hash) {
  //   // data is from Telegram
  // }
  const bot_token = "<bot-token>";
  const initData = new URLSearchParams(data);
  initData.sort();
  const hash = initData.get("hash");
  initData.delete("hash");
  const dataCheckString = Array.from(initData.entries())
    .map(([key, value]) => key + "=" + value)
    .join("\n");

  const secretKey = crypto
    .createHmac("sha256", "WebAppData")
    .update(bot_token)
    .digest();
  const _hash = crypto
    .createHmac("sha256", secretKey)
    .update(dataCheckString ?? "")
    .digest("hex");
  return hash === _hash;
}
