import { async, TestBed } from '@angular/core/testing';
import { ScssUiModule } from './scss-ui.module';

describe('ScssUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScssUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScssUiModule).toBeDefined();
  });
});
