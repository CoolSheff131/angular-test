import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CustomAnswerWrapper } from '../components/answer-wrapper/answer-wrapper.component';
import { CustomAnswersWrapper } from '../components/answers-wrapper/answers-wrapper.component';
import { CustomFieldWrapper } from '../components/input-wrapper/field-wrapper.component';
import { CustomQuestionWrapper } from '../components/question-wrapper/question-wrapper.component';
import { CustomQuestionsWrapper } from '../components/questions-wrapper/questions-wrapper.component';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css'],
})
export class EditTestComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: [CustomQuestionsWrapper],
      fieldGroup: [
        {
          wrappers: [CustomQuestionWrapper],
          fieldGroup: [
            {
              key: 'question-text',
              wrappers: [CustomFieldWrapper],
              type: 'input',

              props: {
                label: 'Текст вопроса',
                placeholder: 'Enter email',
                required: true,
              },
            },
            {
              wrappers: [CustomFieldWrapper],
              key: 'file',
              type: 'file',
              props: {
                label: 'Картинка',
              },
            },
            {
              wrappers: [CustomAnswersWrapper],
              fieldGroup: [
                {
                  wrappers: [CustomAnswerWrapper],
                  fieldGroup: [
                    {
                      key: 'answer-text',
                      wrappers: [CustomFieldWrapper],
                      type: 'input',

                      props: {
                        label: 'Текст ответа',
                        placeholder: 'Enter email',
                        required: true,
                      },
                    },
                    {
                      key: 'asnwer-right',
                      wrappers: [CustomFieldWrapper],
                      type: 'checkbox',
                      props: {
                        label: 'Правильный',
                      },
                    },
                    {
                      wrappers: [CustomFieldWrapper],
                      key: 'file',
                      type: 'file',
                      props: {
                        label: 'Загрузить картинку',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
