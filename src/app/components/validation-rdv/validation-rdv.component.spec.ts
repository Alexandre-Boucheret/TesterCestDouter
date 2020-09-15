import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRdvComponent } from './validation-rdv.component';

describe('ValidationRdvComponent', () => {
  let component: ValidationRdvComponent;
  let fixture: ComponentFixture<ValidationRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationRdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
