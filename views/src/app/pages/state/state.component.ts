import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  idState:   string;
  stateName: string;
  statesDetails: Object[];

  constructor(
    private router:    Router,
    private route:     ActivatedRoute,
    private statesSrv: StatesService
  ) { }

  ngOnInit() {
    this.idState = this.route.snapshot.paramMap.get('key');
    const stateName = this.statesSrv.getName(this.idState);
    if (this.idState && !stateName) {
      this.router.navigate(['pag404']);
    }
  }
}
