var u = {
  el: function(selector,node) {return document.querySelectorAll(selector)[node];},
  html: function(code) {return code;}
};
function s(code) {
this.innerHTML=code;
}
function l(code) {
this.href = code;
}
function st(code) {
this.style = code;
}

/*
Examples:
u.el("#hi",0).s(u.html("<h1>hi</h1>"));
u.el("a",0).l(example.com);
u.el(".hi",0).st("color: red;");
*/
