import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailloginComponent } from './emaillogin.component';

describe('EmailloginComponent', () => {
  let component: EmailloginComponent;
  let fixture: ComponentFixture<EmailloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailloginComponent]
    });
    fixture = TestBed.createComponent(EmailloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
