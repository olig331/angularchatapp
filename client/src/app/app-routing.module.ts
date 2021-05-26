import { RoomComponent } from "./room/room.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateusernameComponent } from "./createusername/createusername.component";

const routes: Routes = [
    { path: "", pathMatch: "full", component: CreateusernameComponent },
    { path: "home", pathMatch: "full", component: HomeComponent },
    { path: "room/:roomId", pathMatch: "full", component: RoomComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
