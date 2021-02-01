function dropdownmenu() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";        
    } else {
        x.className = "topnav";
    }
}

jQuery(document).ready(function(){
    jQuery('#slidingbar').slippry({
        start: 'random',
        speed: 1200
    });
});