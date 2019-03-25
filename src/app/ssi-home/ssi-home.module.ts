/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HomeRoutesModule} from './home-routes/home-routes.module';

import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

import {SsiHomeComponent} from './ssi-home.component';
import {HomeMainComponent} from './home-main/home-main.component';
import {HomeRootComponent} from './home-root/home-root.component';
import {HomeCarouselComponent} from './home-carousel.component/home-carousel.component';


@NgModule({
  declarations: [
    SsiHomeComponent,
    HomeRootComponent,
    HomeMainComponent,
    HomeCarouselComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomeRoutesModule,
    NgbCarouselModule
  ],
  exports: [
    SsiHomeComponent,
    HomeRootComponent,
    HomeMainComponent,
    HomeCarouselComponent
  ]
})
export class SsiHomeModule {
}
