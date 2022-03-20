const home = (req,res) => {
  res.render("home/index");              //띄울 html 파일 render 메소드에 파일 이름
};

const login =  (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};