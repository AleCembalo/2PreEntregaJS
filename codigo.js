
//INGRESO MAYOR DE EDAD


let edad = parseInt(prompt('Ingresa tu edad'));

if (edad < 17){
    alert('Eres menor de edad, no puedes ingresar.');
    }else if (edad >= 18){
        alert('Eres mayor, bienvenido al mercado de semillas! 🌱');
    }else{
        alert('Debes ingresar tu edad.');
    }


//MENU

const nombresTodasLasCepas = cepas.map(cepa => (cepa.nombre)).join('\n').toString();
const feminizadas = cepas.filter (cepa=> cepa.sexo === 'Feminizada');
const nombresFeminizadas = feminizadas.map(cepa=> (cepa.nombre)).join('\n').toString();
const regulares = cepas.filter (cepa=> cepa.sexo === 'Regular');
const nombresRegulares = regulares.map(cepa=> (cepa.nombre)).join('\n').toString();
const xxl = cepas.filter (cepa=> cepa.produccion === 'XXL');
const nombresXxl = xxl.map(cepa=> (cepa.nombre)).join('\n').toString();

let menu = 'MENU\n\n';
menu += '1. Todas\n';
menu += '2. Feminizadas\n';
menu += '3. Regulares\n';
menu += '4. Alta produccion\n';
menu += '5. Salir\n';
menu += 'Ingresa una opcion\n';

let entrada = 0;

do{
    entrada = parseInt(prompt(menu));

    switch(entrada){
        case 1: 
            alert('Todas nuestras variedades:\n\n' + nombresTodasLasCepas);
            break;
        case 2:
            alert('Semillas femenizadas:\n\n' + nombresFeminizadas);
            break;
        case 3:
            alert('Semillas regulares:\n\n' + nombresRegulares);
            break;
        case 4:
            alert('Semillas de alta producción:\n\n' + nombresXxl);
            break;
        case 5:
            alert('Adios! 👋');
            break;  
        default:
            alert('El código no existe');
            break;   
    }

}while(entrada != 5);

//COMPRA

let totalCompra = 0; 

let variedad = prompt('Elige la variedad:\n\n1) Wedding Cake (pack x 3): $6500\n2) Gelato (pack x 3): $7500\n3) Sour Diesel (pack x 3): $6000\n4) OG Kush (pack x 3): $6500\n5) Jack Herer (pack x 3): $8000\n6) Northern Lights (pack x 3): $7000\n7) MAC (pack x 3): $7500\n8) Super Lemon Haze (pack x 3): $5800\n9) AK-47 (pack x 3): $5800\n10) Bubble Gum (pack x 3): $7000\n11) Blueberry (pack x 3): $6300\n12) Tropicana Cookies (pack x 3): $6000\n13) Ice Cream (pack x 3): $6900\n14) Black Diamond (pack x 3): $7200\n15) Haze (pack x 3): $5800\n16) White Fire OG (pack x 3): $7600\n17) Nerds (pack x 3): $8000\n18) Afghani (pack x 3): $7000\n19) Sour Tangie (pack x 3): $6800\n20) Blueberry Kush (pack x 3): $7600\n\nIngresa "t" Para terminar');

while (variedad != 't'){

    switch (variedad){
        case '1':
            cepa1.sumarTotalCompra();
            carrito.push(cepa1.nombre);
            alert ('Wedding Cake (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;    
        case '2':
            cepa2.sumarTotalCompra();
            carrito.push(cepa2.nombre);
            alert('Gelato (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '3':
            cepa3.sumarTotalCompra();
            carrito.push(cepa3.nombre);
            alert('Sour Diesel (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '4':
            cepa4.sumarTotalCompra();
            carrito.push(cepa4.nombre);
            alert('OG Kush (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '5':
            cepa5.sumarTotalCompra();
            carrito.push(cepa5.nombre);
            alert('Jack Herer (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '6':
            cepa6.sumarTotalCompra();
            carrito.push(cepa6.nombre);
            alert('Northern Lights (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '7':
            cepa7.sumarTotalCompra();
            carrito.push(cepa7.nombre);
            alert('MAC (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '8':
            cepa8.sumarTotalCompra();
            carrito.push(cepa8.nombre);
            alert('Super Lemon Haze (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '9':
            cepa9.sumarTotalCompra();
            carrito.push(cepa9.nombre);
            alert('AK-47 (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '10':
            cepa10.sumarTotalCompra();
            carrito.push(cepa10.nombre);
            alert('Bubble Gum (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '11':
            cepa11.sumarTotalCompra();
            carrito.push(cepa11.nombre);
            alert('Blueberry (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '12':
            cepa12.sumarTotalCompra();
            carrito.push(cepa12.nombre);
            alert('Tropicana Cookies (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '13':
            cepa13.sumarTotalCompra();
            carrito.push(cepa13.nombre);
            alert('Ice Cream (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '14':
            cepa14.sumarTotalCompra();
            carrito.push(cepa14.nombre);
            alert('Black Diamond (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '15':
            cepa15.sumarTotalCompra();
            carrito.push(cepa15.nombre);
            alert('Haze (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '16':
            cepa16.sumarTotalCompra();
            carrito.push(cepa16.nombre);
            alert('White Fire OG (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '17':
            cepa17.sumarTotalCompra();
            carrito.push(cepa17.nombre);
            alert('Nerds (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '18':
            cepa18.sumarTotalCompra();
            carrito.push(cepa18.nombre);
            alert('Afghani (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '19':
            cepa19.sumarTotalCompra();
            carrito.push(cepa19.nombre);
            alert('Sour Tangie (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;
        case '20':
            cepa20.sumarTotalCompra();
            carrito.push(cepa20.nombre);
            alert('Blueberry Kush (pack x 3), agregado al carrito. Subtotal hasta el momento $'+totalCompra);
            break;        
        default:
            alert('Codigo inexistente');
            break;    
    }
    variedad = prompt('Elige la variedad:\n1) Wedding Cake (pack x 3): $6500\n2) Gelato (pack x 3): $7500\n3) Sour Diesel (pack x 3): $6000\n4) OG Kush (pack x 3): $6500\n5) Jack Herer (pack x 3): $8000\n6) Northern Lights (pack x 3): $7000\n7) MAC (pack x 3): $7500\n8) Super Lemon Haze (pack x 3): $5800\n9) AK-47 (pack x 3): $5800\n10) Bubble Gum (pack x 3): $7000\n11) Blueberry (pack x 3): $6300\n12) Tropicana Cookies (pack x 3): $6000\n13) Ice Cream (pack x 3): $6900\n14) Black Diamond (pack x 3): $7200\n15) Haze (pack x 3): $5800\n16) White Fire OG (pack x 3): $7600\n17) Nerds (pack x 3): $8000\n18) Afghani (pack x 3): $7000\n19) Sour Tangie (pack x 3): $6800\n20) Blueberry Kush (pack x 3): $7600\n\nIngresa "t" Para terminar');
}


alert('Tu compra:\n'+ carrito.join("\n") +'\n\nTotal: $'+ totalCompra);

//MEDIO DE PAGO

let medioDePago = prompt('Ingrese medio de pago (tarjeta - efectivo - transferencia)');
let cuotas;


    switch(medioDePago.toLowerCase()){
        case 'transferencia':
            alert('Abonaras la cantiad de $' + totalCompra);
            break;
        case 'efectivo':
            descontarPagoEfectivo();
            break;
        case 'tarjeta':
            cuotas = prompt('Ingrese N° de cuotas: 1-3-6');
            break;
        default:
            alert('Ingresa el medio de pago!');
    }

switch(cuotas){
    case '1':    
        alert('Abonaras 1 cuota de $' + totalCompra);
        break;
    case '3':
        recargarEn3cuotas();
        break;
    case '6':
        recargarEn6cuotas();
    default:
}

function descontarPagoEfectivo(){
    totalCompra = (totalCompra * 0.9).toFixed(2);
    alert('Total con descuento por pago en efectivo: $' + totalCompra);
}

function recargarEn3cuotas(){
    totalCompra = ((totalCompra + totalCompra * 0.3)/3).toFixed(2);
    alert('abonaras 3 cuotas de $' + totalCompra);
}

function recargarEn6cuotas(){
    totalCompra = ((totalCompra + totalCompra * 0.6)/6).toFixed(2);
    alert('abonaras 6 cuotas de $' + totalCompra);
}

//BUSQUEDAS

const bajoThc = cepas.filter(cepa=> cepa.thc < 19);
const nombresBajoThc = bajoThc.map(cepa => cepa.nombre).join('\n').toString();
const altoThc = cepas.filter(cepa=> cepa.thc >= 19);
const nombresAltoThc = altoThc.map(cepa => cepa.nombre).join('\n').toString();

let busquedathc = prompt('Encuentra tu semilla segun % de THC (alto / bajo)').toLowerCase();

if (busquedathc.toLowerCase() == 'alto'){
    alert('Variedades con alto THC:\n\n'+ nombresAltoThc);
}else if (busquedathc.toLowerCase() =='bajo'){
    alert('Variedades con bajo THC:\n\n' + nombresBajoThc);
}else {
    alert('Ingresa "bajo" o "alto"');
}

const sativa = cepas.filter((cepa)=> cepa.tipo === 'Sativa');
const nombresSativas = sativa.map(cepa => cepa.nombre).join('\n').toString();
const indica = cepas.filter((cepa)=> cepa.tipo === 'Indica');
const nombresIndicas = indica.map(cepa => cepa.nombre).join('\n').toString();
const hibrida = cepas.filter((cepa)=> cepa.tipo === 'Hibrida');
const nombresHibridas = hibrida.map(cepa => cepa.nombre).join('\n').toString();

let busquedaTipo = prompt('Que buscas?. Indica, Sativa o Hibrida').toLowerCase();

switch (busquedaTipo.toLowerCase()){
    case 'indica':
        alert('Indicas:\n\n'+nombresIndicas);
        break;
    case 'sativa':
        alert('Sativas:\n\n'+nombresSativas);
        break;
    case 'hibrida':
        alert('Hibridas:\n\n'+nombresHibridas);
        break;
    default:
        alert('Ingresa alguna busqueda!');
        break;       
}