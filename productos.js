
class cepa{
    constructor(nombre, tipo, thc, sexo, produccion, floracion, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.thc = thc;
        this.sexo = sexo;
        this.produccion = produccion;
        this.floracion = floracion;
        this.precio = precio;
    }
    sumarTotalCompra(){
        totalCompra += this.precio;
    }
}

const cepa1 = new cepa('Wedding cake', 'Hibrida', 24, 'Feminizada', 'XL', '8-9 semanas', 6500);
const cepa2 = new cepa('Gelato', 'Hibrida', 17, 'Regular', 'XXL', '8 semanas', 7500);
const cepa3 = new cepa('Sour Diesel', 'Hibrida', 19, 'Feminizada', 'L', '8-9 semanas', 6000);
const cepa4 = new cepa('OG Kush', 'Hibrida', 18, 'Regular', 'XXL', '8-9 semanas', 6500);
const cepa5 = new cepa('Jack Herer', 'Sativa', 18, 'Feminizada', 'L', '9-10 semanas', 8000);
const cepa6 = new cepa('Northern Lights', 'Indica', 18, 'Regular', 'L', '8 semanas', 7000);
const cepa7 = new cepa('MAC', 'Hibrida', 22, 'Feminizada', 'XL', '8-9 semanas', 7500);
const cepa8 = new cepa('Super Lemon Haze', 'Sativa', 19, 'Feminizada', 'XXL', '9-10 semanas', 5800);
const cepa9 = new cepa('AK-47', 'Hibrida', 19, 'Regular','XL', '8-9 semanas', 5800);
const cepa10 = new cepa('Bubble Gum', 'Hibrida', 17, 'Regular', 'XL', '9-10 semanas', 7000);
const cepa11 = new cepa('Blueberry', 'Indica', 17, 'Feminizada', 'L', '8 semanas', 6300);
const cepa12 = new cepa('Tropicana Cookies', 'Sativa', 16, 'Feminizada', 'XXL', '9-10 semanas', 6000);
const cepa13 = new cepa('Ice Cream', 'Hibrida', 18, 'Regular','XL', '9 semanas', 6900);
const cepa14 = new cepa('Black Diamond', 'Indica', 17, 'Regular', 'L', '8 semanas', 7200);
const cepa15 = new cepa('Haze', 'Sativa', 18, 'Feminizada', 'XL', '9-10 semanas', 5800);
const cepa16 = new cepa('White Fire OG', 'Hibrida', 22, 'Regular', 'L', '9 semanas', 7600);
const cepa17 = new cepa('Nerds', 'Hibrida', 24, 'Feminizada', 'XL', '8-9 semanas', 8000);
const cepa18 = new cepa('Afghani', 'Indica', 18, 'Regular', 'XXL', '8 semanas', 7000);
const cepa19 = new cepa('Sour Tangie', 'Sativa', 18, 'Feminizada', 'XL', '8-9 semanas', 6800);
const cepa20 = new cepa('Blueberry Kush', 'Indica', 18, 'Regular', 'XL', '8 semanas', 7600);

const cepas = [cepa1, cepa2, cepa3, cepa4, cepa5, cepa6, cepa7, cepa8, cepa9, cepa10, cepa11, cepa12, cepa13, cepa14, cepa15, cepa16, cepa17, cepa18, cepa19, cepa20];
const carrito = [];