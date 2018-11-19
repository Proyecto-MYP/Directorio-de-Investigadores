import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.scss']
})
export class StatesListComponent implements OnInit {
  statesDetails: Object[];

  constructor(
    private titleService: Title,
    private statesSrv:    StatesService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Instituciones por estado');
    this.statesDetails = this.statesSrv.getStatesDetails();
  }

}
