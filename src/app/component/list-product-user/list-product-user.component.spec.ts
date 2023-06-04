import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductUserComponent } from './list-product-user.component';

describe('ListProductUserComponent', () => {
  let component: ListProductUserComponent;
  let fixture: ComponentFixture<ListProductUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
