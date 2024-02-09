import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AppConfig } from '../../app/app-config';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configuration!: AppConfig;

  constructor(private httpClient: HttpClient) {}

  setConfiguration(): Observable<AppConfig> {
    return this.httpClient
      .get<AppConfig>('./../../assets/app-config.json')
      .pipe(
        tap((config) => {
          if (!config) {
            console.warn('Empty configuration received');
          } else {
            this.configuration = config;
          }
        }),
        catchError((error) => {
          console.error('Error fetching configuration:', error);
          throw error;
        })
      );
  }

  getConfiguration(): AppConfig {
    if (!this.configuration) {
      throw new Error('Configuration has not been loaded yet.');
    }
    return this.configuration;
  }

  getIsProduction(): boolean {
    return this.getConfiguration().production;
  }

  getApiPath(): string {
    return this.getConfiguration().api;
  }
}
