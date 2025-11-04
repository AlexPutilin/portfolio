import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsmenuComponent } from './socialsmenu.component';

describe('SocialsmenuComponent', () => {
  let component: SocialsmenuComponent;
  let fixture: ComponentFixture<SocialsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
