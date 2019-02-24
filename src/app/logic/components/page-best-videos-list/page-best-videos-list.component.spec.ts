import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBestVideosListComponent } from './page-best-videos-list.component';

describe('PageBestVideosListComponent', () => {
  let component: PageBestVideosListComponent;
  let fixture: ComponentFixture<PageBestVideosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBestVideosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBestVideosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
