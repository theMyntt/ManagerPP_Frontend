import { Component } from '@angular/core'
import { HeaderComponent } from '@core/components/header/header.component'
import { FormComponent } from './components/form/form.component'
import { IFormResponse } from './models/form.interface'

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [HeaderComponent, FormComponent],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss'
})
export class AccessComponent {
  async submit(response: IFormResponse) {
    console.log(response)
  }
}
