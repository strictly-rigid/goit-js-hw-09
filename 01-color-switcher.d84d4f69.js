!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},n=null;t.btnStart.addEventListener("click",(function e(o){n&&t.btnStart.removeEventListener("click",e);n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.btnStop.addEventListener("click",(function(t){clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.d84d4f69.js.map