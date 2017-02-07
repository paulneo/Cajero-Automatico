class billete {
  constructor(v,c) {
    this.valor = v;
    this.cantidad =c;
  }
}
var caja = [];
caja.push(new billete (50,3));
caja.push(new billete (20,2));
caja.push(new billete (10,2));


var dinero = 180;
var entregado = [];
var divicion;
var papeles;

for (var b of caja ){
  if (dinero > 0) {
    divicion = Math.floor(dinero/b.valor)
    if (divicion>b.cantidad) {
      papeles= b.cantidad;
    }
    else {
      papeles= divicion;
    }
    entregado.push(new billete(b.valor,papeles));
    dinero = dinero - (b.valor *papeles);
  }
}
