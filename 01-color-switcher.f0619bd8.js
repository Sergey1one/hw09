!function(){var t="null",o={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};console.log(o.stop),o.start.addEventListener("click",(function(){o.start.setAttribute("disabled",!0),t=setInterval((function(){var t;t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),o.body.style.backgroundColor=t}),1e3),console.log(t)})),o.stop.addEventListener("click",(function(){console.log(t),clearInterval(t),o.start.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.f0619bd8.js.map