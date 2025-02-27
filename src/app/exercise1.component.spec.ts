import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Exercise1Component } from './exercise1.component';
import { By } from '@angular/platform-browser';

describe('Exercise1Component', () => {
  let component: Exercise1Component;
  let fixture: ComponentFixture<Exercise1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show secret phrase', () => {
    component.secretPhrase = 'Test String Interpolation';

    fixture.detectChanges();

    const expected = component.secretPhrase;
    const result = fixture.debugElement.query(By.css('#answer'));

    const valid = expect(result.nativeElement.textContent.trim()).toEqual(expected);
  });
});
