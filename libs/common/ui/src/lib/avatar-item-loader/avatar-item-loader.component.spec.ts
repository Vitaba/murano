import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxContentLoadingModule } from 'ngx-content-loading';
import { AvatarItemLoaderComponent } from './avatar-item-loader.component';

describe('AvatarItemLoaderComponent', () => {
  let component: AvatarItemLoaderComponent;
  let fixture: ComponentFixture<AvatarItemLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarItemLoaderComponent],
      imports: [NgxContentLoadingModule],
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
});
