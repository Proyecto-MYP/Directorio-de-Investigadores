import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadosService } from 'src/app/estados.service';

@Component({
  selector: 'app-lista-estados',
  templateUrl: './lista-estados.component.html',
  styleUrls: ['./lista-estados.component.scss']
})
export class ListaEstadosComponent implements OnInit {
  edoDetalles: Object[];

  constructor(
    private titleService:   Title,
    private router:         Router,
    private route:          ActivatedRoute,
    private estadosService: EstadosService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Instituciones por estado');
    this.edoDetalles = this.estadosService.getDetalleEstados();
  }

}
