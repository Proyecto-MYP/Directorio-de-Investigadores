import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-investigadores',
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.scss']
})
export class InvestigadoresComponent implements OnInit {

  constructor(private titleService: Title){ }

  ngOnInit() {
    this.titleService.setTitle('Investigadores');
  }

}
