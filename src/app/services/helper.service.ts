import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor() {
    console.warn("HelperService.constructor()");
  }
  doThings(caller: string) {
    console.warn("HelperService.doThings(): " + caller);
  }
}
