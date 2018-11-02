import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthorComponent} from "./components/author/author.component";
import {BookComponent} from "./components/book/book.component";


const routes: Routes = [
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'authors', component: AuthorComponent},
    {path: 'books', component: BookComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
