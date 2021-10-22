let homeRoutes =(req,res) => {
    console.log("inbsideeee homeee")
    res.render(`index`);

}

let add_user = (req, res) => {
    console.log("bhedbg");
    res.render(`add_user`);
}
let update_user = (req, res) => {
    res.render("update_user");
}
module.exports ={homeRoutes, add_user, update_user}