// JavaScript Document

function Rezult(){
	let rez = document.getElementById('in_put').value;
	return rez;
};
////////// ввод цифры
for(let i=0; i<10; i++) {
	document.getElementById("btn"+i).onclick = function(){
		document.getElementById('in_put').value=Rezult()+i;
	}
	};
///////// результат
btn12.onclick=function(){
	document.getElementById('in_put').value=eval(Rezult());
};
////////// память
let buff=0;
btn_save.onclick = function(){
	buff=document.getElementById('in_put').value;
	//console.log(buff);
};
btn_insert.onclick = function(){
	document.getElementById('in_put').value = buff;
};
/////////сброс C
btn_rez.onclick = function(){
	let rez = document.getElementById('in_put').value='';	
};
///////// backspace
btn_bs.onclick = function(){
	let rez = in_put.value.slice(0, -1);
	document.getElementById('in_put').value = rez;
};













