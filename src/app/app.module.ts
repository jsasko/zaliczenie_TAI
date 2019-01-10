import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BlogService} from './services/blog.service';
import {BlogListPageComponent} from './components/blog-list-page/blog-list-page.component';
import {AppRoutingModule} from './app.routing.module';
import {BlogDetailsPageComponent} from './components/blog-details-page/blog-details-page.component';
import {CreatePostPageComponent} from './components/create-post-page/create-post-page.component';
import {HttpClientModule} from '@angular/common/http';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {FormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FilterPipe} from "./pipes/filter.pipe";
import {TextFormatDirective} from "./directives/text-format.directive";

@NgModule({
    declarations: [
        AppComponent,
        BlogListPageComponent,
        BlogDetailsPageComponent,
        CreatePostPageComponent,
        BlogItemComponent,
        NavigationComponent,
        FilterPipe,
        TextFormatDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [BlogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
