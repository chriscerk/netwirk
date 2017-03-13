import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { INode, IEdge } from '../shared/interfaces';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  nodesBaseUrl: string = 'nodes.json';
  edgesBaseUrl: string = 'edges.json';
  nodes: INode[];
  edges: IEdge[];
    
  getEdges(): Observable<IEdge[]> {
      return this.http.get(this.edgesBaseUrl)
                  .map((res: Response) => res.json())
                  .catch(this.handleError); 
  }

  getNodes(): Observable<INode[]> {
      return this.http.get(this.nodesBaseUrl)
                  .map((res: Response) => res.json())
                  .catch(this.handleError); 
  }
  
  handleError(error: any) {
      console.error('server error:', error); 
      if (error instanceof Response) {
        let errMessage = '';
        try {
          errMessage = error.json().error;
        } catch(err) {
          errMessage = error.statusText;
        }
        return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Node.js server error');
  }

}