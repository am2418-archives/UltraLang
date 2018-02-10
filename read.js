var codes = {
javascript: {
a: ['say'],
  b: [function(params) {alert(params[1]);}]
}
};
function splitsplit(t,c,n) {
  var rtrnlst = [""];
  var nn = 0;
  for(var i=0; i<t.length; i++) {
    if (t[i+nn]===n) {
    nn++
    }
  if (t[i+nn]===c && nn%2===0) {
      rtrnlst.push("");
      } else {
      rtrnlst[rtrnlst.length-1] += t[i+nn];
      }
  }
  return rtrnlst;
}
var parameters = [];
var js = ['say'];
function readFunction(code) {
parameters = splitsplit(code,"/","$");
  if (js.indexOf(parameters[0])!==-1) {
codes.javascript.b[codes.javascript.a.indexOf(parameters[0])](parameters);
}
}
