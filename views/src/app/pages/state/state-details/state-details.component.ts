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
  stateDetails;

  constructor(
    private titleService: Title,
    private route:        ActivatedRoute,
    private statesSrv:    StatesService
  ) { }

  ngOnInit() {
    this.idState = this.route.snapshot.paramMap.get('key');
    this.statesSrv.getState(this.idState).subscribe(data => {
      this.stateName = data['name'];
      this.titleService.setTitle(this.stateName);
    });
    this.statesSrv.getStateDetails(this.idState).subscribe(data => {
      this.stateDetails = data;
    });
  }

}
