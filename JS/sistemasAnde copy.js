var MX_imagen = document.createElement("img");
    MX_imagen.setAttribute("width","100px");
    MX_imagen.setAttribute("src","images/novatecfs_mezcladores_estaticos.jpg");
    document.getElementById("resultadoImagen").appendChild(MX_imagen);



function MX_Calculator()
{

    var Q= document.getElementById("caudal").value;
    var densidad= document.getElementById("densidad").value;
    var viscosidad= document.getElementById("viscosidad").value;
    var diametro= document.getElementById("diametro").value;
    var MaxCaidaPresion= document.getElementById("MaxCaidaPresion").value;
    var material= document.getElementById("material").value;
    //var P= document.getElementById("SystemPressure").value;

    Q= Number(Q);
    densidad= Number(densidad);
    diametro= Number(diametro);
    viscosidad= Number(viscosidad);
    MaxCaidaPresion= Number(MaxCaidaPresion);
    material=Number(material);
    
    var diametroInterno=diametro;
    switch (diametro){
    
        case 0.5: diametroInterno=0.622; break;
        case 0.75: diametroInterno=0.824; break;
        case 1.0: diametroInterno=1.049; break;
        case 1.5: diametroInterno=1.61; break;
        case 2.0: diametroInterno=2.067; break;
        case 3.0: diametroInterno=3.068; break;
        case 4.0: diametroInterno=4.026; break;
        case 6.0: diametroInterno=6.065; break;
        case 8.0: diametroInterno=7.976; break;
        case 10.0: diametroInterno=10.02; break;
        case 12.0: diametroInterno=11.938; break;
        case 14.0: diametroInterno=13.124; break;
        case 16.0: diametroInterno=15; break;
    }


    console.log("Caudal: "+Q+" Tipo de dato:  "+typeof Q);
    console.log("Densidad: "+densidad+" Tipo de dato:  "+typeof densidad);
    console.log("Viscosidad"+ viscosidad+" Tipo de dato:  "+typeof viscosidad);
    console.log("Diámetro: "+diametro+" Tipo de dato:  "+typeof diametro);
    console.log("Diámetro Interno:"+diametroInterno+" Tipo de dato: " +typeof diametroInterno);
    console.log("Max caidad de presión:"+MaxCaidaPresion+" Tipo de dato: " +typeof MaxCaidaPresion);
    console.log("Material:"+material+" Tipo de dato: " +typeof material);


    var reynolds= 3157.1*Q*densidad/(diametroInterno*viscosidad);
    console.log("Reynolds: "+reynolds+"Tipo de dato:" +typeof reynolds);


    if(reynolds<=2000.){
        var f= 64./reynolds;
    }
    else{
        if (material <=3)
        var k_d=0.09/(diametroInterno*25.4);
        if (material==4)
        var k_d=0.0015/(diametroInterno*25.4);
        console.log("kd:"+k_d+" Tipo de dato: " +typeof k_d);

        var a=1.0;
        for(i=1;i<=20;i++){
        a=1*Math.log(10.0)/(-2.0*Math.log((k_d/3.7)+(2.51/(reynolds*a))));
        //a=1./(-2.0*Math.log(k_d/3.7)+(2.51/(reynolds*a)));
        //f=Math.pow(a,2);
        f=a*a;
        console.log("f:"+f+" Tipo de dato: " +typeof f);
        }
        console.log("f:"+f+" Tipo de dato: " +typeof f);
    }
    
        

    if (reynolds>1000.) {
        var NumeroElementos=6;
    }
    else if (reynolds<=1000 &&reynolds>500){
        var NumeroElementos=12;
    }
    else if (reynolds<=500 &&reynolds>10){
        var NumeroElementos=18;
    }
    else if (reynolds<=10){
        var NumeroElementos=24;
    }
        
    var L=(NumeroElementos*diametroInterno+2.)/12.;   //Longitud en pies
    console.log("L*12 en pulgadas:"+L*12+" Tipo de dato: " +typeof L);

    //Cálculo de perdidas en tubería
    var Ph=0.0135*f*L*densidad*Math.pow(Q,2)/Math.pow(diametroInterno,5);
    console.log("Ph:"+Ph+" Tipo de dato: " +typeof Ph);

    //Perdida por elementos
    if(reynolds<=10){
        var Ff=6.5;
    }
    else if (reynolds >10 && reynolds <=1000){
        var Ff=1.5*Math.pow(reynolds,0.45);
    }
    else if (reynolds >1000){
        var Ff=(8.5*Math.log(reynolds))-16.;
    }
    console.log("Ff:"+Ff+" Tipo de dato: " +typeof Ff);


    //Perdida de Presión total
    var dP= Ff*Ph;
    console.log("Perdida de presión total (dP):"+dP+" Tipo de dato: " +typeof dP);

    var velocidad=(Q*3.78/(1000*60))/(3.14159265*Math.pow(diametroInterno*2.54/100,2)/4.0);



    velocidad= velocidad.toFixed(2);
    reynolds= reynolds.toFixed(0);
    //velocidad= NumeroElementos.toFixed(2);
    Lmm= L*12*25.4;
    Lmm=Lmm.toFixed(0);
    dP= dP.toFixed(2);

    document.getElementById("V").textContent= velocidad;
    document.getElementById("reynolds").textContent= reynolds;
    document.getElementById("NumeroElementos").textContent= NumeroElementos;
    document.getElementById("Longitud").textContent= Lmm;
    document.getElementById("PerdidaPresion").textContent= dP;
    
    

    var modelMX=0;
    modelMX=modeloMX();
    var modelMX_OPT=0;
    modelMX_OPT=modeloMX_OPT();
    BaseDatos(modelMX);
   
  //ALARMAS
  document.getElementById("alarmaVelocidad").textContent=""
  document.getElementById("alarmaPresion").textContent=""
  var AlarmaVelocidad = "La velocidad debe ser menor a 2.0 m/s para evitar perdidas exageradas de presión, Aumente el diametro del mezclador";
  var AlarmaPresion = "La caida presión es mayor a la máxima permitida. Revise los datos y aumente el diámetro del mezclador si es necesario";
  
  if (velocidad>2.0){
  document.getElementById("alarmaVelocidad").textContent= AlarmaVelocidad;
  }

  if (dP>MaxCaidaPresion){
    document.getElementById("alarmaPresion").textContent= AlarmaPresion;
    }





}


function modeloMX() {

    let diametro=document.getElementById("diametro").value
    diametro= Number(diametro);
    console.log("Diametro DENTRO DE MODELO: "+diametro+" Tipo de dato: " +typeof diametro);
    

    
    let a="0";
   
    switch (diametro) {
        case 0.5:   a= "050"; break;
        case 0.75:  a= "075"; break;
        case 1.0:   a= "100"; break;
        case 1.5:   a= "150"; break;
        case 2.0:   a= "200"; break;
        case 3.0:   a= "300"; break;
        case 4.0:  a= "400"; break;
        case 6.0:  a= "600"; break;
        case 8.0:  a= "800"; break;
        case 10.0:  a= "1000"; break;
        case 12.0:  a= "1200"; break;
        case 14.0:  a= "1400"; break;
        case 16.0:  a= "1600"; break;       
        default: 0;  break;
    }

    console.log("Diametro en modelo: "+a);

let b=document.getElementById("conexion").value
let c=document.getElementById("rating").value
let d=document.getElementById("material").value
let e=document.getElementById("materialElementos").value
let f=document.getElementById("NumeroElementos").textContent
let g=document.getElementById("union").value


console.log("a:"+a +"Tipo de dato  "+typeof a);
console.log("b:"+b +"Tipo de dato  "+typeof b);
console.log("c:"+c +"Tipo de dato  "+typeof c);
console.log("d:"+d +"Tipo de dato  "+typeof d);
console.log("e:"+e +"Tipo de dato  "+typeof e);
console.log("f:"+f +"Tipo de dato  "+typeof f);
console.log("g:"+g +"Tipo de dato  "+typeof g);




modelMX= "MX"+a+b+c+d+e+f+g;
console.log("Modelo MX ADENTRO de function MX:"+modelMX +"Tipo de dato  "+typeof modelMX);
document.getElementById("MODELO").textContent=modelMX;


return modelMX;

}








function BaseDatos (modelMX) {


    console.log("Modelo MX en BASE DE DATOS de function MX:"+modelMX +"  "+typeof modelMX);
        
    //Se le quita elimina el MX al modelo
    let modelRestante=modelMX.slice(2,modelMX.lenght)
    //console.log(modelRestante_PD);

    //Se adquiere del modelo el codigo corepondiente aL DIAMETRO y se le asigna a _a_ se corta esta parte para seguir analizando
    
    var numeros="0123456789";
    
    if (numeros.indexOf(modelRestante.charAt(3))==-1){
        var a= modelRestante.slice(0,3);
        console.log("a: "+a);
        modelRestante=modelRestante.slice(3,modelRestante.lenght);
        console.log("Modelo Restante: "+modelRestante);
    }

    else{
        var a= modelRestante.slice(0,4);
        console.log("a: "+a);
        modelRestante=modelRestante.slice(4,modelRestante.lenght);
        console.log("Modelo Restante: "+modelRestante);

    }

  
    //Se  dquiere del modelo el codigo corepondiente a la CONEXIÓNy se le asigna a _b_ se corta esta parte para seguir analizando 
    if (numeros.indexOf(modelRestante.charAt(2))==-1){
        var b= modelRestante.slice(0,3);
        console.log("b: "+b);
        modelRestante=modelRestante.slice(3,modelRestante.lenght);
        console.log("Modelo Restante: "+modelRestante);
    }

    else{
        var b= modelRestante.slice(0,2);
        console.log("b: "+b);
        modelRestante=modelRestante.slice(2,modelRestante.lenght);
        console.log("Modelo Restante: "+modelRestante);

    }
    

     //Se  adquiere del modelo el codigo corepondiente al RATING se le asigna a _c_ se corta esta parte para seguir analizando 
     var c = modelRestante.slice(0,1);
     console.log("c:  "+c);
     modelRestante=modelRestante.slice(c.length,modelRestante.lenght);
     console.log("Modelo restante a quitarle a, b y c:  "+modelRestante);
       

    //Se  adquiere del modelo el codigo corepondiente al MATERIAL DEL CUERPO se le asigna a _d_ se corta esta parte para seguir analizando 
    var d = modelRestante.slice(0,1);
    console.log("d:  "+d);
    modelRestante=modelRestante.slice(d.length,modelRestante.lenght);
    console.log("Modelo restante a quitarle a, b , c y d:  "+modelRestante);

    //Se  adquiere del modelo el codigo corepondiente al MATERIAL DE ELEMENTOS se le asigna a _e_ se corta esta parte para seguir analizando 
    var e = modelRestante.slice(0,1);
    console.log("e:  "+e);
    modelRestante=modelRestante.slice(e.length,modelRestante.lenght);
    console.log("Modelo restante a quitarle a, b, c, d y e:  "+modelRestante);

    //Se  adquiere del modelo el codigo corepondiente al NÚMERO DE ELEMENTOS se le asigna a _f_ se corta esta parte para seguir analizando 
    if(modelRestante.lenght==1)    {
    var f = modelRestante.slice(0,1);
    console.log("f:  "+f);
    console.log("Terminamos:  ");
    }
    else if ( modelRestante.charAt(1)=="B"){
    var f = modelRestante.slice(0,1);
    console.log("f:  "+f);
    modelRestante=modelRestante.slice(f.length,modelRestante.lenght);
    var g=modelRestante;
    console.log("Modelo restante a quitarle a, b, c, d y e y f:  "+modelRestante+ "y g:"+g);
    }
    else if ( modelRestante.charAt(2)!="B") {
    var f = modelRestante.slice(0,2);
    console.log("f:  "+f);
    console.log("Terminamos:  ");
    }

    else {
        var f = modelRestante.slice(0,2);
        console.log("f:  "+f);
        modelRestante=modelRestante.slice(f.length,modelRestante.lenght);
        var g=modelRestante;
        console.log("Modelo restante a quitarle a, b, c, d y e y f:  "+modelRestante+ "y g:"+g);
        }



    //DESCRIPTION Y PRICING

    
    var description = "Mezclador Estático, ";
    switch (a) {
        case "050": description = description + "1/2 in ";   break;
        case "075": description = description + "3/4 in ";   break;
        case "100": description = description + "1 in ";  break;
        case "150": description = description + "1 1/2 in";  break;
        case "200": description = description + "2 in ";  break;
        case "300": description = description + "3 in ";  break;
        case "400": description = description + "4 in ";  break;
        case "500": description = description + "5 in ";    break;
        case "600": description = description + "6 in ";    break;
        case "800": description = description + "8 in ";   break;  
        case "1000": description = description + "10 in ";   break;  
        case "1200": description = description + "12 in ";   break;   
        case "1400": description = description + "14 in ";   break; 
        case "1600": description = description + "16 in ";   break;  
        default:  break;       
    }

    description = description + ", Conexión:"
    switch (b) {
        case "NPT": description = description + "NPT "; break;
        case "SO": description = description + "Bridada "; break;
        case "CL": description = description + "Sanitaria"; break;        
        default:  break;       
    }

    description = description + ", Rating:"
    switch (c) {
        case "1": description = description + "150# "; break;
        case "2": description = description + "300# "; break;
        case "3": description = description + "600#"; break;     
        default:  break;       
    }

    description = description + ", Material Cuerpo:"
    switch (d) {
        case "1": description = description + "Carbón Steel "; break;
        case "2": description = description + "304SS"; break;
        case "3": description = description + "316SS"; break;
        case "4": description = description + "PVC Sch 80 "; break;          
        default:  break;       
    }

    description = description + ", Material Elementos:"
    switch (e) {
        case "1": description = description + "Carbón Steel "; break;
        case "2": description = description + "304SS"; break;
        case "3": description = description + "316SS"; break;
        case "4": description = description + "304SS + Recubrimiento en Fiabra de vidrio "; break;       
        default:  break;       
    }


    description = description + ", Número de Elementos:"
    description = description + " " + f + "  ";

    switch (g) {
        case "": description = description + "Sin Boquilla"; break;
        case "B": description = description + "Boquilla de 1/2in" ; break;
        case "B20": description = description + "Boquilla de 3/4 in" ; break;
        case "B25": description = description + "Boquilla de 1in" ; break;
        case "B40": description = description + "Boquilla de 1 1/2in" ; break;
        
        default:  break;       
    }



    console.log("Description: " + description);
    document.getElementById("tdDescription").innerText = description;

    console.log("MoldelMx: " + modelMX);
    document.getElementById("tdModel").innerText = modelMX;



    /*
    var price ="";
    
    switch (c) {
        case "E":   
            switch (b) {
                case "N":
                    switch (a) {
                        case "0011": price = 178.; break;
                        case "0012": price = 191.; break;
                        case "0013": price = 202.; break;
                        case "0021": price = 218.; break;
                        case "0022": price = 256.; break;
                        case "0023": price = 268.; break;
                        case "0031": price = 298.;  break;
                        case "0032": price = 409.;  break;
                        case "0033":price =  491.;  break;    
                        default:  break;       
                    } 
                break;  

                case "PP": 
                    switch (a) {
                        case "0011": price = 173.; break;
                        case "0012": price = 180.; break;
                        case "0013": price = 183.; break;
                        case "0021": price = 205.; break;
                        case "0022": price = 236.; break;
                        case "0023": price = 241.; break;
                        case "0031": price = 263.;  break;
                        case "0032": price = 333.;  break;
                        case "0033":price =  373.;  break;    
                        default:  break;    
                    }
                break;
                        
                case "P": 
                    switch (a) {
                        case "0011": price = 183.; break;
                        case "0012": price = 210.; break;
                        case "0013": price = 225.; break;
                        case "0021": price = 218.; break;
                        case "0022": price = 265.; break;
                        case "0023": price = 317.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = "N/A";  break;
                        case "0033": price = "N/A";  break;    
                        default:  break;    
                    }
                break;

                case "CP": 
                    switch (a) {
                        case "0011": price = 251.; break;
                        case "0012": price = 385.; break;
                        case "0013": price = 396.; break;
                        case "0021": price = 405.; break;
                        case "0022": price = 743.; break;
                        case "0023": price = 747.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = "N/A";  break;
                        case "0033": price = "N/A";  break;    
                        default:  break;    
                    }
                break;

                case "K": 
                    switch (a) {
                        case "0011": price = 213.; break;
                        case "0012": price = 249.; break;
                        case "0013": price = 282.; break;
                        case "0021": price = 303.; break;
                        case "0022": price = 459.; break;
                        case "0023": price = 747.; break;
                        case "0031": price = 543.;  break;
                        case "0032": price = 942.;  break;
                        case "0033": price = 1311.;  break;    
                        default:  break;    
                    }
                break;

                case "S": 
                    switch (a) {
                        case "0011": price = "N/A"; break;
                        case "0012": price = 507.;  break;
                        case "0013": price = 706.;  break;
                        case "0021": price = "N/A"; break;
                        case "0022": price = 735.;  break;
                        case "0023": price = 1114.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = 1179.;  break;
                        case "0033": price = 1759.;  break;    
                        default:  break;    
                    }
                break;
                        
                default:  break;
            }      
        break;           
        
        case "H": 
            switch (b) {
                case "N":
                    switch (a) {
                        case "0011": price = 184.; break;
                        case "0012": price = 195.; break;
                        case "0013": price = 206.; break;
                        case "0021": price = 225.; break;
                        case "0022": price = 262.; break;
                        case "0023": price = 274.; break;
                        case "0031": price = 348.;  break;
                        case "0032": price = 430.;  break;
                        case "0033":price =  512.;  break;    
                        default:  break;       
                    } 
                break;  

                case "PP": 
                    switch (a) {
                        case "0011": price = 179.; break;
                        case "0012": price = 183.; break;
                        case "0013": price = 187.; break;
                        case "0021": price = 212.; break;
                        case "0022": price = 241.; break;
                        case "0023": price = 247.; break;
                        case "0031": price = 313.;  break;
                        case "0032": price = 353.;  break;
                        case "0033": price = 394.;  break;    
                        default:  break;    
                    }
                break;
                        
                case "P": 
                    switch (a) {
                        case "0011": price = 205.; break;
                        case "0012": price = 215.; break;
                        case "0013": price = 230.; break;
                        case "0021": price = "N/A"; break;
                        case "0022": price = 316.; break;
                        case "0023": price = 322.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = "N/A";  break;
                        case "0033": price = "N/A";  break;    
                        default:  break;    
                    }
                break;

                case "CP": 
                    switch (a) {
                        case "0011": price = 227.; break;
                        case "0012": price = 387.; break;
                        case "0013": price = 398.; break;
                        case "0021": price = "N/A"; break;
                        case "0022": price = 745.; break;
                        case "0023": price = 753.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = "N/A";  break;
                        case "0033": price = "N/A";  break;    
                        default:  break;    
                    }
                break;

                case "K": 
                    switch (a) {
                        case "0011": price = 219.; break;
                        case "0012": price = 252.; break;
                        case "0013": price = 286.; break;
                        case "0021": price = 310.; break;
                        case "0022": price = 405.; break;
                        case "0023": price = 465.; break;
                        case "0031": price = 593.;  break;
                        case "0032": price = 962.;  break;
                        case "0033": price = 1331.;  break;    
                        default:  break;    
                    }
                break;

                case "S": 
                    switch (a) {
                        case "0011": price = "N/A"; break;
                        case "0012": price = 520.;  break;
                        case "0013": price = 706.;  break;
                        case "0021": price = "N/A"; break;
                        case "0022": price = 753.;  break;
                        case "0023": price = 1123.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = 1192.;  break;
                        case "0033": price = 1772.;  break;    
                        default:  break;    
                    }
                break;
                        
                default:  break;
            }  
        break;



        case "V":      
            switch (b) {
                case "N":
                    switch (a) {
                        case "0011": price = 212.; break;
                        case "0012": price = 236.; break;
                        case "0013": price = 247.; break;
                        case "0021": price = 267.; break;
                        case "0022": price = 357.; break;
                        case "0023": price = 369.; break;
                        case "0031": price = 397.;  break;
                        case "0032": price = 589.;  break;
                        case "0033":price =  671.;  break;    
                        default:  break;       
                    } 
                break;  

                case "PP": 
                    switch (a) {
                        case "0011": price = 207.; break;
                        case "0012": price = 224.; break;
                        case "0013": price = 228.; break;
                        case "0021": price = 254.; break;
                        case "0022": price = 336.; break;
                        case "0023": price = 342.; break;
                        case "0031": price = 362.;  break;
                        case "0032": price = 512.;  break;
                        case "0033": price = 553.;  break;    
                        default:  break;    
                    }
                break;
                        
                case "P": 
                    switch (a) {
                        case "0011": price = 240.; break;
                        case "0012": price = 263.; break;
                        case "0013": price = 275.; break;
                        case "0021": price = "N/A"; break;
                        case "0022": price = 365.; break;
                        case "0023": price = 370.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = "N/A";  break;
                        case "0033": price = "N/A";  break;    
                        default:  break;    
                    }
                break;

                case "CP": 
                    switch (a) {
                        case "0011": price = 282.; break;
                        case "0012": price = 427.; break;
                        case "0013": price = 435.; break;
                        case "0021": price = "N/A"; break;
                        case "0022": price = 789.; break;
                        case "0023": price = 785.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = "N/A";  break;
                        case "0033": price = "N/A";  break;    
                        default:  break;    
                    }
                break;

                case "K": 
                    switch (a) {
                        case "0011": price = 247.; break;
                        case "0012": price = 294.; break;
                        case "0013": price = 327.; break;
                        case "0021": price = 352.; break;
                        case "0022": price = 500.; break;
                        case "0023": price = 560.; break;
                        case "0031": price = 642.;  break;
                        case "0032": price = 1121.;  break;
                        case "0033": price = 1490.;  break;    
                        default:  break;    
                    }
                break;

                case "S": 
                    switch (a) {
                        case "0011": price = "N/A"; break;
                        case "0012": price = 552.;  break;
                        case "0013": price = 751.;  break;
                        case "0021": price = "N/A"; break;
                        case "0022": price = 852.;  break;
                        case "0023": price = 1177.; break;
                        case "0031": price = "N/A";  break;
                        case "0032": price = 1290.;  break;
                        case "0033": price = 1870.;  break;    
                        default:  break;    
                    }
                break;
                        
                default:  break;
            } 
        break;        
    }

    
    //añadir precio por tipo de manómetro

    switch (d) {
        case "0": price= price;       break;
        case "1": price= price+48.;   break;
        case "2": price= price+89.;   break;
        case "3": price= price;       break;
        case "4": price= price+48.;   break;
        case "5": price= price+89.;   break;
        case "6": price= "Consult factory";       break;
        case "7": price= "Consult factory";       break;
        case "8": price= "Consult factory";       break;

    
        default:
            break;
    }

    switch (f) {
        case "": price=price;             break;
        case "B": price= "Consult factory"; break;
        case "F": price= "Consult factory"; break;
        case "R": price= "Consult factory"; break;
        case "S": price= "Consult factory"; break;
        case "U": price= "Consult factory"; break;
        case "UD":price= "Consult factory"; break;
        case "UZ": price= "Consult factory"; break;
        case "M": price= "Consult factory"; break;
        case "M8": price= "Consult factory"; break;
        default:  break;       
    }
    
    
    console.log("price: " + price);
    document.getElementById("tdPriceL").innerText = price;
    
    var descuento= document.getElementById("tdDiscount").innerText;
    console.log("descuento: " + descuento + "tipo de dato:"+ typeof descuento);
    descuento = parseFloat(descuento);
    console.log("descuento: " + descuento + "tipo de dato:"+ typeof descuento);
    var precioUnitario= price*(1.-descuento);
    console.log("Precio Unitario: " + precioUnitario + "tipo de dato:"+ typeof precioUnitario);
    document.getElementById("tdUnitaryPrice").innerText = precioUnitario ;

    var cantidad= document.getElementById("tdQty").innerText;
    console.log("Cantidad: " + cantidad + "tipo de dato:"+ typeof cantidad);
    cantidad = parseInt(cantidad);
    console.log("Cantidad: " + cantidad + "tipo de dato:"+ typeof cantidad);
    var precioParcial= cantidad*precioUnitario;
    console.log("Precio Parcial: " + precioParcial + "tipo de dato:"+ typeof precioParcial);
    document.getElementById("tdParcialPrice").innerText = precioParcial ;

*/


}


function modeloMX_OPT() {

    let diametro=document.getElementById("diametro").value
    diametro= Number(diametro);
    console.log("Diametro DENTRO DE MODELO: "+diametro+" Tipo de dato: " +typeof diametro);
    

    
    let a="0";
   
    switch (diametro) {
        case 0.5:   a= ".50"; break;
        case 0.75:  a= ".75"; break;
        case 1.0:   a= "10"; break;
        case 1.5:   a= "15"; break;
        case 2.0:   a= "20"; break;
        case 3.0:   a= "30"; break;
        case 4.0:  a= "40"; break;
        case 6.0:  a= "60"; break;
        case 8.0:  a= "80"; break;
        case 10.0:  a= "100"; break;
        case 12.0:  a= "120"; break;
        case 14.0:  a= "140"; break;
        case 16.0:  a= "160"; break;       
        default: 0;  break;
    }

    console.log("Diametro en modelo: "+a);

let b=document.getElementById("conexion").value
let c=document.getElementById("rating").value
let d=document.getElementById("material").value
let e=document.getElementById("materialElementos").value
let f=document.getElementById("NumeroElementos").textContent
let g=document.getElementById("union").value


console.log("a:"+a +"Tipo de dato  "+typeof a);
console.log("b:"+b +"Tipo de dato  "+typeof b);
console.log("c:"+c +"Tipo de dato  "+typeof c);
console.log("d:"+d +"Tipo de dato  "+typeof d);
console.log("e:"+e +"Tipo de dato  "+typeof e);
console.log("f:"+f +"Tipo de dato  "+typeof f);
console.log("g:"+g +"Tipo de dato  "+typeof g);





let modelMX_OPT= "ME-"+f+d+b+a+d+e+"-"+c+g;

console.log("Modelo OPT MX ADENTRO de function MX:"+modelMX +"Tipo de dato  "+typeof modelMX);
document.getElementById("MODELO_OPT").textContent=modelMX_OPT;


return modelMX;

}


