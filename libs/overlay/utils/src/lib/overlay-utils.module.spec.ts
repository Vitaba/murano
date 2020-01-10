import { async, TestBed } from '@angular/core/testing';
import { OverlayUtilsModule } from './overlay-utils.module';

describe('OverlayDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OverlayUtilsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OverlayUtilsModule).toBeDefined();
  });
});
