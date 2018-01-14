import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit{

  images: any[];
  filteredImages: any[];
  type: string = "all";

  constructor(private _imageService: ImageService) { }

  filterImages(arg: string): any {
    this.filteredImages = this.images;
    if (arg === "all"){
      return this.filteredImages;
    } else {
      return this.filteredImages = this.filteredImages.filter((image) => image.type === arg);  
    }
    
  }

  ngOnInit() {
    this.images = this._imageService.getImages();
    this.filteredImages = this.images;
  }

}
