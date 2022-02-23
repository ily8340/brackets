module.exports = function check(str, bracketsConf) {

  let stack = [];

  bracketsConf.forEach(bracket => {
    stack.push(bracket.join(''));
  });

  let a = 0

  while (a < stack.length) {
    if(str.includes(stack[a])){
      str = str.replace(stack[a], '');
      a = 0;
    } else {
      a++
    }
  }

  return str.length === 0; 
}
