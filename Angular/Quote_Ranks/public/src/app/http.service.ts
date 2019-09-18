import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
      this.getAuthors();
  }
  getAuthors(){
    return this._http.get('/Authors');
  }
  getIAuthor(id: string){
    console.log(id)
    return this._http.get(`/Authors/${id}`);
  }
  editAuthor(Author){ /////actually add quote
    return this._http.put(`/Authors/${Author._id}`, Author);
  }
  actuallyEditAuthor(Author){ /////actually add quote
    return this._http.put(`/Auth/${Author._id}`, Author);
  }
  upvoteQuote(qid){
    return this._http.put(`/Authors/up/${qid}`, qid);
  }
  downvoteQuote(qid){
    return this._http.put(`/Authors/down/${qid}`, qid);
  }
  addAuthor(newAuthor){
    console.log(newAuthor)
    return this._http.post('/Authors', newAuthor)
  }
  removeQ(id: string, cid: string){
    console.log(`/remove/${id}/${cid}`)
    return this._http.delete(`/remove/${id}/${cid}`)
  }
}