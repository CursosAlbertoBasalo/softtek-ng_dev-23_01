import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationsService } from "./notifications.service";

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private notifications: NotificationsService, private router: Router) {}

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      const statusCode = error.status;
      if (statusCode >= 500) {
        this.notifications.notify({
          message: "Server error, try later",
          type: "error",
        });
        return;
      }
      if (statusCode === 401) {
        this.notifications.notify({
          message: "Not authorized",
          type: "warning",
        });
        this.router.navigate(["auth", "register"]);
        return;
      }
      this.notifications.notify({
        message: error.message,
        type: "warning",
      });
      return;
    } else {
      this.notifications.notify({
        message: error.message,
        type: "error",
      });
    }
  }
}
