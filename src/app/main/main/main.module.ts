import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { NavComponent } from "src/app/components/nav/nav.component";
import { BannerComponent } from "src/app/components/banner/banner.component";
import { CoursesComponent } from "src/app/components/courses/courses.component";
import { ProfileComponent } from "src/app/components/profile/profile.component";

@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    BannerComponent,
    CoursesComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
