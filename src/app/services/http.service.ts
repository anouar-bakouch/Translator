import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "@angular/router";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/ApiResponse";



@Injectable()
export class HttpService {


constructor(private http:HttpClient){}

public getLanguages():Observable<any>{

   return this.http.get<any>('https://google-translate1.p.rapidapi.com/language/translate/v2/languages');

}

public add(data:any){

return this.http.post<any>('https://google-translate1.p.rapidapi.com/language/translate/v2',data);

}




}