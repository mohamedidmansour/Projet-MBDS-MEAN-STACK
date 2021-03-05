import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './masterPage/header/header.component';
import { LeftBareComponent } from './masterPage/left-bare/left-bare.component';
import { FooterComponent } from './masterPage/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {AssignmentsComponent} from './assignments/assignments.component';
import {RenduDirective} from './shared/rendu.directive';
import {FormsModule} from '@angular/forms';
import {AssignmentDetailComponent} from './assignments/assignment-detail/assignment-detail.component';
import {AddAssignmentComponent} from './assignments/add-assignment/add-assignment.component';
import {Routes, RouterModule} from '@angular/router';
import {EditAssigmentComponent} from './assignments/edit-assigment/edit-assigment.component';
import {AuthGuard} from './shared/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {LoginPageComponent} from './login-page/login-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {
    path: 'home', component: AssignmentsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'add', component: AddAssignmentComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'assignment/:id', component: AssignmentDetailComponent,
    // canActivate: [AuthGuard],
    //canActivate: [AuthGuard]
  },
  {
    path: 'add', component: AddAssignmentComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'assignment/:id', component: AssignmentDetailComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'assignment/:id/edit',
    component: EditAssigmentComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssigmentComponent,
    HeaderComponent,
    LeftBareComponent,
    FooterComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ScrollingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
