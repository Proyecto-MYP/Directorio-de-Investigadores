import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EstadosService } from 'src/app/estados.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {
  edoClave: string;
  edoNombre: string;
  edoDetalles: Object[];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private estadosService: EstadosService
  ) { }

  ngOnInit() {
    this.edoClave = this.route.snapshot.paramMap.get('clave');
    this.edoNombre = this.edoClave ?
                     this.estadosService.getNombre(this.edoClave) :
                     'Distribución de instituciones';
    this.titleService.setTitle(this.edoNombre || 'Estado');
    this.edoDetalles = this.estadosService.getDetalleEstados();
  }
}
