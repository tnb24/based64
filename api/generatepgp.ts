import { generateKey } from "openpgp";
import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const { name, email, passphrase }: any = req.query;
  const { privateKey, publicKey } = await generateKey({
    type: "rsa",
    rsaBits: 4096,
    curve: "ed25519",
    userIDs: [{ name: name, email: email }],
    // passphrase: passphrase,
    format: "armored",
  });
  res.status(200).send(`${publicKey} \n   ${privateKey}`);
};
