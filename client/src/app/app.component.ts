import { AllRoomsDataService } from "./Service/all-room-data.service";
import { Component, Injectable, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
@Injectable({
    providedIn: "root",
})
export class AppComponent implements OnInit {
    title = "client";
    rooms: any[] = [];
    constructor(private roomService: AllRoomsDataService) {
        this.roomService.rooms$.subscribe((rooms: any) => {
            this.rooms = rooms;
        });
    }

    ngOnInit(): void {}

    // getRooms = async (): Promise<void> => {
    //     this.rooms = await this.roomService.getData();
    // };
}
