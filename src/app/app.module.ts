import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from '../core/service/configuration-service.service';

const appInitializerFn = (configService: ConfigurationService) => {
  return () => {
    return configService.setConfiguration();
  };
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigurationService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
