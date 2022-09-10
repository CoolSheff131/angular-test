import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-answers',
  template: `
    <ng-container #fieldComponent></ng-container>
    <button class="edit-question__btn" onclick="props.onClick">
      Удалить вопрос
    </button>
  `,
  styleUrls: ['./question-wrapper.component.css'],
})
export class CustomQuestionWrapper extends FieldWrapper {}
