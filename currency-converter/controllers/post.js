
export function getPosts(req, res) {
    if (isNaN(req.params.id)) return res.send("Invalid post id").end();

    res.send(req.params.id + ": no posts available").end();
}