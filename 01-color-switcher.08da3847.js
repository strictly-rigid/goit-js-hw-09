const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let e=null;t.btnStart.addEventListener("click",(function n(o){t.btnStart.disabled=!0,t.btnStop.disabled=!1,e&&t.btnStart.removeEventListener("click",n);e=setInterval((function(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.btnStop.addEventListener("click",(function(n){t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(e)})),t.btnStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.08da3847.js.map
