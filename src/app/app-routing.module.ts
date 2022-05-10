import { StickerPageComponent } from './sticker/sticker-page/sticker-page.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'gif_search', pathMatch: 'full' },
  { path: 'gif_search', component: GifsPageComponent },
  { path: 'sticker_search', component: StickerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
