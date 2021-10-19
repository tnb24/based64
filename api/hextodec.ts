import converter from "hex2dec";
import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = (req: VercelRequest, res: VercelResponse) => {
  const { data }: any = req.query;
  const decoded_str = converter.hexToDec(data);
  res.status(200).send(decoded_str);
};
