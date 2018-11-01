import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const $mapa = document.getElementsByTagName('svg')[0]
    const $etiqueta = document.getElementById('etiqueta');
    const $estadosSelect = document.getElementById('estadoSelect') as HTMLSelectElement;
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

    // Poblar el select con los estados
    for(let key in estados){
      let $option = document.createElement('option');
      $option.value = key;
      $option.text = estados[key];
      $estadosSelect.add($option, null);
    }
    
    // Mostrar el estado en la etiqueta
    $mapa.addEventListener('mouseover', function(evt){
      var target = evt.target as HTMLElement;
      var key = target.dataset.key;
      var edo = estados[key];
      $etiqueta.innerText = edo ? edo : '';
    });
    
    // Enviar formulario al hacer clic en un edo
    $mapa.addEventListener('click', function(evt){
      var $formulario = document.getElementById('mapaForm') as HTMLFormElement;
      var target = evt.target as HTMLElement;
      var key = target.dataset.key;
      if(key){
        console.log(key);
        $estadosSelect.value = key;
        $formulario.submit();
      }
      
    });

  }
}
