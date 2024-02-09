import { InjectionToken } from '@angular/core';

export class AppConfig {
  api!: string;
  production!: boolean;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
