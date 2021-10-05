module.exports = (req,res) => {
    const randomStr = Math.random()
        .toString(36)
        .replace(".", "");
    const moreRandomStr = Math.random(randomStr).toString(36);
    const ultraRandomStr = Math.random(moreRandomStr).toString(36);
    res.send(`${ultraRandomStr}`);
};