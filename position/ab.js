var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');
for (var i=0;i<tabs.length;i++){
        tabs[i].setAttribute("index",i);
        tabs[i].onclick=function(){
        for (var j=0;j<tabs.length;j++){
            tabs[j].removeAttribute("class");
        }
        this.className="active";
        for (var j=0;j<panels.length;j++){
            panels[j].removeAttribute("class");
        }
        var index=this.getAttribute("index");
        panels[index].className="active-panel";
    }
}