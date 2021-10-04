const sha256 = require("js-sha256");
const argon2 = require("argon2");
// const sha512 = require("js-sha512");

module.exports = (req,res) => {
    const randomStr = Math.random()
        .toString(36)
        .replace(".", "");
    const moreRandomStr = sha256(randomStr);
    const ultraRandomStr = argon2.hash(moreRandomStr).replace("."," ");
    res.send(`${ultraRandomStr}`);
};
