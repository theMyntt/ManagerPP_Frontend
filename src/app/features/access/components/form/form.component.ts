import { Component, EventEmitter, Output, signal } from '@angular/core'
import { IFormResponse } from '@features/access/models/form.interface'
import { ButtonComponent } from '@shared/components/button/button.component'
import { EntryComponent } from '@shared/components/entry/entry.component'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [EntryComponent, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  accessCode = signal<string>('')
  password = signal<string>('')

  @Output() finalValue = new EventEmitter<IFormResponse>()

  constructor() {
    document.addEventListener('keypress', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.submit()
      }
    })
  }

  setAccessCode(value: string) {
    this.accessCode.set(value)
  }

  setPassword(value: string) {
    this.password.set(value)
  }

  submit() {
    if (!this.accessCode() || !this.password()) return

    this.finalValue.emit({
      access_code: this.accessCode(),
      password: this.password()
    })
  }
}
