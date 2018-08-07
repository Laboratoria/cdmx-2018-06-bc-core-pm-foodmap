splashLoad = () => {
    window.setTimeout("loadFirst()", 2000)
 }
 
 loadFirst = () => {
    window.location = ('views/first.html')
    return
 }
 
 window.onload = splashLoad();
 
 