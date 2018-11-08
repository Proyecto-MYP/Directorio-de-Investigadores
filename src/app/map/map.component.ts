import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from './map.service';
import { URL } from 'url';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  estados = this.mapSrv.getEstados();

  constructor( private mapSrv: MapService, private router: Router) { }

  ngOnInit() {
    const $mapa = document.getElementsByTagName('svg')[0]
    const $etiqueta = document.getElementById('etiqueta');
    const estadosHash = this.mapSrv.getHash();

    // Mostrar el estado en la etiqueta
    $mapa.addEventListener('mouseover', function(evt){
      var target = evt.target as HTMLElement;
      var key = target.dataset.key;
      var edo = estadosHash[key];
      $etiqueta.innerText = edo ? edo : '';
    });

    // Enviar formulario al hacer clic en un edo
    $mapa.addEventListener('click', this.irEstado);

    
  }

  irEstado(evt:MouseEvent){
    const $estadosSelect = document.getElementById('estadoSelect') as HTMLSelectElement;
    const $formulario = document.getElementById('mapaForm') as HTMLFormElement;
    var target = evt.target as HTMLElement;
    var key = target.dataset.key;
    if(key){
      $estadosSelect.value = key;
      // $formulario.submit();
      // this.router.navigate(['/acerca']);
      window.location.href = `/institutos/${key}`;
    }
  }


}
