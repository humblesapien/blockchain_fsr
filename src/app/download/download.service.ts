import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

const url = 'http://localhost:8000/upload';

@Injectable()
export class DownloadService {
  constructor(private http: HttpClient) {}
resObj;
public download(fHash:string):Observable<any>{
	console.log(fHash);
	var url = "https://swarm-gateways.net/bzz-raw:/"+fHash;
	const req = new HttpRequest('GET', url, {
        reportProgress: true,
        responseType: 'text' as 'json'
    });
	this.http.request(req).subscribe(res=>{
		//console.log(res);
		if(res.type === HttpEventType.Response){
			console.log(res.body+" "+typeof res.body);
			this.resObj = res.body;
			//return res.body;
		}
	});
	console.log(this.resObj instanceof Observable);
	return this.resObj;
}
}