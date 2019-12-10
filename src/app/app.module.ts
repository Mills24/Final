import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { Product2ListComponent } from './products2/product2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    Product2ListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'products', component : ProductListComponent},
      {path : 'products2', component : Product2ListComponent},
      {path : 'welcome', component : WelcomeComponent},
      {path : '', redirectTo : 'welcome', pathMatch : 'full'},
      {path : '**', redirectTo : 'welcome', pathMatch : 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
