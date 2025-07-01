exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  // req.session.isLoggedin = true;
  //res.cookie( "isLoggedIn", true)
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  // req.session.isLoggedin = true;
  req.session.destroy(()=>{
    res.redirect("/login");  
  })
 
};
