import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  providers: [AlbumService]
})

export class MarketComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;

  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

 goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };

}
