const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let e=null;t.btnStart.addEventListener("click",(function n(o){e&&t.btnStart.removeEventListener("click",n);e=setInterval((function(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.btnStop.addEventListener("click",(function(t){clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.b14ab2dd.js.map