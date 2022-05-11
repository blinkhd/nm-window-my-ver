var title = document.createElement("div")
title.className = "vaportitle"
title.innerText = "Nightmare"
appid.appendChild(title)

var items = document.createElement("center")

var tab = document.createElement("button")
tab.className = "vaportab"
tab.innerText = "Tab Cloak"
tab.setAttribute("onclick", 'new Nightmare({"title": "Tab Cloak","type": "js","js": "https://cdn.jsdelivr.net/gh/vega79/nightmare@latest/tab.min.js","width": 400,"height": 200,"theme": "dark"})')
items.appendChild(tab)

var hf = document.createElement("button")
hf.className = "vaportab"
hf.innerText = "History Flooder"
hf.setAttribute("onclick", 'new Nightmare({"title": "History Flooder","type": "js","js": "https://cdn.jsdelivr.net/gh/vega79/nightmare@latest/historyflooder.min.js","width": 400,"height": 200,"theme": "dark"})')
items.appendChild(hf)

/*var opensite = document.createElement("button")
opensite.className = "vaportab"
opensite.innerText = "Open Site"
opensite.setAttribute("onclick", 'new Nightmare({"title": "Open Site","type": "js","js": "https://cdn.jsdelivr.net/gh/vega79/nightmare@5c0e367/opensite.js","width": 400,"height": 200,"theme": "dark"})')
items.appendChild(opensite)*/

var opensite2 = document.createElement("button")
opensite2.className = "vaportab"
opensite2.innerText = "Open Site (UV)"
opensite2.setAttribute("onclick", 'new Nightmare({"title": "Open Site (DIP)","type": "js","js": "https://cdn.jsdelivr.net/gh/vega79/nightmare@c13005e/opensite-uv.js","width": 400,"height": 200,"theme": "dark"})')
items.appendChild(opensite2)

/*var opensite3 = document.createElement("button")
opensite3.className = "vaportab"
opensite3.innerText = "Open Site (ludi)"
opensite3.setAttribute("onclick", 'new Nightmare({"title": "Open Site (ludi)","type": "js","js": "https://cdn.jsdelivr.net/gh/vega79/nightmare@5c0e367/opensite-ludi.js","width": 400,"height": 200,"theme": "dark"})')
items.appendChild(opensite3)*/

var inspect = document.createElement("button")
inspect.className = "vaportab"
inspect.innerText = "Avo"
inspect.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/vega79/nightmare@latest/avo.min.js';document.body.appendChild(a);}())")
items.appendChild(inspect)


appid.appendChild(items)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".vaportitle {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.vaportab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .vaportab:hover {background: darkslategrey;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)
