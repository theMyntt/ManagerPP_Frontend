import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = ''
  @Input() type: 'button' | 'submit' = 'button'
  @Input() variant: 'primary' | 'secondary' | 'alert' = 'secondary'
  @Input() onClick: () => void = () => {}
}
