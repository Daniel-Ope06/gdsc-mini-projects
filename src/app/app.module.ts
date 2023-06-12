import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DreamCatcherComponent } from './pages/dream-catcher/dream-catcher.component';
import { DreamNavBarComponent } from './components/dream-catcher-components/dream-nav-bar/dream-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DreamCatcherComponent,
    DreamNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
