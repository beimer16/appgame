let monedas = 
{
  e1:0,
  e2:0,
  e3:0,
  e4:0,
  e5:0,
  
}





//Recoger elemento arrastrable//
function evdragstart(ev, el) {
  //ev= el evento, el=elemento arrastrado.
  cont1 = el.parentNode; //guardamos el elemento padre del elemento en una variable.
  ev.dataTransfer.setData("text", ev.target.id); //guardamos datos del elemento.
}
//mientras se arrastra:
function evdragover(ev) {
  //ev=el evento.
  ev.preventDefault(); //quitar comportamiento por defecto.
}
//Al soltar el elemento arrastrado
function evdrop(ev, el) {
  //ev=el evento; el=receptor de soltado
  ev.stopPropagation(); //impedir otras acciones
  ev.preventDefault(); //quitar comportamiento por defecto
  var data = ev.dataTransfer.getData("text"); //recogemos datos del elemento
  mielem = ev.target.appendChild(document.getElementById(data)); //obtenemos el elemento arrastrado
  cont1.appendChild(mielem); //ponemos el elemento arrastrado en el mismo sitio donde estaba.
  mielem2 = mielem.cloneNode(true); //creamos una copia del elemento arrastrado.
  mielem2.setAttribute("draggable", "false"); //impedimos que el nuevo elemento pueda volver a arrastrarse
 // el.appendChild(mielem2); //colocamos la copia en el receptor de soltado
  console.log("Caracteristicas: ", mielem2.name);
  console.log("Caracteristicas: ", mielem2.id);
  
  switch (mielem2.id) {
    case "e1":
    monedas[mielem2.id]+=1;
      break;
    case "e2":
    monedas[mielem2.id]+=1;
      break;
    case "e3":
    monedas[mielem2.id]+=1;    
      break;
    case "e4":
    monedas[mielem2.id]+=1;
      break;
    case "e5":
    monedas[mielem2.id]+=1;
      break;
  }
let total = monedas['e1']+ monedas['e2']+ monedas['e3']+monedas['e4']+ monedas['e5'];
let c1 =Number(monedas['e1']);
let c2 =Number(monedas['e2']);
let c3 =Number(monedas['e3']);
let c4 =Number(monedas['e4']);
let c5 =Number(monedas['e5']);
 document.getElementById("can").value = ""+total;
 document.getElementById("c1").value =""+Number(monedas['e1']*1);
 document.getElementById("c2").value = c2;
 document.getElementById("c3").value = c3;
 document.getElementById("c4").value = c4;
 document.getElementById("c5").value = c5;
 document.getElementById("c6").value = ""+Number(monedas['e1']*50);
 document.getElementById("c7").value = ""+Number(monedas['e2']*100);
 document.getElementById("c8").value = ""+Number(monedas['e3']*200);
 document.getElementById("c9").value = ""+Number(monedas['e4']*500);
 document.getElementById("c10").value = ""+Number(monedas['e5']*1000);

console.log("varq",c1);
}
