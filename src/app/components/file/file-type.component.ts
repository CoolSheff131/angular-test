import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  template: `
    <button>Выбрать файл</button>
    <input
      hidden
      id="question-image"
      type="file"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
  styleUrls: ['./file-input.component.css'],
})
export class FormlyFieldFile extends FieldType<FieldTypeConfig> {}
