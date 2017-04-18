import { IPost, IGenreData } from './../shared/interfaces';
import { DataService } from './../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from './../shared/barchart/barchart.component';

@Component({
  selector: 'app-indieheads',
  templateUrl: './indieheads.component.html',
  styleUrls: ['./indieheads.component.css']
})
export class IndieheadsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  posts: IPost[];
  genreData: IGenreData[];
  
  ngOnInit() {
    this.dataService.getPosts()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      })

    this.dataService.getTopGenres()
      .subscribe((genreData: IGenreData[]) => {
        this.genreData = genreData;
      });
  }
}
