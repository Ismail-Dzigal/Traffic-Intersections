import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ImageService } from './image.service';
import { AllImagesComponent } from './all-images/all-images.component';
import { ImagedetailComponent } from './imagedetail/imagedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllImagesComponent,
    ImagedetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'intersections', component: AllImagesComponent }, 
      {path: 'image/:id', component: ImagedetailComponent},
      {path:'', redirectTo: 'intersections', pathMatch: 'full'}
    ])
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
