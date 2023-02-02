import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Activity } from "src/app/data/models/activity.type";
import { environment } from "src/environments/environment";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: "root",
})
export class ActivitiesApiService {
  resourceUrl = environment.apiUrl + "/activities";
  constructor(private httpClient: HttpClient, private notifications: NotificationsService) {}

  getAll$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.resourceUrl);
  }

  getByQuery$(query: string): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.resourceUrl + "?" + query);
  }

  getBySlug$(slug: string): Observable<Activity> {
    return this.httpClient.get<Activity[]>(this.resourceUrl + "?slug=" + slug).pipe(
      tap((activities) => console.log("activities", activities)),
      map((activities: Activity[]) => activities[0]),
      tap((activity) => console.log("activity", activity))
    );
  }

  post$(newActivity: Activity): Observable<Activity> {
    return this.httpClient.post<Activity>(this.resourceUrl, newActivity).pipe(
      tap((data) => {
        console.warn("Create activity !!!", newActivity);
        this.notifications.notify({
          message: "Activity created: " + data.id,
          type: "success",
        });
        console.warn("Notifications", this.notifications.getSnapshot());
      })
    );
  }

  put$(activity: Activity): Observable<Activity> {
    return this.httpClient.put<Activity>(this.resourceUrl + "/" + activity.id, activity);
  }

  delete$(activity: Activity): Observable<Activity> {
    return this.httpClient.delete<Activity>(this.resourceUrl + "/" + activity.id);
  }
}
