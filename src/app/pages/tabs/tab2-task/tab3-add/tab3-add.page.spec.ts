import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab3AddPage } from './tab3-add.page';

describe('Tab3AddPage', () => {
  let component: Tab3AddPage;
  let fixture: ComponentFixture<Tab3AddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab3AddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
