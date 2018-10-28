import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const $mapa = document.querySelector('#mapa>svg');
    const $etiqueta = document.getElementById('etiqueta');
    const estados = {
        "AS": "Aguascalientes",
        "BC": "Baja California",
        "BS": "Baja California Sur",
        "CC": "Campeche",
        "CS": "Chiapas",
        "CH": "Chihuahua",
        "CL": "Coahuila",
        "CM": "Colima",
        "DF": "Ciudad de México",
        "DG": "Durango",
        "GT": "Guanajuato",
        "GR": "Guerrero",
        "HG": "Hidalgo",
        "JC": "Jalisco",
        "MC": "Estado de México",
        "MN": "Michoacán",
        "MS": "Morelos",
        "NT": "Nayarit",
        "NL": "Nuevo León",
        "OC": "Oaxaca",
        "PL": "Puebla",
        "QO": "Querétaro",
        "QR": "Quintana Roo",
        "SP": "San Luis Potosí",
        "SL": "Sinaloa",
        "SR": "Sonora",
        "TC": "Tabasco",
        "TS": "Tamaulipas",
        "TL": "Tlaxcala",
        "VZ": "Veracruz",
        "YN": "Yucatán",
        "ZS": "Zacatecas"
    }
    $mapa.addEventListener('mouseover', function(evt){
      var key = evt.target.getAttribute('data-key');
      var edo = estados[key];
      $etiqueta.innerText = edo ? edo : '';
  });
}

}
