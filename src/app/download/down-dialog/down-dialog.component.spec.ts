import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownDialogComponent } from './down-dialog.component';

describe('DownDialogComponent', () => {
  let component: DownDialogComponent;
  let fixture: ComponentFixture<DownDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
