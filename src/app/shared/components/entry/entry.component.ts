import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  signal
} from '@angular/core'

@Component({
  selector: 'entry',
  standalone: true,
  imports: [],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent {
  value: WritableSignal<string> = signal<string>('')

  @Input() placeholder: string = ''
  @Input() type: 'text' | 'email' | 'password' = 'text'

  @Output() finalValue = new EventEmitter<string>()

  onChange(e: any) {
    e = e.target.value

    this.value.set(e)
    this.finalValue.emit(e)
  }
}
