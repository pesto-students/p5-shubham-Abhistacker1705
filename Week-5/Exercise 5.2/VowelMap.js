function isVowel(char){
    return "aeiou".includes(String.fromCharCode(char));
    }

function toAscii(character){
    return character.codePointAt();
}    



function vowelCount(str){
    let vowelMap=new Map();
    for(let char of str){
        let lowerCaseChar=char.toLowerCase();
        if(isVowel(toAscii(lowerCaseChar))){
            if(vowelMap.has(toAscii(lowerCaseChar))){
                vowelMap.set(toAscii(lowerCaseChar),vowelMap.get(toAscii(lowerCaseChar))+1);
            }
            else{
                vowelMap.set(toAscii(lowerCaseChar),1);
            }
        }
    }
            
    return vowelMap;
}

console.time();
console.log(vowelCount("aaaeeeeiiiiioooooouuuuuuu"));
console.timeEnd();