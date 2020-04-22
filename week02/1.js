//写一个正则表达式 匹配所有 Number 直接量
var NumReg = /[\d]{1,16}|(?:[1-9]+\.[\d]+)|(NaN)|0[xX][1-9a-f]+/
//写一个 UTF-8 Encoding 的函数
function stringToUtf8(str) {
    let strings = []
    for(let char of str) {
      strings.push(`\\u${char.charCodeAt().toString(16)}`)
    }
    return strings.join('')
  }
//写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
var StrReg = /?:[^"]|\.)*"|'(?:[^']|\.)*|^[\u4E00-\u9FA5A-Za-z0-9]+$ /