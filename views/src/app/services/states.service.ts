import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(
    private site: ConfigService,
    private http: HttpClient
  ) { }

  getStates() {
    const url = this.site.getApiUrl() + 'states/';
    return this.http.get(url);
  }

  getHash() {
    let states;
    const hash = {};
    this.getStates().subscribe(data => {
      states = data;
    });
    for (const state of states.data) {
      hash[state['id_state']] = state['name'];
    }
    return hash;
  }

  getState(idState: string) {
    const apiUrl = this.site.getApiUrl();
    return this.http.get(`${apiUrl}states/${idState}/`);
  }

  getStatesDetails() {
    return null;
  }

}
