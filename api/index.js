const sha256 = require("js-sha256");
const sha512 = require("js-sha512");
const argon2 = require("argon2");

async function hash_it(str) {
    try {
        const hash = await argon2.hash(str);
        const newHash = await hash.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\]\\]/gi, "");
        const ultraNewHash = await newHash.replace("argon"," ");
        console.log(ultraNewHash);
    } catch (err) {
        console.log(err);
    }
}

module.exports = (req,res) => {
    const randomStr = Math.random()
        .toString(36)
        .replace(".", "");
    const moreRandomStr = sha256(randomStr);
    const ultraRandomStr = sha512(moreRandomStr).replace("."," ");
    const test = hash_it(ultraRandomStr);
    console.log(test);
    res.send(`${ultraRandomStr}`);
};