const referencia = document.querySelector('.com');


const modal = document.querySelector('.modal');

//inicio de la pagina en la carga o llamada para mostrar todas las opciones de productos
dibujoAll();
function dibujoAll(){
   limpieza();
if(localStorage.getItem('producto')){
    var array = JSON.parse(localStorage.getItem('producto'));
let tamanno = array.length;
for(let i=0;i<tamanno;i++){
    var elemento = document.createElement('div');
    elemento.classList.add('productoContainer');
   let tipo = array[i].descripcion;
    let pre =array[i].precio;
   let lin = array[i].link;
   let nom = array[i].Nombre;
    elemento.innerHTML = "<img src =" + lin +" alt = 'OH VAYA ALGO SALIO MAL :('></img><span><br></br>Precio C/u : "+ pre + "<br></br>TIPO : "+tipo+"<br></br> Nombre del producto :"+nom+"</span>" ;
    referencia.appendChild(elemento);
}
}
}
function drop(){
    if(localStorage.getItem('producto')){
    var array = JSON.parse(localStorage.getItem('producto'));
    let tamanno = array.length;
    const pedido = document.querySelector('#Nombre');
for(let i=0;i<tamanno;i++){
    if(array[i].Nombre == pedido.value)
    array.splice(i,1);
localStorage.setItem('producto', JSON.stringify(array));
}
alert("Se ha realizado con exito la eliminacion del producto");
dibujoAll();
}

}
function limpieza(){
    const aux = document.querySelectorAll(".productoContainer").length;
    for(let i=0;i<aux;i++){
        document.querySelector(".productoContainer").remove();
    }
}
function mostrar(){
    modal.showModal();
}
//manejo de modal ambos
function cerrar(){
    modal.close();
}
class comida {
    descripcion;
    precio;
    link;
    Nombre;
    constructor(desc,prec,link,nom){
        this.link = link;
        this.precio = prec;
        this.Nombre = nom;
        this.descripcion = desc;
    }
}
  //crea un objeto del tipo comida
function crearcomida(){
    const desc = document.querySelector('#tipo');
    const prec = document.querySelector('#precio');
    const link = document.querySelector('#link');
    const nom = document.querySelector('#Nombre');
    if( prec.value != "" && link.value != ""){
       var cam = new comida(desc.value,prec.value,link.value,nom.value);
        AgregarAlista(cam);
        alert("COMIDA AGREGADA CON EXITO");
        dibujoAll();
}else
        alert("Un campo ingresado no coincide con lo solicitado");
}
//Agrega al localStorage la entidad de comida
function AgregarAlista(cam) {
    let array = [];
  
    if (localStorage.getItem('producto')) {

      array = JSON.parse(localStorage.getItem('producto'));
    }

    array.push(cam);
  
    localStorage.setItem('producto', JSON.stringify(array));
  }
  //muestra los productos segun el boton presionado
  function mostrarProducto(c){
   limpieza();
    if(localStorage.getItem('producto')){
        var array = JSON.parse(localStorage.getItem('producto'));
        let tamanno = array.length;
        for(let i=0;i<tamanno;i++){
            let au= array[i].descripcion;
            var elemento = document.createElement('div');
            elemento.classList.add('productoContainer');
            let pre =array[i].precio;
   let lin = array[i].link;
   let nom = array[i].Nombre;
    switch (c){
        case "Papas": if(au=="Papas") {
            elemento.innerHTML = "<img src =" + lin +" alt = 'OH VAYA ALGO SALIO MAL :('></img><span><br></br>Precio C/u : "+ pre + "<br></br>TIPO : Papas <br></br>Nombre del producto : "+nom+"</span>" ;
            referencia.appendChild(elemento);
        };
            
        break;
        case "Hamburguesas": if(au=="Hamburguesas") {
            elemento.innerHTML = "<img src =" + lin +" alt = 'OH VAYA ALGO SALIO MAL :('></img><span><br></br>Precio C/u : "+ pre + "<br></br>TIPO : Hamburguesa<br></br>Nombre del producto : "+nom+"</span>" ;
            referencia.appendChild(elemento);
        };
        break;
        case "Gaseosas":  if(au=="Gaseosas") {
            elemento.innerHTML = "<img src =" + lin +" alt = 'OH VAYA ALGO SALIO MAL :('></img><span><br></br>Precio C/u : "+ pre + "<br></br>TIPO : Gaseosa<br></br>Nombre del producto : "+nom+"</span>" ;
            referencia.appendChild(elemento);
        };
        break;
    }
    }
}
}
//ordena los productos segun su precio
function orden(m){
limpieza();
 let array = JSON.parse(localStorage.getItem('producto'));
 let tamanno = array.length;
 if(m=="menor"){
   array.sort((a,b) => a.precio - b.precio);
    
 }
 else
 {  
    array.sort((a,b) => b.precio - a.precio);
   
 }
 for(let i=0;i<tamanno;i++){
    var elemento = document.createElement('div');
    elemento.classList.add('productoContainer');
   let tipo = array[i].descripcion;
    let pre =array[i].precio;
   let lin = array[i].link;
   let nom = array[i].Nombre;
    elemento.innerHTML = "<img src =" + lin +" alt = 'OH VAYA ALGO SALIO MAL :('></img><span><br></br>Precio C/u : "+ pre + "<br></br>TIPO : "+tipo+"<br></br>Nombre del producto : "+nom+"</span>" ;
    referencia.appendChild(elemento);
}
}