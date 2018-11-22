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
    this.site.getConfig().subscribe(data => {
      this.titleService.setTitle(data['projectName']);
      this.projectName = data['projectName'];
    });
  }

}
