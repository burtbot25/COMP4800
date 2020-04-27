exports.getMap = (req, res) => {
    res.render('academic-buildings', { academicBuildingsCSS: true });
};