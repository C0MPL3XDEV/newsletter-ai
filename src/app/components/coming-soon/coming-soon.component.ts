import {Component, OnInit} from '@angular/core';
import {TopbarComponent} from '../topbar/topbar.component';
import {NgxGradientTextComponent} from '@omnedia/ngx-gradient-text';
import {RippleBackgroundComponent} from '../ripple-background/ripple-background.component';
import {NgxFadeComponent} from '@omnedia/ngx-fade';
import {ComingSoonFormComponent} from '../coming-soon-form/coming-soon-form.component';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-coming-soon',
  imports: [
    TopbarComponent,
    NgxGradientTextComponent,
    RippleBackgroundComponent,
    NgxFadeComponent,
    ComingSoonFormComponent,
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent implements OnInit {

  date = new Date();

  constructor(private apiService: ApiService) {
  }

  testCall: any;

  ngOnInit() {
    this.apiService.testCall().subscribe({
      next: (response) => {
        this.testCall = response;
      }
    })
  }
}
