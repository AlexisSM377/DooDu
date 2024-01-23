import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2TaskPage } from './tab2-task.page';

describe('Tab2TaskPage', () => {
  let component: Tab2TaskPage;
  let fixture: ComponentFixture<Tab2TaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab2TaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
