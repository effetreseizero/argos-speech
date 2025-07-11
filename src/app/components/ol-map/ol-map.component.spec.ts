import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlMapComponent } from './ol-map.component';

describe('OlMapComponent', () => {
  let component: OlMapComponent;
  let fixture: ComponentFixture<OlMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
