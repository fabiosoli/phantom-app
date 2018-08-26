import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module'; // router
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { HomeComponent } from './home/home.component';
// import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // BookmarkListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
