import { Component, Input } from "@angular/core";

@Component({
  selector: "lab-price",
  template: ` <span> 🪙 {{ price | currency : currency }}</span> `,
  styles: [],
})
export class PriceComponent {
  @Input() price: any = 0;
  @Input() currency = "EUR";
}
