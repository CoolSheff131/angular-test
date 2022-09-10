import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-input',
  template: `
    <div class="edit-question__field">
      <label for="question-image" class="edit-question__field-label">
        {{ props.label }}
      </label>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
  styleUrls: ['./field-wrapper.component.css'],
})
export class CustomFieldWrapper extends FieldWrapper {}
