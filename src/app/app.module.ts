import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationsContainerComponent } from './components/notificationsContainer/notificationsContainer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotificationComponent,
    NotificationsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
