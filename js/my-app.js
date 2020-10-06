var myApp=new Framework7();var $$=Dom7;var view1=myApp.addView('#view-1',{dynamicNavbar:true});var view2=myApp.addView('#view-2',{dynamicNavbar:true});var toggle=app.toggle.create({el:'.toggle',on:{change:function(){console.log('Toggle changed')}}})
var myApp=new Framework7,$$=Dom7,view1=myApp.addView("#tab-1",{dynamicNavbar:!0}),view2=myApp.addView("#tab-2",{dynamicNavbar:!0});function init(){null===localStorage.getItem("firstRun")?setup():loadTheme()}
function setup(){localStorage.setItem("theme","light"),localStorage.setItem("firstRun",!0),loadTheme()}
function loadTheme(){"dark"===localStorage.getItem("theme")?makeDarkTheme():makeWhiteTheme()}
function setThemeWhite(){localStorage.setItem("theme","light"),makeWhiteTheme()}
function setThemeDark(){localStorage.setItem("theme","dark"),makeDarkTheme()}
function makeWhiteTheme(){document.getElementById("body").className="layout-white framework7-root"}
function makeDarkTheme(){document.getElementById("body").className="layout-dark framework7-root"}
function toggleTheme(){"light"===localStorage.getItem("theme")?(setThemeDark(),document.cookie="fasttheme-switching=true; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;"):(setThemeWhite(),document.cookie="fasttheme-switching=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")}