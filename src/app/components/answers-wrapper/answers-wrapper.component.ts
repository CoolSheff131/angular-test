import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-answers',
  template: `
    <h1>ОТВЕТЫ</h1>
    <ng-container #fieldComponent></ng-container>
    <button class="edit-question__btn" onclick="props.onClick">
      Добавить ответ
    </button>
  `,
  styleUrls: ['./answers-wrapper.component.css'],
})
export class CustomAnswersWrapper extends FieldWrapper {}
