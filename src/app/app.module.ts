import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { LayoutModule } from "src/app/layout/layout.module";
import { ErrorHandlerService } from "src/app/services/error-handler.service";
import {
  HelperService,
  UnHelperService,
} from "src/app/services/helper.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, HttpClientModule],
  // providers: [HelperService],
  providers: [
    {
      provide: HelperService,
      useFactory: function () {
        if (new Date().getFullYear() === 2023) {
          return new HelperService();
        } else {
          return new UnHelperService();
        }
      },
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
