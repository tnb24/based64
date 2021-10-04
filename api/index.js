const sha256 = require("js-sha256");
const sha512 = require("js-sha512");

module.exports = (req,res) => {
    const randomStr = Math.random()
        .toString(36)
        .replace(".", "");
    const moreRandomStr = sha256(randomStr);
    const ultraRandomStr = sha512(moreRandomStr).replace("."," ");
    res.send(`${ultraRandomStr}`);
};