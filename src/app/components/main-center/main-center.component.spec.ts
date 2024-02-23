import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCenterComponent } from './main-center.component';

describe('MainCenterComponent', () => {
  let component: MainCenterComponent;
  let fixture: ComponentFixture<MainCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
