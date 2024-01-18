import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditFormComponent } from './reddit-form.component';

describe('RedditFormComponent', () => {
  let component: RedditFormComponent;
  let fixture: ComponentFixture<RedditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedditFormComponent]
    });
    fixture = TestBed.createComponent(RedditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
