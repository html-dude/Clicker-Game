let clicks = 0

function setCookie(name, value, dtl){
    const date = new Date()
    date.setTime(date.getTime() + (dtl * 86400000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    let cDecodedv = cDecoded.toString()
    if(cDecodedv == ""){
    }
    else{
        return cDecodedv
    }
}

setCookie("clickCookies", 0, 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);

document.getElementById("clicksL").textContent = clicks;

clicks = getCookie("clickCookies").replace("clickCookies=", "")

document.getElementById("clicksL").textContent = clicks;

document.getElementById("clicker").onclick = function(){
    clicks = parseInt(clicks) + 1
    setCookie("clickCookies", clicks, 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
    document.getElementById("clicksL").textContent = clicks;
}