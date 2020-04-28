function main_menu() {
    fetch("/main_menu")
        .then(res => res.text())
        .then(function (data) {
            $("html").html(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function basic_nav() {
    fetch("/basic_nav")
    .then(res => res.text())
    .then(function (data) {
        $("html").html(data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function academic_buildings() {
    fetch("/academic_buildings")
    .then(res => res.text())
    .then(function (data) {
        console.log(data)
        $("body").html(data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function services_supports() {
    fetch("/services_supports")
    .then(res => res.text())
    .then(function (data) {
        $("html").html(data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function other_key_places() {
    fetch("/other_key_places")
    .then(res => res.text())
    .then(function (data) {
        $("html").html(data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function finish() {
    fetch("/finish")
    .then(res => res.text())
    .then(function (data) {
        $("html").html(data);
    })
    .catch(function (error) {
        console.log(error);
    });
}