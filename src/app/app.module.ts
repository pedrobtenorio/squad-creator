import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleBannerComponent } from './components/title-banner/title-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerFormComponent,
    TeamListComponent,
    TitleBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
