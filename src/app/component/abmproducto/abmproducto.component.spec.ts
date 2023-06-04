import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMProductoComponent } from './abmproducto.component';

describe('ABMProductoComponent', () => {
  let component: ABMProductoComponent;
  let fixture: ComponentFixture<ABMProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABMProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
