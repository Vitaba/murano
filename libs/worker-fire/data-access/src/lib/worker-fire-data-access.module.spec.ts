import { async, TestBed } from '@angular/core/testing';
import { WorkerFireDataAccessModule } from './worker-fire-data-access.module';

describe('WorkerFireDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WorkerFireDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WorkerFireDataAccessModule).toBeDefined();
  });
});
