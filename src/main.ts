// Angular exports platformBrowserDynamic function that can be used for targetting the browser
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);