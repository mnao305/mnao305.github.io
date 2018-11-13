const url = location.href;
if (location.origin != "file://" && url !== "https://mnao305.com/") {
    location.href = "https://mnao305.com/";
}


function pageUp() {
    console.log("Up!!");
}

function pageDown() {
    console.log("Down!");
}

window.addEventListener("wheel", (a) => {
    if (a.wheelDelta < 0) {
        pageDown();
    } else {
        pageUp();
    }
});
