import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { PartService } from '../../Services/part.service';
import { PartComponent } from './part.component';
import { mainState } from './router.config';
import { TreeModule } from 'primeng-lts/tree';

@Component({
  selector: "part-app",
  template: "<ui-view></ui-view>"
})
export class PartConfig { }

const INITIAL_STATES = [mainState];
const INTIAL_COMPONENTS = [PartConfig, PartComponent];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TreeModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true
    })
  ],
  declarations: [INTIAL_COMPONENTS],
  providers: [
    PartService,
    NgbPaginationConfig
  ],
  bootstrap: [PartConfig]
})
export class PartModule { }
