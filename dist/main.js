(()=>{"use strict";var o=document.createElement("div");o.classList.add("player"),document.querySelector("body").appendChild(o);var e=document.querySelector(".player");document.addEventListener("keydown",(function(o){var r,t,c,n,d,l;"ArrowUp"!==o.code&&"ArrowDown"!==o.code&&"ArrowLeft"!==o.code&&"ArrowRight"!==o.code||(r=o.code,console.log(r),e&&(t=e,c=o.code,(l=t.getBoundingClientRect())&&null==n&&null==d&&(n=l.left,d=l.top),void 0!==c&&void 0!==t&&("ArrowUp"===c&&(d-=16),"ArrowDown"===c&&(d+=16),"ArrowLeft"===c&&(n-=16),"ArrowRight"===c&&(n+=16),n<8||d<8||("ArrowRight"!==c&&"ArrowLeft"!==c||(t.style.left="".concat(n,"px")),"ArrowDown"!==c&&"ArrowUp"!==c||(t.style.top="".concat(d,"px")),console.log(n,d)))))}),!1)})();
//# sourceMappingURL=main.js.map