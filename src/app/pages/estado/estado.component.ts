import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/pages/home/map/map.service';

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
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.edoClave = this.route.snapshot.paramMap.get('key');
    this.edoNombre = this.mapService.getNombre(this.edoClave);
    console.log(this.edoClave, this.edoNombre);
  }
}
