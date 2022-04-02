import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexJobComponent } from './core/components/index-job/index-job.component';
import { IndexComponent } from './core/components/index/index.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';

import { combineLatest } from 'rxjs/internal/operators';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: 'de', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: '', component: IndexJobComponent },
      { path: '#', component: SwitcherComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
