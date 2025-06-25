function loadPage(page) {
    document.getElementById('contentFrame').src = page;
}

let b_left = window.screenX;
let b_top = window.screenY;

b_left = b_left+100;
b_top = b_top+100;

function openPopup() {
    let newWin = window.open("popup.html", "",`width=500, height=400.5, left=${b_left}, top=${b_top}`);
    if (newWin == null) {
        alert('팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요.');
    }
}