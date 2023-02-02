import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Activity } from "src/app/data/models/activity.type";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: "root",
})
export class ActivitiesApiService {
  // ToDo: get from environment
  resourceUrl = "http://localhost:3000/activities";
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
      tap({
        next: (data) => {
          console.warn("Create activity !!!", newActivity);
          this.notifications.notify({
            message: "Activity created: " + data.id,
            type: "success",
          });
          console.warn("Notifications", this.notifications.getSnapshot());
        },
        error: (error) => {
          console.warn("Not Created activity !!!", newActivity);
          this.notifications.notify({
            message: "Activity no created: " + error.message,
            type: "error",
          });
          console.warn("Notifications", this.notifications.getSnapshot());
        },
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
