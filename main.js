splashLoad = () => {
    window.setTimeout("firstLoad()", 2000)
}

firstLoad = () => {
    location.href = "first.html"
}

splashLoad();