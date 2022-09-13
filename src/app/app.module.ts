import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { ResultsComponent } from './results/results.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QuestionComponent } from './components/question/question.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldFile } from './components/file/file-type.component';
import { FileValueAccessor } from './components/file/file-value-accessor';
import { CustomFieldWrapper } from './components/input-wrapper/field-wrapper.component';
import { CustomAnswerWrapper } from './components/answer-wrapper/answer-wrapper.component';
import { CustomAnswersWrapper } from './components/answers-wrapper/answers-wrapper.component';
import { CustomQuestionWrapper } from './components/question-wrapper/question-wrapper.component';
import { CustomQuestionsWrapper } from './components/questions-wrapper/questions-wrapper.component';
import { TestResultComponent } from './test-result/test-result.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'test', component: TestComponent },
  { path: 'test-result', component: TestResultComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'edit-test', component: EditTestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent,
    ResultsComponent,
    EditTestComponent,
    HeaderComponent,
    QuestionComponent,
    EditTestComponent,
    FileValueAccessor,
    FormlyFieldFile,
    CustomFieldWrapper,
    CustomAnswerWrapper,
    CustomAnswersWrapper,
    CustomQuestionWrapper,
    CustomQuestionsWrapper,
    TestResultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'panel', component: CustomFieldWrapper }],
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],
    }),
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
