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

function login(event) {
    event.preventDefault(); // 기본 form 제출 막기
    window.location.href = "../html/main.html"; // 원하는 경로로 이동
    alert("로그인이 완료되었습니다!");
}