import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab5InfoPage } from './tab5-info.page';

describe('Tab5InfoPage', () => {
  let component: Tab5InfoPage;
  let fixture: ComponentFixture<Tab5InfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab5InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
