const { Base64 } = require("js-base64");

module.exports = (req,res) => {
    const query = req.query.data;
    const decrypted_str = Base64.decode(query);
    res.send(`${decrypted_str}`);
};