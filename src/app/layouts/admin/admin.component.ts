import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'admin',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {

}
