
// tslint:disable: no-any component-max-inline-declarations ter-max-len
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { InputControlComponent } from '../input-control/input-control.component';
import { InputLabelComponent } from '../input-label/input-label.component';
import { ResponsiveHeaderComponent } from './responsive-header.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-responsive-header-sample-implementation',
  template: `
    <vitaba-responsive-header [data]="data" [styles]="styles">
    </vitaba-responsive-header>
  `,
})
class TestHostComponent {
  public data = {
    formControlPlaceholder: `Search the items "(Press / to focus)"`,
    formControlType: 'text',
    title: 'Murano Admin',
  };

  public styles = {
    container: 'flex bg-white-400 border-b border-gray-300',
    formContainer: 'flex w-5/6 p-2',
    formControlContainer: 'flex',
    // tslint:disable-next-line:ter-max-len
    formControlInput: 'transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input outline-none',
    formSectionOne: 'w-11/12',
    formSectionTwo: 'w-1/12 flex items-center justify-center',
    // tslint:disable-next-line:ter-max-len
    menuButton: `flex items-center px-3 py-3 border rounded text-gray-500 outline-none focus:outline-none`,
    title: 'font-sans text-xl tracking-tight text-black-400 select-none',
    titleContainer: 'flex items-center justify-center w-1/6 p-2',
  };
}

describe('ResponsiveHeaderComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TestHostComponent, ResponsiveHeaderComponent, InputLabelComponent, InputControlComponent],
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

  it('should throw errors when data is not in right format', () => {
    component.data = {
      title: 1,
    } as any;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
