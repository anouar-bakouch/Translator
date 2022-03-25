import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/ApiResponse';
import { Data } from '../../models/Data';
import { HttpService } from '../../services/http.service';

@Component({
  selector: '[app-liste-languages]',
  templateUrl: './liste-languages.component.html',
  styleUrls: ['./liste-languages.component.css']
})

export class ListeLanguagesComponent implements OnInit {

  private languages!:any;


  constructor(private http:HttpService) { }

  ngOnInit(): void {

   this.http.getLanguages().subscribe(
     res=>{

       this.languages = res;
    

     }
   )
  }

  get _languages(){
    return this.languages;
  }

}
