import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListing } from './edit-listing';

describe('EditListing', () => {
  let component: EditListing;
  let fixture: ComponentFixture<EditListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
