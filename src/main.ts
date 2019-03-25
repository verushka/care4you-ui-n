import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {SsiModule} from './app/ssi.module';
import {environment} from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SsiModule)
  .catch(err => console.log(err));
