import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../views/public/shared/header/header.component";
import {FooterComponent} from "../../views/public/shared/footer/footer.component";

@Component({
  selector: 'public',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './public.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicComponent {

}
