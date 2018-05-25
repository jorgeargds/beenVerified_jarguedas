import { Component } from '@angular/core';
import { HttpService } from '../app/services/http.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'app';
  private genres = [];
  private songs = [];
  private columns = [
    "artist",
    "title",
    "duration",
    "name"
]
  private searchCriteria = { song: null, artist: null, genre: null }

  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.httpService.get('/getAllGenres')
      .subscribe((res: any) => {
        this.genres = res;
      });
  }

  searchSongs() {
    this.httpService.post('/searchSongs', this.searchCriteria)
      .subscribe((res: any) => {
        //console.log(this.columns);
        for(let column of this.columns){
          console.log(column)
        }
        this.songs = res;
      });
    console.log(this.searchCriteria.artist, this.searchCriteria.song, this.searchCriteria.genre)
  }

  cleanForm() {
    this.searchCriteria = { song: null, artist: null, genre: null };
  }
}
