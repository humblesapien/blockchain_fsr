import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

// const headers1=new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('Accept','application/json')
// .set('');


@Injectable()
export class AppService {

    constructor(private http: HttpClient, private _router: Router) {
    }
    post_method(url: string, data: string) {
        console.log('post called ' + url + data);
        return this.http.post(url, JSON.parse(data)).pipe(map((res: Response) => JSON.parse(JSON.stringify(res))));

    }
    put_method(url: string, data: string) {
        console.log('post called ' + url + data);
        return this.http.put(url, JSON.parse(data)).pipe(map((res: Response) => JSON.parse(JSON.stringify(res))))

    }
    post_file_method(url: string, data: any) {

        console.log('post called ' + url + data);
        return this.http.post(url, data).pipe(map((res: Response) => JSON.parse(JSON.stringify(res))))

    }
    patch_file_method(url: string, data: any) {

        console.log('patch called ' + url + data);
        return this.http.patch(url, data).pipe(map((res: Response) => JSON.parse(JSON.stringify(res))))

    }


    patch_method(url: string, data: string) {
        console.log('patch called ' + url + data);
        return this.http.patch(url, JSON.parse(data)).pipe(map((res: Response) => JSON.parse(JSON.stringify(res))))
    }

    get_method(url: string) {
        let auth = 'Bearer ' + localStorage.getItem('token');
        //let headers = new HttpHeaders();
        console.log('get called ' + url);

        return this.http.get(url).pipe(map((res: Response) => JSON.parse(JSON.stringify(res))))
    }

    delete_method(url: string) {
        let auth = 'Bearer ' + localStorage.getItem('token');
        //let headers = new HttpHeaders();
        console.log('delete called ' + url);
        return this.http.delete(url).pipe(map((res: Response) => JSON.parse(JSON.stringify(res))))
    }
    delete_method_sender_id(url: string, data) {
        let auth = 'Bearer ' + localStorage.getItem('token');
        //     //let headers = new HttpHeaders();
        //     const header = new Headers();
        //   header.append('Content-Type', 'application/json');
        //     header.append('Authorization', `Bearer ${localStorage.getItem('token')}` );
        //    const options = new RequestOptions({headers: header,body:data});
        // let header = new HttpHeaders();

        //    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        //    headers.append('Accept', 'application/json');
        //    headers.append( 'Authorization', `Bearer ${localStorage.getItem('token')}`);


        //    var options =  {
        //        headers: {},
        //        body:JSON.stringify(data)
        //    };
        console.log('delete sender id called ' + url + data);

        return this.http.delete(url).pipe(map((res: any) => JSON.parse(JSON.stringify(res))));
        // return this.http.delete(url, options).map((res: any) => JSON.parse(JSON.stringify(res)))

    }
}