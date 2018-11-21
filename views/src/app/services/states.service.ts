import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  baseURL = 'http://localhost:8000/states/';

  constructor(
    private http: HttpClient
  ) { }

  getStates() {
    return this.http.get(this.baseURL);
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

  getName(idState: string) {
    return '';
  }

  getStatesDetails() {
    return null;
  }

}
