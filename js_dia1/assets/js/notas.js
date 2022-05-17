//ingresando el nombre

var nombre = document.getElementById("nombre");


//HTML Notas
var html1 = document.getElementById("HTML1");
var html2 = document.getElementById("HTML2");
var html3 = document.getElementById("HTML3");
var html_promedio = document.getElementById("HTMLPromedio");

var nota1html = +prompt("Ingresa la nota 1 de html");
var nota2html = +prompt("Ingresa la nota 2 de html");
var nota3html = +prompt("Ingresa la nota 3 de html");

html1.innerHTML = nota1html;
html2.innerHTML = nota2html;
html3.innerHTML = nota3html;
html_promedio.innerHTML = ((nota1html + nota2html + nota3html) / 3).toFixed(2);
//console.log(html_promedio.innerHTML);


//css Notas
var css1 = document.getElementById("CSS1");
var css2 = document.getElementById("CSS2");
var css3 = document.getElementById("CSS3");
var css_promedio = document.getElementById("CSSPromedio");

var nota1css = +prompt("Ingresa la nota 1 de css");
var nota2css = +prompt("Ingresa la nota 2 de css");
var nota3css = +prompt("Ingresa la nota 3 de css");

css1.innerHTML = nota1css;
css2.innerHTML = nota2css;
css3.innerHTML = nota3css;
css_promedio.innerHTML = ((nota1css + nota2css + nota3css) / 3).toFixed(2);


//JS Notas
var js1 = document.getElementById("JS1");
var js2 = document.getElementById("JS2");
var js3 = document.getElementById("JS3");
var js_promedio = document.getElementById("JSPromedio");

var nota1js = +prompt("Ingresa la nota 1 de JS");
var nota2js = +prompt("Ingresa la nota 2 de JS");
var nota3js = +prompt("Ingresa la nota 3 de JS");

js1.innerHTML = nota1js;
js2.innerHTML = nota2js;
js3.innerHTML = nota3js;
js_promedio.innerHTML = ((nota1js + nota2js + nota3js) / 3).toFixed(2);