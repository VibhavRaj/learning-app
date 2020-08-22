import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Feather from "feather-icons";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    Feather.replace();
  }
}
