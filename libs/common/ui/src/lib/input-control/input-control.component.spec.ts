
// tslint:disable: no-any component-max-inline-declarations ter-max-len
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { InputControlComponent } from './input-control.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-input-control-sample-implementation',
  template: `
    <vitaba-input-control [config]="config" [styles]="styles">
    </vitaba-input-control>
  `,
})
class TestHostComponent {
  public styles = {
    container: `md:w-2/3`,
    input: `bg-gray-200 appearance-none border-2
    border-gray-200 rounded w-auto py-2 px-4
    text-gray-700 leading-tight focus:outline-none
    focus:bg-white focus:border-purple-500`,
  };
  public data = {
    description: 'Useful resources and assets for users.',
    title: 'Lorem Ipsum',
  };
  public config = {
    fControl: new FormControl('sample'),
    placeholder: 'placeholder',
    type: 'text',
  };
}

describe('InputControlComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, InputControlComponent],
      imports: [ReactiveFormsModule, NgxMaskModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be default', () => {
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should throw errors when config is not in right format', () => {
    component.config = {
      fControl: new FormControl('name'),
      placeholder: 1,
      type: 1,
    } as any;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
