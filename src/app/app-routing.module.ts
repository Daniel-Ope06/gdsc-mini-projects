import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DreamCatcherComponent } from './pages/dream-catcher/dream-catcher.component';

const routes: Routes = [
  {path:'dream-catcher', title: 'Dream Catcher', component: DreamCatcherComponent},
  {path:'', redirectTo: 'dream-catcher', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
