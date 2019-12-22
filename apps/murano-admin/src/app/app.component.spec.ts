// tslint:disable: no-unsafe-any
import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonUiModule } from '@vitaba/common-ui';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        CommonUiModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
