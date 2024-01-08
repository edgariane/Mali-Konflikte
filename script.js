document.cookie = "visited=yes";
function getCookie(cname) {
 let name = cname + "=";
 let decodedCookie = decodeURIComponent(document.cookie);
 let ca = decodedCookie.split(';');
 for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
 }
 return "";
}

function checkCookie() {
 let user = getCookie("visited");
 if (user != "") {
    alert("Willkommen zurück!");
 } else {
    user = prompt("Bitte gib deinen Namen ein:", "");
    if (user != "" && user != null) {
      setCookie("visited", user, 30);
    }
 }
}
body {
 font-family: Arial, sans-serif;
 background-color: #f5f5f5;
 color: #333;
 margin: 0;
 padding: 0;
}

.container {
 max-width: 960px;
 margin: 0 auto;
 padding: 20px;
 background-color: #fff;
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
 font-size: 28px;
 color: #4a4a4a;
 margin-bottom: 20px;
}

p {
 line-height: 1.6;
 margin-bottom: 20px;
}

checkCookie();
