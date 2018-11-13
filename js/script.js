const url = location.href;
if (location.origin != "file://" && url !== "https://mnao305.com/") {
    location.href = "https://mnao305.com/";
}

flag = false;
page = ["about", "link", "works"];

function animate(i) {
    let now = document.getElementsByClassName("show");
    const nowId = now[0].id;
    now = document.getElementById(nowId);

    let nowIndex = page.indexOf(nowId);
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
