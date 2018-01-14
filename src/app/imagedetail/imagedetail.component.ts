import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../image.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-imagedetail',
  templateUrl: './imagedetail.component.html',
  styleUrls: ['./imagedetail.component.css']
})
export class ImagedetailComponent implements OnInit, OnDestroy {

 image: any;
 /*id: string;*/
 private sub: Subscription;

  constructor( private _imageService: ImageService,
               private _route: ActivatedRoute, 
               private _router: Router) { }

     /* ngOnInit(){
        
        this._route.params.subscribe(p => {
          this.id = p["id"];
          this.image = this._imageService.getImage(+this.id);
        });
      }*/

      ngOnInit(){
        this.sub = this._route.params.subscribe(p => {
          let id = +p["id"];
          this.getImage(id);
        });
      }

      ngOnDestroy() {
        this.sub.unsubscribe();
      }

      getImage(id: number) {
        this.image = this._imageService.getImage(id);
      }

      onBack(): void {
        this._router.navigate(['/intersections']);
      }


}
