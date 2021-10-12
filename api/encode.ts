import Base64 from "js-base64";
import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = (req: VercelRequest, res: VercelResponse) => {
  const { data }: any = req.query;
  const encrypted_str = Base64.encode(data);
  res.status(200).send(encrypted_str);
};
