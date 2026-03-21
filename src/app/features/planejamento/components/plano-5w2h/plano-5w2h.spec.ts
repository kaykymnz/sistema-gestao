import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Plano5w2hComponent } from './plano-5w2h';

describe('Plano5w2hComponent', () => {
  let component: Plano5w2hComponent;
  let fixture: ComponentFixture<Plano5w2hComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plano5w2hComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Plano5w2hComponent);
    component = fixture.componentInstance;
    component.planos = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
