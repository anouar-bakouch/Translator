import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ListeLanguagesComponent } from "./components/liste-languages/liste-languages.component";
import { PageNotFound } from "./components/page-not-found/page-not-found.component";
import { TranslateFieldComponent } from "./components/translate-field/translate-field.component";

const routes:Routes = [
    { path : 'translate' , component : TranslateFieldComponent },
    { path : 'liste_translate', component : ListeLanguagesComponent },
    { path : '**', component : PageNotFound }
    
]

@NgModule({

    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
    
})



export class AppRoutingModule{}

