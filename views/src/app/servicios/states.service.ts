import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(
    private http: HttpClient
  ) { }

  getStates() {
    return this.http.get('http://localhost:8000/states/');
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

}
