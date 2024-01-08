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

checkCookie();
