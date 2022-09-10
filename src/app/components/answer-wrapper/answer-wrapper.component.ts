import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-answer',
  template: `
    <ng-container #fieldComponent></ng-container>
    <button class="edit-question__btn" onclick="props.onClick">
      Удалить ответ
    </button>
  `,
  styleUrls: ['./answer-wrapper.component.css'],
})
export class CustomAnswerWrapper extends FieldWrapper {}
