import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgIf} from '@angular/common';
import {ApiService} from '../../api.service';
import {HttpErrorResponse} from '@angular/common/http';

declare var grecaptcha: any;

@Component({
  selector: 'app-coming-soon-form',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './coming-soon-form.component.html',
  styleUrl: './coming-soon-form.component.css'
})

export class ComingSoonFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private apiService: ApiService) {
  }

  buttonState: 'idle' | 'loading' | 'success' = 'idle';
  private toastr = inject(ToastrService);

  onSubmit() {
    if (this.form.invalid) return;
    this.buttonState = 'loading';

    const email = this.form.value.email ?? "";


    grecaptcha.ready(() => {
      grecaptcha.execute('6LfQr20rAAAAAAw30LhJyZwxrSvgVHV0bgATnlWC', {action: 'newsletterSignup'}).then((token: string) => {
        this.apiService.subscribe(email, token).subscribe({
          next: (response) => {
            if (response.success) {
              this.buttonState = 'success';
              this.toastr.success('You have been subscribed!', 'Success 🎉');
            }
          },
          error: (error: HttpErrorResponse) => {
            this.buttonState = 'idle';
            this.toastr.error('Something went wrong. Try again!' + " " + error.error.message, 'Error 😢');
          }
        });
      })
    })
  }
}
