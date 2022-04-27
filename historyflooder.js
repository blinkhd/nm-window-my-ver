var title = document.createElement("div")
title.className = "tabtitle"
title.innerText = "History Flooder"
appid.appendChild(title)

var vbuttons = document.createElement("center")

var vtab = document.createElement("input")
vtab.id = "tab"
vtab.placeholder = "How many instances?"
vbuttons.appendChild(vtab)

var vbutton1 = document.createElement("button")
vbutton1.className = "settitle"
vbutton1.setAttribute("onclick", "floodhistory()")
vbutton1.innerText = "OK"
vbuttons.appendChild(vbutton1)

appid.appendChild(vbuttons)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".tabtitle {font-size: 30px; text-align: center; color: white; user-select: none; margin-top: 10px;} .seticon, .settitle {cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;} #tab {    background: #303134;border-radius: 2.5px;height: 50px;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;padding-left: 5px;outline: none;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var vaporscript = document.createElement("script")
vaporscript.innerHTML = `
function floodhistory() {
var tab = document.getElementById("tab")
var num=tab.value;
done=false;x=window.location.href;
for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());
if(i==num){done=true}}if(done===true){}
tab.value = ""
}
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)
addcomment
