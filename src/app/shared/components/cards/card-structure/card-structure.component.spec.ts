import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStructureComponent } from './card-structure.component';

describe('CardStructureComponent', () => {
  let component: CardStructureComponent;
  let fixture: ComponentFixture<CardStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
