import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Router, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { TestingComponent } from './testing/testing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ProductCardComponent } from './product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';



const route=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'app-sign-in-page',component:AboutComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotfoundComponent,
    SignInPageComponent,
    TestingComponent,
    DialogComponent,
    ProductCardComponent,
    CrudOperationComponent,
    TestcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
