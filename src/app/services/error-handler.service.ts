import { ErrorHandler } from "@angular/core";

export class ErrorHandlerService implements ErrorHandler {
  handleError(error: any) {
    console.log("Captured error", error["message"]);
  }
}
