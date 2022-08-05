import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserdataComponent } from './userdata/userdata.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';

const appRoute: Routes = [
  {
    path: '',
    component: UserdataComponent,
  },
  {
    path: 'addbook',
    component: AddbookComponent,
  },
];

@NgModule({
  declarations: [AppComponent, UserdataComponent, AddbookComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
