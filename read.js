var codes = {
javascript: {
a: ['say','ask'],
  b: [function(params) {alert(params[1]);},function(params) {zzz=prompt(params[1]);}]
}
};
function splitsplit(t,c,n) {
  var rtrnlst = [""];
  var nn = 0;
  for(var i=0; i<t.length; i++) {
        if (t[i+nn]===n) {
    nn++
    }
    if (i+nn<t.length) {

  if (t[i+nn]===c && nn%2===0) {
      rtrnlst.push("");
      } else {
      rtrnlst[rtrnlst.length-1] += t[i+nn];
      }}
  }
  return rtrnlst;
}

var js = ['say','ask'];
function readFunction(code) {
  var parameters = [];
parameters = splitsplit(code,"/","$");
  for(var aa=0; aa<parameters.length; aa++) {
  if (parameters[aa].search("/")!==-1) {
      var zzz;
    readFunction(parameters[aa]);
    parameters[aa] = zzz;
      }
  }
  if (js.indexOf(parameters[0])!==-1) {
codes.javascript.b[codes.javascript.a.indexOf(parameters[0])](parameters);
}
}
