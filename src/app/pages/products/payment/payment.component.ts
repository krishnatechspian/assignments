import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/components/shared/services/validation.service';
import { CARDNUMBER_PATTERN, CVV_PATTERN } from '../../../components/shared/constants/validation-patterns-list';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm = new FormGroup({
    userFirstName: new FormControl('', [Validators.required]),
    userLastName: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required, Validators.pattern(CARDNUMBER_PATTERN)]),
    cvv: new FormControl('', [Validators.required, Validators.pattern(CVV_PATTERN)]),
    comments: new FormControl('', [Validators.required])
  });

  constructor(
    private validationService: ValidationService,
    private router: Router
  ) {
  }
  /*
  Card Number
   Input: str = “4155279860457”;
  Output: true
  Explanation: The given string satisfies all the above mentioned conditions. Therefore it is a valid Visa Card number.
  Input: str = “4155279”;
  Output: false.
  Explanation: The given string has 7 digits. Therefore it is not a valid Visa Card number.
  Input: str = “6155279860457”;
  Output: false.
  Explanation: The given string doesn’t starts with 4. Therefore it is not a valid Visa Card number.
  */

  /*
  CVV Number
  The valid CVV (Card Verification Value) number must satisfy the following conditions:
  It should have 3 or 4 digits.
  */



  payment(): void {
    if (this.paymentForm.valid) {
      alert('Payment Successfull');


      this.router.navigate(['/']);
    } else {
      this.validationService.markAllFormFieldsAsTouched(this.paymentForm);
    }
  }
}
