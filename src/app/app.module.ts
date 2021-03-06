import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedNotesComponent } from './shared-notes/shared-notes.component';
import {RouterModule, Routes} from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material';
import {
  MatButtonModule,
  MatChipsModule, MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatSelectModule, MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import {AuthService} from './auth.service';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CreateclassroomComponent } from './createclassroom/createclassroom.component';
import { AddclassroomComponent } from './addclassroom/addclassroom.component';

const routes: Routes = [
  {path: 'tabs', component: TabsComponent},
  {path: '', component: SigninComponent},
  {path: 'onboard', component: OnboardingComponent},
  {path: 'createclassroom', component: CreateclassroomComponent},
  {path: 'addclassroom', component: CreateclassroomComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ProfileComponent,
    SharedNotesComponent,
    ToolbarComponent,
    TabsComponent,
    SigninComponent,
    OnboardingComponent,
    CreateclassroomComponent,
    AddclassroomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
    ),
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
