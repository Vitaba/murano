
// tslint:disable: no-any component-max-inline-declarations ter-max-len
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderTitleComponent } from './header-title.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-header-title-sample-implementation',
  template: `
  <ng-container [ngSwitch]="mode">
    <vitaba-header-title *ngSwitchDefault [data]="data" [styles]="styles">
    </vitaba-header-title>

    <vitaba-header-title *ngSwitchCase="'title'" [data]="data" [styles]="styles">
      <ng-template #titleExtraTemplate>
        <p>Title content-projection</p>
      </ng-template>
    </vitaba-header-title>

    <vitaba-header-title *ngSwitchCase="'description'" [data]="data" [styles]="styles">
      <ng-template #descriptionExtraTemplate>
        <p>Description content-projection</p>
      </ng-template>
    </vitaba-header-title>

    <vitaba-header-title *ngSwitchCase="'line'" [data]="data" [styles]="styles">
      <ng-template #lineExtraTemplate>
        <p>Line content-projection</p>
      </ng-template>
    </vitaba-header-title>
  </ng-container>
  `,
})
class TestHostComponent {
  public styles = {
    container: `font-sans font-light leading-normal markdown mb-6 px-6
    max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4`,
    description: 'mt-0 mb-4 text-gray-600',
    line: 'my-8 border-b-2 border-gray-200',
    title: 'text-3xl text-gray-900',
  };
  public data = {
    description: 'Useful resources and assets for users.',
    title: 'Lorem Ipsum',
  };
  public mode = 'default';
}

describe('HeaderTitleComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, HeaderTitleComponent],
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

  it('should be titleExtraTemplate', () => {
    component.mode = 'title';
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should be descriptionExtraTemplate', () => {
    component.mode = 'description';
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should be lineExtraTemplate', () => {
    component.mode = 'line';
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should throw errors when data is not in right format', () => {
    component.mode = 'default';
    component.data = {
      description: 1,
      title: 1,
    } as any;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
