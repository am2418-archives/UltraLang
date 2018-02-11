var result;
var codes = {
javascript: {
a: ['say','ask'],
  b: [function(params) {alert(params[1]);},function(params) {result=prompt(params[1],params[2]);}]
}
};
function splitsplit(t,c,n,nnnn) {
  var rtrnlst = [""];
  var nn = 0;
  var nnnnn = 0;
  for(var i=0; i<t.length; i++) {
        if (t[i+nn]===n) {
    nn++;
         nnnnn++; 
    }
     if (t[i+nn]===nnnn) {
    nn++;
       nnnnn--;
    }
    if (i+nn<t.length) {

  if (t[i+nn]===c && nnnnn===0) {
      rtrnlst.push("");
      } else {
      rtrnlst[rtrnlst.length-1] += t[i+nn];
      }}
  }
  return rtrnlst;
}

var js = codes.javascript.a;
function readFunction(code) {
  var parameters = [];
parameters = splitsplit(code,"/","(",")");
  for(var aa=0; aa<parameters.length; aa++) {
  if (parameters[aa].search(",")!==-1) {
    readFunction(parameters[aa]);
    parameters[aa] = result;
      }
  }
  if (js.indexOf(parameters[0])!==-1) {
codes.javascript.b[codes.javascript.a.indexOf(parameters[0])](parameters);
}
}
