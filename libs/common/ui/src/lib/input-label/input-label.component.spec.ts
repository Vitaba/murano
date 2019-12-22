
// tslint:disable: no-any component-max-inline-declarations ter-max-len
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLabelComponent } from './input-label.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-input-label-sample-implementation',
  template: `
    <vitaba-input-label [data]="data" [styles]="styles">
    </vitaba-input-label>
  `,
})
class TestHostComponent {
  public styles = {
    container: `md:w-1/3`,
    label: `block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4`,
  };
  public data = {
    label: 'Useful resources and assets for users.',
  };
}

describe('InputLabelComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, InputLabelComponent],
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
      label: 1,
    } as any;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
