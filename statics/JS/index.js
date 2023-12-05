function goGoogle() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let width = 350;
    let height = 350;
    let left = (screenWidth-width)/2;
    let top = (screenHeight-height)/2;
    let google = window.open("", "", `width=${width},height=${height},left=${left},top=${top}`);

    google.document.write("<h1 style=\"text-align: center;\">Google</h1>");

    google.addEventListener("blur", function () {
        google.close();
    });
}
function goMicrosoft() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let width = 350;
    let height = 350;
    let left = (screenWidth-width)/2;
    let top = (screenHeight-height)/2;
    let microsoft = window.open("", "", `width=${width},height=${height},left=${left},top=${top}`);

    microsoft.document.write("<h1 style=\"text-align: center;\">Microsoft</h1>");

    microsoft.addEventListener("blur", function () {
        microsoft.close();
    });
}
function changeLanguage() {
    let language = document.getElementById("language");
    let value = language.options[language.selectedIndex].value;

    switch (value) {
        case "op1":
            window.location.href = "https://ko.wikipedia.org/wiki/한국어";
            break;
        case "op2":
            window.location.href = "https://ko.wikipedia.org/wiki/중국어";
            break;
        case "op3":
            window.location.href = "https://ko.wikipedia.org/wiki/영어";
            break;
        case "op4":
            window.location.href = "https://ko.wikipedia.org/wiki/일본어";
            break;
    }
}
function chkUser() {
    let id = document.getElementById("id");
    let pass = document.getElementById("password");
    let checker = false;

    // 대충 id와 비밀번호를 검사 한다는 내용
    
    if (checker==false) {
        let show = document.getElementById("wrong");
        show.style.display = "block";
    }
}