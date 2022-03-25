import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormBuilder } from '@angular/forms';
import * as qs from 'qs';


@Component({
  selector: '[app-translate-field]',
  templateUrl: './translate-field.component.html',
  styleUrls: ['./translate-field.component.css']
})
export class TranslateFieldComponent implements OnInit {

  translateForm = this.fservice.group({

    word : [''],
    target : ['']

  })

  public res_translated!:any;


  private languages!:any;

  constructor(private http:HttpService,private fservice:FormBuilder) { }

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
 

  public translate(){

    
  let data =  qs.stringify(
                              {
                                q : this.translateForm.get('word')?.value,
                                target : this.translateForm.get('target')?.value
                              }
                            )

       this.http.add(data).subscribe(
         res=>{
          console.log(res.data.translations[0].translatedText);
          this.res_translated = res.data.translations[0].translatedText;
         }
       )

  }

}
