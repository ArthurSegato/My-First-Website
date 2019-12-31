var open = false;
var openAbout = false;
function openNav() {
    var windowWidth = window.innerWidth;
    if (open == false) {
        $(".icon").toggleClass("close");
        if (windowWidth >= 1000) {
            document.getElementById("sideNav").style.width = "25%";
        }
        else {
            document.getElementById("sideNav").style.width = "50%";
        }
        document.getElementById("box").style.opacity = "0.65";
        open = true;
    }
    else {
        if (openAbout == true) {
            document.getElementById("list").style.display = 'block';
            document.getElementById("about").style.display = 'none';
            if (windowWidth >= 1000) {
                document.getElementById("sideNav").style.width = "25%";
            }
            else {
                document.getElementById("sideNav").style.width = "50%";
            }
            openAbout = false;
        }
        else {
            $(".icon").toggleClass("close");
            document.getElementById("sideNav").style.width = "0";
            document.getElementById("box").style.opacity = "0.5";
            open = false;
        }
    }
}
function about() {
    document.getElementById("sideNav").style.width = "100%";
    document.getElementById("list").style.display = 'none';
    document.getElementById("about").style.display = 'block';
    openAbout = true;
}
