// tslint:disable: no-unused-variable no-unsafe-any
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlErrorsComponent } from './control-errors.component';

describe('ControlErrorsComponent', () => {
  let component: ControlErrorsComponent;
  let fixture: ComponentFixture<ControlErrorsComponent>;
  let debugElement: DebugElement;
  let errors!: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlErrorsComponent],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlErrorsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.fControl = new FormControl(
      // tslint:disable-next-line: no-unbound-method
      '', Validators.compose([Validators.required, Validators.minLength(10)]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('show errors', () => {
    it('Should throw required error', () => {
      errors = debugElement.queryAll(By.css('li'));
      expect(errors.length).toBe(1);
      expect(errors[0].nativeElement.textContent)
      .toEqual('This field is required');
    });

    it('Should throw minLength error', () => {
      component.fControl.setValue('foo');
      component.fControl.updateValueAndValidity();
      fixture.detectChanges();
      errors = debugElement.queryAll(By.css('li'));
      expect(errors[0].nativeElement.textContent)
      .toEqual('Expect 10 but got 3');
    });
  });

  describe('not showing errors', () => {
    it('should not throw minLenth error', () => {
      component.fControl.setValue('foo foo foo');
      component.fControl.updateValueAndValidity();
      fixture.detectChanges();
      errors = debugElement.queryAll(By.css('li'));
      expect(errors.length).toEqual(0);
    });
  });
});
