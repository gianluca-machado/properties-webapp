import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetQuestionComponent } from './sweet-question.component';

describe('SweetQuestionComponent', () => {
  let component: SweetQuestionComponent;
  let fixture: ComponentFixture<SweetQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SweetQuestionComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
