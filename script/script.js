if ('serviceWorker' in navigator)
{
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}

function dropdownmenu() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";        
    } else {
        x.className = "topnav";

    }
}
