import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "src/app/data/models/activity.type";

@Injectable({
  providedIn: "root",
})
export class ActivitiesApiService {
  // ToDo: get from environment
  resourceUrl = "http://localhost:3000/activities";
  constructor(private httpClient: HttpClient) {}

  getAll$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.resourceUrl);
  }

  getByQuery$(query: string): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.resourceUrl + "?" + query);
  }

  getBySlug$(slug: string): Observable<Activity[]> {
    // ToDo: transform from array to element
    return this.httpClient.get<Activity[]>(this.resourceUrl + "?slug=" + slug);
  }

  post$(newActivity: Activity): Observable<Activity> {
    return this.httpClient.post<Activity>(this.resourceUrl, newActivity);
  }
}
