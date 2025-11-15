import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillboxComponent } from './skillbox.component';

describe('SkillboxComponent', () => {
  let component: SkillboxComponent;
  let fixture: ComponentFixture<SkillboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
