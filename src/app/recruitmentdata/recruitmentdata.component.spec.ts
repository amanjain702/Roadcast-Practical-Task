import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentdataComponent } from './recruitmentdata.component';

describe('RecruitmentdataComponent', () => {
  let component: RecruitmentdataComponent;
  let fixture: ComponentFixture<RecruitmentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
