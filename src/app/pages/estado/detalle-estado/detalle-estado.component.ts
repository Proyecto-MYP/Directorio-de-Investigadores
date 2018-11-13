import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EstadosService } from 'src/app/estados.service';

@Component({
  selector: 'app-detalle-estado',
  templateUrl: './detalle-estado.component.html',
  styleUrls: ['./detalle-estado.component.scss']
})
export class DetalleEstadoComponent implements OnInit {
  edoClave: string;
  edoNombre: string;

  constructor(
    private titleService:   Title,
    private route:          ActivatedRoute,
    private estadosService: EstadosService
  ) { }

  ngOnInit() {
    this.edoClave = this.route.snapshot.paramMap.get('clave');
    this.edoNombre = this.estadosService.getNombre(this.edoClave);
    this.titleService.setTitle(this.edoNombre);
  }

}
