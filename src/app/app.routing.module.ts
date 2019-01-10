import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlogListPageComponent} from './components/blog-list-page/blog-list-page.component';
import {BlogDetailsPageComponent} from './components/blog-details-page/blog-details-page.component';
import {CreatePostPageComponent} from './components/create-post-page/create-post-page.component';


const appRoutes: Routes = [
  {
    path: '',
    component: BlogListPageComponent
  },
  {
    path: 'details/:id',
    component: BlogDetailsPageComponent
  },
  {
    path: 'create',
    component: CreatePostPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
