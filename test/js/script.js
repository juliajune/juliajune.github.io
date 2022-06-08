console.log('Скрипт для всех браузеров');

/* Scripts for IE11 only */
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
// true on IE11
// false on Edge and other IEs/browsers. 
console.log(isIE11);
if (isIE11 == true){
    console.log('Скрипт только для IE11');
}