var open = false;
var openFull = false;

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
        document.getElementById("fade").style.opacity = "0.65";
        open = true;
    }
    else {
        if (openFull == true) {
            document.getElementById("list").style.display = 'block';
            document.getElementById("about").style.display = 'none';
            
            if (windowWidth >= 1000) {
                document.getElementById("sideNav").style.width = "25%";
            }
            else {
                document.getElementById("sideNav").style.width = "50%";
            }
            openFull = false;
        }
        else {
            $(".icon").toggleClass("close");
            document.getElementById("sideNav").style.width = "0";
            document.getElementById("fade").style.opacity = "0.5";
            open = false;
        }
    }
}

function about() {
    document.getElementById("sideNav").style.width = "100%";
    document.getElementById("list").style.display = 'none';
    document.getElementById("about").style.display = 'block';
    openFull = true;
}