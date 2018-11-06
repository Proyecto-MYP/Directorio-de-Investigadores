import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  estados = this.mapSrv.getEstados();

  constructor( private mapSrv: MapService) { }

  ngOnInit() {
    const $mapa = document.getElementsByTagName('svg')[0]
    const $etiqueta = document.getElementById('etiqueta');
    const $estadosSelect = document.getElementById('estadoSelect') as HTMLSelectElement;
    const estadosHash = this.mapSrv.getHash();

    // Mostrar el estado en la etiqueta
    $mapa.addEventListener('mouseover', function(evt){
      var target = evt.target as HTMLElement;
      var key = target.dataset.key;
      var edo = estadosHash[key];
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
