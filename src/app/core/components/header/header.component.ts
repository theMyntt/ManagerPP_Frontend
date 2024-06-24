import { Component, Input } from '@angular/core'
import { ButtonComponent } from '@shared/components/button/button.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isLogged: boolean = false
}
