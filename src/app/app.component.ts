import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildcomponentComponent } from "./childcomponent/childcomponent.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Childcomponent2Component } from "./childcomponent2/childcomponent2.component";
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildcomponentComponent, ReactiveFormsModule, Childcomponent2Component,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task001child';
  userForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.userForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.getAddresFormGorup(),
     // child2: this.getChild2FormGorup()
    })
  }
  getAddresFormGorup(): FormGroup<any> {
    return this.formbuilder.group({
      state: [''],
      city: [''],
      child2: this.getChild2FormGorup()
    })
  }
  getChild2FormGorup(): FormGroup<any> {
    return this.formbuilder.group({
      pin: [''],
      number: ['']
    })
  }
  getAddressForChild():FormGroup<any>{
    return this.userForm.get('address') as FormGroup;
  }
  getChild2ForChild():FormGroup<any>{
    return this.userForm.get('address.child2') as FormGroup;
  }
  submit() {
    console.log(this.userForm.value);
  }
}
