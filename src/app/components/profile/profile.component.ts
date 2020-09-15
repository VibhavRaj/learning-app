import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Feather from "feather-icons";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    Feather.replace();
  }
}
