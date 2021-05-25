import { AllRoomsDataService } from "../Service/all-room-data.service";
import { Component, OnInit, Injectable, Input } from "@angular/core";

import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    fauser = faUser;
    @Input() rooms!: any[];

    constructor() {}

    ngOnInit() {}

    public canJoin = (current: number, max: number): boolean => {
        return Math.abs(current - max) === 0;
    };

    joinRoom(roomId: string) {
        console.log(roomId);
    }
}
