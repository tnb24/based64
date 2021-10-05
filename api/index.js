module.exports = (req,res) => {
    const query = req.query;
    const randomStr = Math.random(query)
        .toString(36)
        .replace(".", "");
    const moreRandomStr = Math.random(randomStr).toString(36);
    const ultraRandomStr = Math.random(moreRandomStr).toString(36).replace(/[`~!@#$%^&*()_|+\-=?;0:'",.<>\]\\]/gi, "");
    res.send(`${ultraRandomStr}`);
};