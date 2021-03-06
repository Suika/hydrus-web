import { HydrusApiService } from './hydrus-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private api: HydrusApiService) { }


  public searchFiles(tags: string[], system_inbox?: boolean, system_archive?: boolean): Observable<number[]> {
    return this.api.searchFiles(
      JSON.stringify(tags),
      system_inbox ? "true" : "false",
      system_archive ? "true" : "false"
    ).pipe(map(a => a['file_ids']));
  }
  /* search(tags?: string[]) : Observable<number[]> {
    return this.settings.getApi
  } */

}
