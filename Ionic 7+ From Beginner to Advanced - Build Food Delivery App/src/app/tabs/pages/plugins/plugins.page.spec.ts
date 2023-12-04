import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PluginsPage } from './plugins.page';

describe('PluginsPage', () => {
  let component: PluginsPage;
  let fixture: ComponentFixture<PluginsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PluginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
