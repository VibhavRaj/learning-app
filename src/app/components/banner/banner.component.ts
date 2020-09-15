import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Feather from "feather-icons";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    Feather.replace();
  }
}
