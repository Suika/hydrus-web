import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import {NgxLocalStorageModule} from 'ngx-localstorage';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

import { BrowseComponent } from './browse/browse.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TagInputComponent } from './tag-input/tag-input.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';



import { ResponsiveColumnsDirective } from './browse/responsive-columns.directive';
import { ReactiveFormsModule } from '@angular/forms';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { AboutComponent } from './about/about.component';
import { PhotoswipeComponent } from './photoswipe/photoswipe.component';
import { ImageListComponent } from './image-list/image-list.component';
import { PagesComponent } from './pages/pages.component';
import { FilesPageComponent } from './files-page/files-page.component';


const MAT_MODULES: any[] = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTabsModule
];

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    SettingsComponent,
    TagInputComponent,
    ResponsiveColumnsDirective,
    AboutComponent,
    PhotoswipeComponent,
    ImageListComponent,
    PagesComponent,
    FilesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MAT_MODULES,
    NgxLocalStorageModule.forRoot({prefix: environment.localStoragePrefix}),
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PhotoswipeComponent],
})
export class AppModule { }
