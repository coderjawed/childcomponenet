import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcomponent2Component } from './childcomponent2.component';

describe('Childcomponent2Component', () => {
  let component: Childcomponent2Component;
  let fixture: ComponentFixture<Childcomponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childcomponent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Childcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
