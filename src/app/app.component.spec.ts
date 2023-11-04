import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: ComponentFixture<AppComponent>;
  let debug: DebugElement;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, VehiculoModule],
      declarations: [AppComponent],
    })
  );

  beforeEach(() => {
    component = TestBed.createComponent(AppComponent);
    debug = component.debugElement;
  });

  it('should create the app', () => {
    const app = component.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tu segundazo'`, () => {
    const app = component.componentInstance;
    expect(app.title).toEqual('tu segundazo');
  });

  it('should render title', () => {
    const header = debug.query(By.css('header'));
    expect(header).not.toBeNull();

    const img = header.query(By.css('img'));
    expect(img.attributes['src']).toContain('../assets/TuSegundazo.com.png');
    expect(img.attributes['alt']).toContain('tusegundazo.com');
  });

  it('should render banner', () => {
    const main = debug.query(By.css('main'));
    expect(main).not.toBeNull();

    const img = main.query(By.css('img'));
    expect(img.attributes['src']).toContain('../assets/banner.png');
    expect(img.attributes['alt']).toContain(
      'Comercialización de automotores nuevos y usados'
    );
  });

  it('should render footer', () => {
    const footer = debug.query(By.css('footer'));
    expect(footer).not.toBeNull();

    const span = footer.query(By.css('span'));
    expect(span.nativeElement.textContent).toContain(
      'Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo'
    );
  });
});
