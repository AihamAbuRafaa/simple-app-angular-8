import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotoComponent } from './components/photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotoComponent,
    AlbumDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
