
// tslint:disable: no-any component-max-inline-declarations ter-max-len
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-categories-sample-implementation',
  template: `
  <ng-container [ngSwitch]="mode">
    <vitaba-categories *ngSwitchDefault [data]="data" [styles]="styles">
    </vitaba-categories>

    <vitaba-categories *ngSwitchCase="'name'" [data]="data" [styles]="styles">
      <ng-template #nameExtraTemplate>
        <p>Name content-projection</p>
      </ng-template>
    </vitaba-categories>

    <vitaba-categories *ngSwitchCase="'image'" [data]="data" [styles]="styles">
      <ng-template #imageExtraTemplate>
        <p>Image content-projection</p>
      </ng-template>
    </vitaba-categories>
  </ng-container>
  `,
})
class TestHostComponent {
  public data = {
    image: {
      alt: 'News Feed Icon',
      value: 'https://www.materialui.co/materialIcons/action/lock_black_144x144.png',
    },
    name: 'News Feed',
  };
  public styles = {
    container: 'flex',
    image: 'w-6 h-6',
    name: 'text-sm text-gray-600 flex items-center',
  };
  public mode = 'default';
}

describe('CategoriesComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, CategoriesComponent],
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

  it('should be imageExtraTemplate', () => {
    component.mode = 'image';
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should be nameExtraTemplate', () => {
    component.mode = 'name';
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should throw errors when data is not in right format', () => {
    component.mode = 'default';
    component.data = {
      image: 1,
      name: 1,
    } as any;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
