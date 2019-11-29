import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentLoaderModule } from '@vitaba/content-loader';

import { AvatarItemLoaderComponent } from './avatar-item-loader.component';

describe('AvatarItemLoaderComponent', () => {
  let component: AvatarItemLoaderComponent;
  let fixture: ComponentFixture<AvatarItemLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarItemLoaderComponent],
      imports: [ContentLoaderModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarItemLoaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create loader', () => {
    component.width = 100;
    component.height = 100;
    component.colors = {
      primary: '#f4f4f4',
      secondary: 'cecece',
    };
    component.speed = 2;

    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
