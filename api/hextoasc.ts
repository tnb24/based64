import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = (req: VercelRequest, res: VercelResponse) => {
  const { data }: any = req.query;
  const buf = Buffer.from(data, "hex").toString("utf8");
  res.status(200).send(buf);
};
