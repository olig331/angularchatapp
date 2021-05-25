import { Component, OnInit, Injectable, Input } from "@angular/core";
import { Router } from "@angular/router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AllRoomsDataService } from "../Service/all-room-data.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    providers: [AllRoomsDataService],
})
@Injectable({
    providedIn: "root",
})
export class HomeComponent implements OnInit {
    fauser = faUser;
    // @Input() rooms!: any[];
    rooms: {
        name: string;
        users: number;
        maxUsers: number;
        roomId: string;
        img: string;
    }[] = [];
    constructor(
        private router: Router,
        private allRoomsDataService: AllRoomsDataService
    ) {
        this.allRoomsDataService.rooms$.subscribe(
            (rooms) => (this.rooms = rooms)
        );
    }

    ngOnInit() {}

    public canJoin = (current: number, max: number): boolean => {
        return Math.abs(current - max) === 0;
    };

    joinRoom(roomId: string) {
        this.router.navigate([`/room/${roomId}`], {});
    }
}
