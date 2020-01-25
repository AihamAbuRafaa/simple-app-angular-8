import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service/communication.service';
import { Album } from 'src/app/common/interfaces';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  isLoading: boolean = true;
  /**
   *
   */
  constructor(private commSvc: CommunicationService) {

  }

  ngOnInit() {
    try {
      this.commSvc.getAlbums().subscribe(data => {
        this.albums = <Album[]>data;
        this.isLoading = false;
      })
    } catch (err) {

    } finally {

    }

  }


}
