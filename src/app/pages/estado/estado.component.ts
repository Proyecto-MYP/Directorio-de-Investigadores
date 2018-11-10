import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estadosService: EstadosService
  ) { }

  ngOnInit() {
    this.edoClave = this.route.snapshot.paramMap.get('clave');
    this.edoNombre = this.estadosService.getNombre(this.edoClave);
    if(!this.edoNombre){
      this.router.navigate(['/pag404']);
    }
  }
}
