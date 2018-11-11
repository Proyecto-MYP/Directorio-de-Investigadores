import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  estados = [
    { clave: 'AS', nombre: "Aguascalientes" },
    { clave: 'BC', nombre: "Baja California" },
    { clave: 'BS', nombre: "Baja California Sur" },
    { clave: 'CC', nombre: "Campeche" },
    { clave: 'CS', nombre: "Chiapas" },
    { clave: 'CH', nombre: "Chihuahua" },
    { clave: 'CL', nombre: "Coahuila" },
    { clave: 'CM', nombre: "Colima" },
    { clave: 'DF', nombre: "Ciudad de México" },
    { clave: 'DG', nombre: "Durango" },
    { clave: 'GT', nombre: "Guanajuato" },
    { clave: 'GR', nombre: "Guerrero" },
    { clave: 'HG', nombre: "Hidalgo" },
    { clave: 'JC', nombre: "Jalisco" },
    { clave: 'MC', nombre: "Estado de México" },
    { clave: 'MN', nombre: "Michoacán" },
    { clave: 'MS', nombre: "Morelos" },
    { clave: 'NT', nombre: "Nayarit" },
    { clave: 'NL', nombre: "Nuevo León" },
    { clave: 'OC', nombre: "Oaxaca" },
    { clave: 'PL', nombre: "Puebla" },
    { clave: 'QO', nombre: "Querétaro" },
    { clave: 'QR', nombre: "Quintana Roo" },
    { clave: 'SP', nombre: "San Luis Potosí" },
    { clave: 'SL', nombre: "Sinaloa" },
    { clave: 'SR', nombre: "Sonora" },
    { clave: 'TC', nombre: "Tabasco" },
    { clave: 'TS', nombre: "Tamaulipas" },
    { clave: 'TL', nombre: "Tlaxcala" },
    { clave: 'VZ', nombre: "Veracruz" },
    { clave: 'YN', nombre: "Yucatán" },
    { clave: 'ZS', nombre: "Zacatecas" },
  ];
  
  edoDetalles = [
    {
      clave: 'AS',
      nombre: this.getNombre('AS'),
      cantidadSedes: 4
    },
    {
      clave: 'BC',
      nombre: this.getNombre('BC'),
      cantidadSedes: 6
    },
    {
      clave: 'BS',
      nombre: this.getNombre('BS'),
      cantidadSedes: 2
    },
  ];


  constructor() { }

  getEstados(){
    return this.estados;
  }

  getDetalleEstados(){
    return this.edoDetalles;
  }

  getHash(){
    let hash = {};
    for(let edo of this.estados){
      hash[edo.clave] = edo.nombre
    }
    return hash;
  }

  getNombre(clave:string){
    let hash = this.getHash();
    return hash[clave];
  }
  
}
