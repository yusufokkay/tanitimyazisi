document.onkeydown = function (e) {
 
    //F12 Engelle
    if(e.keyCode == 123) {
        alert('f12 tuşu kapalıdır')
        return false;
    }

    // CTRL+I Engelle
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        alert('I tuşu kapalıdır')
        return false;
    }

    // CTRL+J Engelle
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        alert('J tuşu kapalıdır')
        return false;
    }

    // CTRL+U Engelle
    if(e.ctrlKey && e.keyCode == 85) {
    alert('U tuşu kapalıdır')
        return false;
    }
}




function IE(e) {
    if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
         alert('UYARI BEYBI');
         return false;
    }
}
function NS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
         if (e.which == "2" || e.which == "3") {
              alert('Bu sitede sağ tık kapalıdır ');
              return false;
         }
    }
}
document.onmousedown=IE;document.onmouseup=NS;document.oncontextmenu=new Function("return false");
