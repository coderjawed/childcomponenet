import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcomponent',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.scss'
})
export class ChildcomponentComponent  implements OnInit{

  constructor(public controlContainer:ControlContainer){

  }
  ngOnInit(): void {
    
  }
  getControlGroup():FormGroup<any>{
    return this.controlContainer.control as FormGroup
  }

}
