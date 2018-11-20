import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.scss']
})
export class StateDetailsComponent implements OnInit {
  idState:   string;
  stateName: string;

  constructor(
    private titleService: Title,
    private route:        ActivatedRoute,
    private statesSrv:    StatesService
  ) { }

  ngOnInit() {
    this.idState = this.route.snapshot.paramMap.get('key');
    this.stateName = this.statesSrv.getName(this.idState);
    this.titleService.setTitle(this.stateName);
  }

}
