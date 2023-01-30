import { Injectable } from "@angular/core";

@Injectable()
export class HelperService {
  constructor() {}

  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/&/g, "-and-")
      .replace(/[\s\W-]+/g, "-");
  }
}

export class UnHelperService {
  constructor() {}

  slugify(text: string): string {
    return text
      .toUpperCase()
      .trim()
      .replace(/&/g, "_and_")
      .replace(/[\s\W-]+/g, "_");
  }
}
