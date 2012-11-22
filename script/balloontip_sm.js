//Rich HTML Balloon Tooltip: http://www.dynamicdrive.com/dynamicindex5/balloontooltip.htm
//Created: September 10th, 2006
//Updated: May 9th, 10 for window edge bug

var disappeardlay=10  //tooltip disappear delay (in miliseconds)
var verticaloffset=0 //vertical offset of tooltip from anchor link, if any
var enarrowhead=0 //0 or 1, to disable or enable the arrow image
var arrowheadimg=["http://anky3.github.com/c-decoded/img/arrowdown.gif", "http://anky3.github.com/c-decoded/img/arrowup.gif"] //path to down and up arrow images
var arrowheadheight=11 //height of arrow image (amount to reveal)


/////No further editting needed

var ie=document.all
var ns6=document.getElementById&&!document.all
verticaloffset=(enarrowhead)? verticaloffset+arrowheadheight : verticaloffset

function getposOfst(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function shwhid(obj, e){
dropmenuobj.style.left=dropmenuobj.style.top="500px"
if (e.type=="mouseover")
obj.visibility="visible"
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
if (whichedge=="rightedge"){
edgeoffsetx=0
var windowedge=ie && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffsetx=dropmenuobj.contentmeasure-obj.offsetWidth
if (dropmenuobj.x-edgeoffsetx+dropmenuobj.contentmeasure>windowedge)
edgeoffsetx=dropmenuobj.x-windowedge+dropmenuobj.contentmeasure
return edgeoffsetx
}
else{
edgeoffsety=dropmenuobj.contentmeasure+obj.offsetHeight+(verticaloffset-30)
return edgeoffsety
}
}

function dispballoontip(obj, e){ //main ballooon tooltip function
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
if (typeof dropmenuobj!="undefined") //hide previous tooltip?
dropmenuobj.style.visibility="hidden"
clrhidemenu()
//obj.onmouseout=delayhidemenu
dropmenuobj=document.getElementById(obj.getAttribute("rel"))
shwhid(dropmenuobj.style, e)
dropmenuobj.x=getposOfst(obj, "left")
dropmenuobj.y=getposOfst(obj, "top")+verticaloffset
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
if (enarrowhead)
displaytiparrow()
}

function displaytiparrow(){ //function to display optional arrow image associated with tooltip
tiparrw=document.getElementById("arrowhead")
tiparrw.src=(edgeoffsety!=0)? arrowheadimg[0] : arrowheadimg[1]
var ieshadowwidth=(dropmenuobj.filters && dropmenuobj.filters[0])? dropmenuobj.filters[0].Strength-1 : 0
//modify "left" value depending on whether there's no room on right edge of browser to display it, respectively
tiparrw.style.left=(edgeoffsetx!=0)? parseInt(dropmenuobj.style.left)+dropmenuobj.offsetWidth-tiparrw.offsetWidth-10+"px" : parseInt(dropmenuobj.style.left)+5+"px"
//modify "top" value depending on whether there's no room on right edge of browser to display it, respectively
tiparrw.style.top=(edgeoffsety!=0)? parseInt(dropmenuobj.style.top)+dropmenuobj.offsetHeight-tiparrw.offsetHeight-ieshadowwidth+arrowheadheight+"px" : parseInt(dropmenuobj.style.top)-arrowheadheight+"px"
tiparrw.style.visibility="visible"
}

function delayhidemenu(){
delayhide=setTimeout("dropmenuobj.style.visibility='hidden'; dropmenuobj.style.left=0; if (enarrowhead) tiparrw.style.visibility='hidden'",disappeardlay)
}

function clrhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

function reltoelmnt(linkobj){ //tests if a link has "rel" defined and it's the ID of an element on page
var relvalue=linkobj.getAttribute("rel")
return (relvalue!=null && relvalue!="" && document.getElementById(relvalue)!=null && (document.getElementById(relvalue).className=="balloon_sm" || document.getElementById(relvalue).className=="balloon_sm2" || document.getElementById(relvalue).className=="balloon_sm3" || document.getElementById(relvalue).className=="balloonstyle"))? true : false
}

function initalizetooltip(){
var alllinks=document.getElementsByTagName("a")
if (enarrowhead){
tiparrw=document.createElement("img")
tiparrw.setAttribute("src", arrowheadimg[0])
tiparrw.setAttribute("id", "arrowhead")
document.body.appendChild(tiparrw)
}
for (var i=0; i<alllinks.length; i++){
if (reltoelmnt(alllinks[i])){ //if link has "rel" defined and it's the ID of an element on page
alllinks[i].onmouseover=function(e){
var evtobj=window.event? window.event : e
dispballoontip(this, evtobj)
}
alllinks[i].onmouseout=delayhidemenu
}
}
}

if (window.addEventListener)
window.addEventListener("load", initalizetooltip, false)
else if (window.attachEvent)
window.attachEvent("onload", initalizetooltip)
else if (document.getElementById)
window.onload=initalizetooltip
