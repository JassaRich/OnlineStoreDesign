// /*------------------------------
// 21. RTL & Dark Light
// -------------------------------*/
// var events = $("body");
// events.on("click", ".rtl-btn", function () {
//     $(this).toggleClass('rtl');
//     $('body').removeClass('rtl');
//     if ($('.rtl-btn').hasClass('rtl')) {
//         $('.rtl-btn').text('LTR');
//         $('body').addClass('rtl');
//     } else {
//         $('.rtl-btn').text('RTL');
//     }
//     return false;
// });



$(".setting_buttons li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});
$(".color-box li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

function openSetting() {
    document.getElementById("setting_box").classList.add('open-setting');
    document.getElementById("setting-icon").classList.add('open-icon');
}

function closeSetting() {
    document.getElementById("setting_box").classList.remove('open-setting');
    document.getElementById("setting-icon").classList.remove('open-icon');
}

/*====================
  RTL js
======================*/
const rtlSwitch = document.querySelector("#rtlmode");
const bodyDom1 = document.querySelector("body");
const initialrtlCheck = localStorage.getItem("layout_version");
if (rtlSwitch) {
    if (initialrtlCheck === "rtl") rtlSwitch.checked = true;
}

rtlSwitch?.addEventListener("change", (e) => {
    const checkbox = e.target;
    if (checkbox.checked) {
        bodyDom1.classList.add("rtl");
        localStorage.setItem("layout_version", "rtl");
    }

    if (!checkbox.checked) {
        bodyDom1.classList.remove("rtl");
        localStorage.removeItem("layout_version");
    }
});

if (localStorage.getItem("layout_version") == "rtl") {
    bodyDom1.classList.add("rtl");
}

/*====================
  Dark js
 ======================*/
const darkSwitch = document.querySelector("#darkmode");
const bodyDom = document.querySelector("body");
const initialDarkCheck = localStorage.getItem("layout_version");
if (darkSwitch) {
    if (initialDarkCheck === "dark") darkSwitch.checked = true;
}

darkSwitch?.addEventListener("change", (e) => {
    const checkbox = e.target;
    if (checkbox.checked) {
        bodyDom.classList.add("dark");
        localStorage.setItem("layout_version", "dark");
    }

    if (!checkbox.checked) {
        bodyDom.classList.remove("dark");
        localStorage.removeItem("layout_version");
    }
});

if (localStorage.getItem("layout_version") == "dark") {
    bodyDom.classList.add("dark");
}