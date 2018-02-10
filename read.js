var codes = {
javascript: {
a: ['say'],
  b: [function(params) {alert(params[1]);}]
}
};
var parameters = [];
var js = ['say'];
function readFunction(code) {
parameters = code.split("/");
  if (js.indexOf(parameters[0])!==-1) {
codes.javascript.b[codes.javascript.a.indexOf(parameters[0])](parameters);
}
}
