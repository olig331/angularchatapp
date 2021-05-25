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
    userName = "";
    rooms = [];

    constructor(private roomService: AllRoomsDataService) {}

    // from what i understand ngOnInit will return promise but will not wait for the for it to finish so I have created a async function to handle the data call and calling that function in ngOnInit. I would assume this will cause a double render on initilation of the component, so look into a better way to achieve this
    ngOnInit(): void {
        this.userName = "Oliver";
        this.getRooms();
    }

    getRooms = async (): Promise<void> => {
        this.rooms = await this.roomService.getData();
    };
}
