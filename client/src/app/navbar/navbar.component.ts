import { AllRoomsDataService } from "./../Service/all-room-data.service";
import { Router } from "@angular/router";
import {
    faUser,
    faHome,
    faCog,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Component, Injectable, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    providers: [AllRoomsDataService],
})
@Injectable({
    providedIn: "root",
})
export class NavbarComponent implements OnInit {
    public faUser = faUser;
    public faHome = faHome;
    public faCog = faCog;
    public faPlus = faPlus;
    public userName: any;
    rooms: {
        name: string;
        users: number;
        maxUsers: number;
        roomId: string;
        img: string;
    }[] = [];

    constructor(
        private router: Router,
        private roomsService: AllRoomsDataService
    ) {
        this.roomsService.rooms$.subscribe(
            (allRooms: any) => (this.rooms = allRooms)
        );
    }

    ngOnInit(): void {}

    public navigateHome(): void {
        this.router.navigateByUrl("");
    }

    public joinRoom(users: number, maxUsers: number, roomId: string): void {
        if (this.canJoin(users, maxUsers) === "1") {
            this.router.navigate([`/room/${roomId}`], {});
        }
        return;
    }

    public canJoin(users: number, maxUsers: number): string {
        if (Math.abs(users - maxUsers) === 0) {
            return "0";
        } else {
            return "1";
        }
    }
}
