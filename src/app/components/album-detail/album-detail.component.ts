import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service/communication.service';
import { Photo } from 'src/app/common/interfaces';
import { Route, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  constructor(private commSvc: CommunicationService, private route: ActivatedRoute, private _location: Location) { }
  photos: Photo[] = [];
  isLoading: boolean = true;
  ngOnInit() {
    try {
      let id = this.route.snapshot.paramMap.get('id');
      this.commSvc.getPhotos()
        .subscribe(photos => {
          this.photos = (<Photo[]>photos).filter(item => item.albumId == id);
          this.isLoading = false;
        });

    } catch (err) {

    } finally {

    }

  }

  goBack() {
    this._location.back();
  }

}
