import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
    private titleService:   Title,
    private router:         Router,
    private route:          ActivatedRoute,
    private estadosService: EstadosService
  ) { }

  ngOnInit() {
    this.edoClave = this.route.snapshot.paramMap.get('clave');
    const edoNombre = this.estadosService.getNombre(this.edoClave);
    if (this.edoClave && !edoNombre) {
      this.router.navigate(['pag404']);
      return;
    }
    this.edoNombre = this.edoClave ?
                     edoNombre :
                     'Distribución de instituciones';
    this.titleService.setTitle(this.edoNombre);
    this.edoDetalles = this.estadosService.getDetalleEstados();
  }
}
