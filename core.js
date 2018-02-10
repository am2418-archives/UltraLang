function UltraLang(s){
if(s.indexOf(":") < 5){if(s.toLowerCase.startsWith("gpio:")){this.type = "gpioPin";this.content = new UltraPin(s.slice(5))}else{this.type = "externalRequest";this.content = new UltraRequest(s,true)}};
if(s.startsWith("/")){this.type = "internalRequest";this.content = new UltraRequest(s,false)};
if(s.startsWith(".") || s.startsWith("#") || s.startsWith("<") || !this.type){this.type = "element"};
}
function u(selector){return new UltraLang(selector)}
