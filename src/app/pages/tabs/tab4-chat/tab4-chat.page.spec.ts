import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab4ChatPage } from './tab4-chat.page';

describe('Tab4ChatPage', () => {
  let component: Tab4ChatPage;
  let fixture: ComponentFixture<Tab4ChatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab4ChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
