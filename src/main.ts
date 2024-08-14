import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Amplify } from 'aws-amplify';
import awsExports  from './aws-exports';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

Amplify.configure(awsExports);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));