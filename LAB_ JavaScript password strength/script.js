// Your solution goes here 
function isStrongPassword(pw){
    if(pw.length<8){
        return false;

    }

    if(pw.indexOf("password")!=-1){
        return false;

    }

    let isUpperCase = false;

    for(let i = 0; i <pw.length;i++){
        let letter = pw[i].charCodeAt();
        
        if(letter>=65 && letter<=90){
            isUpperCase = true;
            break;
        }
    }
    return isUpperCase;
}
