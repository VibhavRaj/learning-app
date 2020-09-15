import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BannerComponent } from "src/app/components/banner/banner.component";
import { CoursesComponent } from "src/app/components/courses/courses.component";
import { ProfileComponent } from "src/app/components/profile/profile.component";
import { MainComponent } from "./main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: BannerComponent },
      { path: "courses", component: CoursesComponent },
      { path: "profile", component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
