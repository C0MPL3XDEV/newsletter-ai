import {Component} from '@angular/core';
import {TopbarComponent} from '../topbar/topbar.component';
import {NgxGradientTextComponent} from '@omnedia/ngx-gradient-text';
import {RippleBackgroundComponent} from '../ripple-background/ripple-background.component';

@Component({
  selector: 'app-coming-soon',
  imports: [
    TopbarComponent,
    NgxGradientTextComponent,
    RippleBackgroundComponent,
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {

  date = new Date();
}
