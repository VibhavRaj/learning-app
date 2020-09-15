import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Feather from "feather-icons";
@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    Feather.replace();
  }
}
