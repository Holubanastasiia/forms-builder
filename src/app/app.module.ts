import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementComponent } from './components/element/element.component';
import { BuilderComponent } from './components/builder/builder.component';
import { PortalModule } from '@angular/cdk/portal';
import { HeaderComponent } from './components/header/header.component';
import { GenStylesSectionComponent } from './components/gen-styles-section/gen-styles-section.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    BuilderComponent,
    HeaderComponent,
    GenStylesSectionComponent,
    StyleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    PortalModule,
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
