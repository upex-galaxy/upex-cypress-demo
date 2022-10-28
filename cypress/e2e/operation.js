const { isPostInstall } = require("cypress/lib/util");

let n;
function Math(){
    n = Math.floor(Math.random() * 10)
}

function isPar(){
    if(n % 2 == 0){
        return n
    }else{
        Math()
        isPar()
    }
}

isPar()