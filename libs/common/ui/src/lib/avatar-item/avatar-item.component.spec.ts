
// tslint:disable:component-max-inline-declarations ter-max-len
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarItemComponent } from './avatar-item.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'vitaba-avatar-item-sample-implementation',
  template: `
  <ng-container [ngSwitch]="mode">
    <vitaba-avatar-item *ngSwitchDefault [data]="avatarData" [styles]="avatarStyles" [config]="avatarConfig">
    </vitaba-avatar-item>

    <vitaba-avatar-item *ngSwitchCase="'date'" [data]="avatarData" [styles]="avatarStyles" [config]="avatarConfig">
      <ng-template #dateExtraTemplate>
        <p>Date content-projection</p>
      </ng-template>
    </vitaba-avatar-item>

    <vitaba-avatar-item *ngSwitchCase="'name'" [data]="avatarData" [styles]="avatarStyles" [config]="avatarConfig">
      <ng-template #nameExtraTemplate>
        <p>Name content-projection</p>
      </ng-template>
    </vitaba-avatar-item>

    <vitaba-avatar-item *ngSwitchCase="'image'" [data]="avatarData" [styles]="avatarStyles" [config]="avatarConfig">
      <ng-template #imageExtraTemplate>
        <p>Image content-projection</p>
      </ng-template>
    </vitaba-avatar-item>
  </ng-container>
  `,
})
class TestHostComponent {
  public avatarData = {
    date: '2019-11-26T15:03:29.435Z',
    image: {
      alt: 'John Doe Avatar',
      value: 'https://avatars3.githubusercontent.com/u/17608169?s=460&v=4',
    },
    name: 'John Doe',
  };
  public avatarConfig = {
    dateFormat: 'mediumDate',
  };
  public avatarStyles = {
    container: 'flex items-center',
    dataContainer: 'text-sm',
    date: 'text-gray-600',
    image: 'w-10 h-10 rounded-full mr-4',
    name: 'text-gray-900 leading-none',
  };
  public mode = 'default';
}

describe('AvatarItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, AvatarItemComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
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

  it('should be dateExtraTemplate', () => {
    component.mode = 'date';
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should throw errors when data is not in right format', () => {
    component.mode = 'default';
    component.avatarData = {
      date: 1,
      image: {
        alt: 1,
        value: 1,
      },
      name: 1,
    } as any;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
