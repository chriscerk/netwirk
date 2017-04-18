import { IPost, IMediaPost } from './../shared/interfaces';
import { DataService } from './../core/services/data.service';
import { GraphComponent } from './../graph/graph.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-netwirk',
  templateUrl: './my-netwirk.component.html',
  styleUrls: ['./my-netwirk.component.css']
})
export class MyNetwirkComponent implements OnInit {

  display: string;
  posts: IPost[];
  filteredPosts: IPost[];
  myData: Array<any> = [];
  genresMap: Map<string, number>;
  genres: string[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.display = "tableView";
    this.genresMap = new Map<string, number>();
    this.dataService.getPosts()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });

    if(this.posts) {
        this.posts.forEach(element => {
        element.artist_genres.forEach(genre => {
          
          if(this.genresMap[genre]) {
            this.genresMap[genre] += element.comment_count + element.score;
          }
          else {
            this.genres.push(genre);
            this.genresMap[genre] = element.comment_count + element.score
          }
        })
      });

      this.genres.forEach(genre => {
        this.myData.push([genre, this.genresMap[genre]])
      })
    }   
  }
}
