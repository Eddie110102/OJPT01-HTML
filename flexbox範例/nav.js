const url = [
  "index.html",
  "flexDirection.html",
  "justifyContent.html",
  "flexWrap.html",
  "alignItems.html",
  "alignContent.html",
  "flexItems.html",
];

const title = [
    "display屬性<br>彈性盒子及尺寸",
    "flex-direction屬性<br>盒子內容的出發方向",
    "justify-content屬性<br>盒子內容的對齊方式(主軸)",
    "flex-wrap屬性<br>盒子內容的換行方式",
    "align-items屬性<br>盒子內容的對齊方式(切軸)",
    "align-content屬性<br>盒子內容的對齊方式(切軸)",
    "flex-items屬性<br>盒子內容的對齊方式(切軸)",
  ];

const nav = document.getElementById('nav')
for(let i=0; i<url.length; i++){
    nav.innerHTML += `<li onClick="toTargetPage(event)"><a href="${url[i]}">${title[i]}</a></li>`
}
let nowPage = location.href.split('/')
nav.childNodes[url.indexOf(nowPage[nowPage.length-1])].classList.add('active')

function toTargetPage(e){
  window.location.href = `${e.currentTarget.childNodes[0].href}`
}