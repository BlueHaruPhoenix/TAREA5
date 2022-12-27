const nombre = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const anios = document.getElementById("anios");
const sueldo = document.getElementById("sueldo");
const btnEnviar = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");

btnEnviar.onclick = function() {
    nom = nombre.value;
    cat = categoria.value;
    ani = anios.value;


    if(cat == "A"){
        suel=40*30;
    }
    
    if(cat == "B"){
        suel=35*30;
    }
    
    if(cat == "C"){
        suel=30*30;
    }

    if(ani >=1 && ani <= 3){
        neto = suel+(suel*0.15);
    }
    if(ani >=4 && ani <=7){
        neto = suel+(suel*0.20);
    }
    if(ani >= 8 && ani <= 12){
        neto = suel+(suel*0.30)
    }
    if(ani >= 13){
        neto = suel+(suel*0.35);
    }

    sueldo.value= neto;

}
