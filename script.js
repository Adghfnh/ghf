document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "dashboard.html";  // الانتقال إلى صفحة لوحة التحكم
});
