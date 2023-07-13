import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MatIconModule } from '@angular/material/icon'
import { LayoutModule } from './components/ui/layout/layout.module'
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component'



@NgModule({
  declarations: [AppComponent, GlobalErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
