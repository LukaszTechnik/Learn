function pobierzFraszki(){
    let req = new XMLHttpRequest();
    if (req==null){
        alert("Obiekt nie mógł zostać stworzony!");
        return;
        }
        //let url="wiersze.php";
        let url="test.txt";
        req.open("GET", url, true);
        req.anreadystatechange=function(){
            document.getElementById('line').immerHTML = "<div class='pre'>Ładowanie fraszek...</ div>";
            if (req.readyState == 4& req.status==200){
                drukujFraszki(req.responseText);
                console.log(req.responseText);
            }
        }
        req.send(null);
}
function drukujFraszki(csv){
    let wiersze = csv.split(';');
    let menu=document.getElementById('line');
    let html="";
    for (let i in wiersze){
        html+= "<button id='"+wiersze[i]+"'class='but'>"+wiersze[i]+"</button>";
    }
    menu.immerHTML=html;
    let bt = document.getElementsByTagName("button");
    for (let i in bt){
        bt[i].onclick = pobierzWiersze;
    }
}
    window.onload=function(){
        pobierzFraszki();
    }

