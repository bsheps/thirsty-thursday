import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { MaterialModule } from './modules/material.module';
import { ApiService } from './services/api.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule, MaterialModule, AppModule],
      providers: [ApiService]
    }).compileComponents();
  });

  it('api service should be created', () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 3 search options`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.searchOptions).toEqual(['Name', 'Ingredient', 'Category']);
  });

  it('should default to Name search option', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.searchBy).toEqual('Name');
  })

  it('should render title and it should be in h1 tag', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Thirsty Thursday Cocktail Search');
  });

  it('should have input box for searching', () => {
    expect(de.query(By.css('input'))).toBeTruthy();
  })

  it('should have 2 buttons', () => {
    expect(de.queryAll(By.css('button')).length).toEqual(2);
  });

  it('should have a button for search execution and api selection', () => {
    expect(de.queryAll(By.css('button'))[0].nativeElement.innerText).toEqual('Cocktail Search');
  });
  it('should have a button for pick for me', () => {
    expect(de.queryAll(By.css('button'))[1].nativeElement.innerText).toContain('Pick for me');
  });
  it('should have 1 image', () => {
    expect(de.queryAll(By.css('img')).length).toEqual(1);
  })
});
