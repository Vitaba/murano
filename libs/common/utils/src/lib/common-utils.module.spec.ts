import { async, TestBed } from '@angular/core/testing';
import { CommonUtilsModule } from './common-utils.module';

describe('CommonUtilsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUtilsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUtilsModule).toBeDefined();
  });
});
