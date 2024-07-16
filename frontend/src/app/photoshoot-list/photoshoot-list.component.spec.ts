import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoshootListComponent } from './photoshoot-list.component';

describe('PhotoshootListComponent', () => {
  let component: PhotoshootListComponent;
  let fixture: ComponentFixture<PhotoshootListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoshootListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoshootListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
