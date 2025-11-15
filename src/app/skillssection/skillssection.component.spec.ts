import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillssectionComponent } from './skillssection.component';

describe('SkillssectionComponent', () => {
  let component: SkillssectionComponent;
  let fixture: ComponentFixture<SkillssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillssectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
