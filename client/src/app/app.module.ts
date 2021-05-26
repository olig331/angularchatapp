import { AllRoomsDataService } from "./Service/all-room-data.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from "./navbar/navbar.component";
import { RoomComponent } from "./room/room.component";
import { SettingsComponent } from "./settings/settings.component";
import { CreateusernameComponent } from "./createusername/createusername.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        RoomComponent,
        SettingsComponent,
        CreateusernameComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [AllRoomsDataService],
    bootstrap: [AppComponent],
})
export class AppModule {}
