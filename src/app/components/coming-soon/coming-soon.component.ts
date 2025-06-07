import {Component} from '@angular/core';
import {TopbarComponent} from '../topbar/topbar.component';
import {NgxGradientTextComponent} from '@omnedia/ngx-gradient-text';
import {RippleBackgroundComponent} from '../ripple-background/ripple-background.component';
import {NgxFadeComponent} from '@omnedia/ngx-fade';

@Component({
  selector: 'app-coming-soon',
  imports: [
    TopbarComponent,
    NgxGradientTextComponent,
    RippleBackgroundComponent,
    NgxFadeComponent,
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {

  date = new Date();
}
