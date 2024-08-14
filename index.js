const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", 
    "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePwds() {
    let firstPasswdEl = document.getElementById("first-pwd")
    let secondPasswdEl = document.getElementById("second-pwd")
    firstPasswdEl.textContent = ""
    secondPasswdEl.textContent = ""
    for (let i = 0; i < 15; i++){
        firstPasswdEl.textContent += characters[Math.floor(Math.random()*characters.length)]
        secondPasswdEl.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
}

function copyPwd1() {
    let pwd1 = document.getElementById("first-pwd").textContent
    navigator.clipboard.writeText(pwd1)
}
function copyPwd2() {
    let pwd2 = document.getElementById("second-pwd").textContent
    navigator.clipboard.writeText(pwd2)
}




