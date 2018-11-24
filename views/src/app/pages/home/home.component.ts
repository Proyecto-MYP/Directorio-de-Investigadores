import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projectName;

  constructor(
    private site: ConfigService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.projectName = this.site.getProjectName();
    this.titleService.setTitle(this.projectName);
  }

}
