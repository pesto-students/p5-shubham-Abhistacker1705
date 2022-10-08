function parenthesisChecker(s){
    let stack = [];
    let map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    for(let i = 0;i<s.length;i++){
        if(s[i]==="(" || s[i]=== "[" || s[i]==="{")
        {
            stack.push(s[i])
        }else if(stack[stack.length-1] === map[s[i]]){
            stack.pop()
        }
        else return false
    }
    if(stack.length){
        return false
    }else return true
}

console.log(parenthesisChecker(")("))