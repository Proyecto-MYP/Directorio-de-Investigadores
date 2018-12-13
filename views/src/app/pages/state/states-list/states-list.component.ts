import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StatesService } from 'src/app/services/states.service';
import { StateOverview } from 'src/app/interfaces/stateOverview.interface';
import { Branch } from 'src/app/interfaces/branch.interface';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.scss']
})
export class StatesListComponent implements OnInit {
  statesOverviews: Array<StateOverview>;

  constructor(
    private titleService: Title,
    private statesSrv:    StatesService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Instituciones por estado');
    this.statesOverviews = [];
    this.getOverviews();
  }

  getOverviews() {
    this.statesSrv.getBranches().subscribe(data => {
      const numStates = {};
      for (const branch of data as Array<Branch>) {
        if (numStates[branch.state]) {
          numStates[branch.state] ++;
        } else {
          numStates[branch.state] = 1;
        }
      }
      // tslint:disable-next-line:forin
      for (const state in numStates) {
        this.statesSrv.getState(state)
        .subscribe(st => {
          const sto: StateOverview = {
            branches: numStates[state],
            id_state: state,
            name:     st['name']
          };
          this.statesOverviews.push(sto);
        });
      }
    });
  }

}
