import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtaComponent } from './prota.component';

describe('ProtaComponent', () => {
  let component: ProtaComponent;
  let fixture: ComponentFixture<ProtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
