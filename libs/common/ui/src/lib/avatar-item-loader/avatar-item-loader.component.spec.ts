import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarItemLoaderComponent } from './avatar-item-loader.component';

describe('AvatarItemLoaderComponent', () => {
  let component: AvatarItemLoaderComponent;
  let fixture: ComponentFixture<AvatarItemLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarItemLoaderComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarItemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
