if (location.host === "mnao305.github.io") {
    location.href = "https://mnao305.com/";
}

flag = false;
page = ["about", "link", "works"];

function animate(i) {
    let now = document.getElementsByClassName("show");
    const nowId = now[0].id;
    now = document.getElementById(nowId);

    const nowIndex = page.indexOf(nowId);
    if ((nowIndex === 0 && i === -1) || (nowIndex + 1 === page.length && i === 1)) {
        console.log("ふえぇ…これ以上はイケないよ…:;(∩´﹏`∩);:");
        return;
    }

    const nextId = page[nowIndex + i];
    const next = document.getElementById(nextId);

    console.log(nowId, nextId);

    if (i === 1) {
        now.classList.add("fadeOutUp");
        now.classList.remove("show");
        setTimeout(() => {
            now.style.display = "none";
        }, 400);
        setTimeout(() => {
            next.classList.add("fadeInUp", "show");
            next.style.display = "block"
        }, 400);
        setTimeout(() => {
            now.classList.remove("fadeOutUp");
            next.classList.remove("fadeInUp");
        }, 1000);
    } else {
        now.classList.add("fadeOutDown");
        now.classList.remove("show");
        setTimeout(() => {
            now.style.display = "none";
        }, 400);
        setTimeout(() => {
            next.classList.add("fadeInDown", "show");
            next.style.display = "block"
        }, 400);
        setTimeout(() => {
            now.classList.remove("fadeOutDown");
            next.classList.remove("fadeInDown");
        }, 1000);
    }
}

function pageBack() {
    animate(-1);
}

function pageNext() {
    animate(1);
}


window.addEventListener("wheel", (a) => {
    if (flag) {
        return;
    }
    flag = true;
    if (a.wheelDelta < 0) {
        pageNext();
    } else {
        pageBack();
    }
    setTimeout(() => {
        flag = false;
    }, 1000);
});


touchStartX = null;
touchStartY = null;
touchMoveX = null;
touchMoveY = null;

window.addEventListener("touchstart", (event) => {
    event.preventDefault();
    touchStartX = event.touches[0].pageX;
    touchStartY = event.touches[0].pageY;
}, false);

window.addEventListener("touchmove", (event) => {
    event.preventDefault();
    touchMoveX = event.changedTouches[0].pageX;
    touchMoveY = event.changedTouches[0].pageY;
}, false);

window.addEventListener("touchend", () => {
    if (touchStartY > touchMoveY) {
        if (touchStartY > (touchMoveY + 10)) {
            pageNext();
        }
    } else if (touchStartY < touchMoveY) {
        if ((touchStartY + 10) < touchMoveY) {
            pageBack();
        }
    }
}, false);
