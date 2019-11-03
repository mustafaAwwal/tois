import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstOutletComponent } from './pages/first-outlet/first-outlet.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { FirstRoutes } from './first.routes';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { TestAreaComponent } from './pages/test-area/test-area.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './pages/result/result.component';



@NgModule({
  declarations: [FirstOutletComponent, LandingPageComponent, JumbotronComponent, TestAreaComponent, QuestionComponent, ResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FirstRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FirstModule { }
