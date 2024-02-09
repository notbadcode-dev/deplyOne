import { Component } from '@angular/core';
import { AppConfig } from './app-config';
import { ConfigurationService } from '../core/service/configuration-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'deployOne';

  config!: AppConfig;

  constructor(private configService: ConfigurationService) {}

  ngOnInit(): void {
    this.config = this.configService.getConfiguration();
  }
}
