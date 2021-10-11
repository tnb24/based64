const { Base64 } = require("js-base64");

module.exports = (req,res) => {
    const query = req.query.data;
    const encrypted_str = Base64.encode(query);
    res.send(`${encrypted_str}`);
};