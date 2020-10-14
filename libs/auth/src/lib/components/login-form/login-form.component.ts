import { Authenticate } from '@assignments/data-models';

import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'assignments-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent  {

  @Output() submitForm = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submitForm.emit(authenticate);
  }

}
