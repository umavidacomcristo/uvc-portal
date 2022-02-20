import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UVCSnackbarComponent } from './uvcsnackbar.component';

describe('UVCSnackbarComponent', () => {
  let component: UVCSnackbarComponent;
  let fixture: ComponentFixture<UVCSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UVCSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UVCSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
