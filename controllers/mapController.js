exports.home = (req, res, next) => {
    res.render('home', {content: " BCIT Description Paragraph", side: true})
}

exports.layout = (req, res, next) => {
    res.render("home",{content:'Change the whole layout'})
}

exports.partial = (req, res, next) => {
    res.render("./partials/sidebar2")
}

exports.getData = (req, res, next) => {
    res.send({Buildings:["SE01", "SE02", "SE03"]})
}