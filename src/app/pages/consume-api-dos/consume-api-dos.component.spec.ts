import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeApiDosComponent } from './consume-api-dos.component';

describe('ConsumeApiDosComponent', () => {
  let component: ConsumeApiDosComponent;
  let fixture: ComponentFixture<ConsumeApiDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeApiDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeApiDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
