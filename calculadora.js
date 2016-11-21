window.onload=manejarClick;

var cifra1;
cifra1="";

function manejarClick() {
	var uno=document.getElementById("num1");
	uno.addEventListener("click",function(){
								clicEn("1"); 
								});
	var dos=document.getElementById("num2");
	dos.addEventListener("click",function() {
								clicEn("2");
								});
	var tres=document.getElementById("num3");
	tres.addEventListener("click",function() {
								clicEn("3");
								});
	var cuatro=document.getElementById("num4");
	cuatro.addEventListener("click",function(){
								clicEn("4"); 
								});
	var cinco=document.getElementById("num5");
	cinco.addEventListener("click",function() {
								clicEn("5");
								});
	var seis=document.getElementById("num6");
	seis.addEventListener("click",function() {
								clicEn("6");
								});
	var siete=document.getElementById("num7");
	siete.addEventListener("click",function(){
								clicEn("7"); 
								});
	var ocho=document.getElementById("num8");
	ocho.addEventListener("click",function() {
								clicEn("8");
								});
	var nueve=document.getElementById("num9");
	nueve.addEventListener("click",function() {
								clicEn("9");
								});
	var cero=document.getElementById("num0");
	cero.addEventListener("click",function(){
								clicEn("0"); 
								});
	var suma=document.getElementById("suma");
	suma.addEventListener("click",function() {
								clicEn("+");
								});	
	var resta=document.getElementById("resta");
	resta.addEventListener("click",function() {
								clicEn("-");
								});	
	var multi=document.getElementById("multi");
	multi.addEventListener("click",function() {
								clicEn("*");
								});	
	var divi=document.getElementById("divi");
	divi.addEventListener("click",function() {
								clicEn("/");
								});	
	var igual=document.getElementById("igual");
	igual.addEventListener("click",operacion);

	/*var borrar=document.getElementById("borrar");
	borrar.addEventListener("click",borrarpantalla);*/

}
function clicEn(num){
	cifra1 +=num;
	var pant=document.getElementById("pantalla");
	pant.textContent=cifra1;
}
function operacion(){
	var resultado=eval(cifra1);
	var pant=document.getElementById("pantalla");
	pant.textContent=resultado;
}
/*function borrarpantalla() {
	var resultado=eval(cifra1="");

	pant.textContent=
}*/
