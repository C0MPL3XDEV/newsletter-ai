import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgIf} from '@angular/common';

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

  buttonState: 'idle' | 'loading' | 'success' = 'idle';
  private toastr = inject(ToastrService);

  onSubmit() {
    if (this.form.invalid) return;
    this.buttonState = 'loading';

    // Simula una chiamata API
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // Simula successo/errore
      if (isSuccess) {
        this.buttonState = 'success';
        this.toastr.success('You have been subscribed!', 'Success 🎉');
      } else {
        this.buttonState = 'idle';
        this.toastr.error('Something went wrong. Try again!', 'Error 😢');
      }
    }, 1500);
  }
}
