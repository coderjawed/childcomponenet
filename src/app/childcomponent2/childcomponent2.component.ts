import { Component } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcomponent2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './childcomponent2.component.html',
  styleUrl: './childcomponent2.component.scss'
})
export class Childcomponent2Component {
constructor(public controlContainer:ControlContainer){

  }
  ngOnInit(): void {
    
  }
  getControlGroup():FormGroup<any>{
    return this.controlContainer.control as FormGroup
  }
}
