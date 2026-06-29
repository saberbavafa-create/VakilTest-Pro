
// ==========================
// DadAzmoon - Script.js
// ==========================

// دکمه ورود
document.getElementById("loginBtn").addEventListener("click", function () {
    alert("ورود");
    // بعداً به صفحه login.html منتقل می‌شود
});

// دکمه عضویت
document.getElementById("registerBtn").addEventListener("click", function () {
    alert("عضویت");
    // بعداً به صفحه register.html منتقل می‌شود
});

// انیمیشن ظاهر شدن صفحه
window.addEventListener("load", function () {
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".container").style.transform = "translateY(0)";
});
.container{
    opacity:0;
    transform:translateY(30px);
    transition:all .8s ease;
}
