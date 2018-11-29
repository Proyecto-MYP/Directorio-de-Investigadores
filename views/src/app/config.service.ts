import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = {
    apiUrl: 'http://localhost:8000/',
    projectName: 'Directorio Mexicano de Investigadores',
    projectAcronym: 'DMI'
  };

  constructor() { }

  getConfig() {
    return this.config;
  }

  getApiUrl() {
    return this.config.apiUrl;
  }

  getProjectName() {
    return this.config.projectName;
  }

  getProjectAcronym() {
    return this.config.projectAcronym;
  }

}
