var title = document.createElement("div")
title.className = "tabtitle"
title.innerText = "Open Site"
appid.appendChild(title)

var vbuttons = document.createElement("center")

var vtab = document.createElement("input")
vtab.id = "tab"
vtab.placeholder = "What site?"
vbuttons.appendChild(vtab)

var vbutton1 = document.createElement("button")
vbutton1.className = "settitle"
vbutton1.setAttribute("onclick", "opensite()")
vbutton1.innerText = "OK"
vbuttons.appendChild(vbutton1)

appid.appendChild(vbuttons)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".tabtitle {font-size: 30px; text-align: center; color: white; user-select: none; margin-top: 10px;} .seticon, .settitle {cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;} #tab {    background: #303134;border-radius: 2.5px;height: 50px;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;padding-left: 5px;outline: none;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var vaporscript = document.createElement("script")
vaporscript.innerHTML = `
function opensite() {
var tab = document.getElementById("tab")
var url = tab.value
var prx = "https://geothermalmaps.com/client/"
var cmb = prx.concat(url);
new Nightmare({
    "title": url,
    "type": "url",
    "url": cmb, 
    "html": "", 
    "js": "", 
    "width": 500,
    "height": 500,
    "theme": "dark"
})
}
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)
addcomment
//https://geothermalmaps.com/client/
//https://dip.il.ax/service/