import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuizPage } from './start-quiz.page';

describe('StartQuizPage', () => {
  let component: StartQuizPage;
  let fixture: ComponentFixture<StartQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
