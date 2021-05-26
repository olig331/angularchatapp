import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AllRoomsDataService } from "../Service/all-room-data.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    providers: [AllRoomsDataService],
})
export class HomeComponent {
    fauser = faUser;
    rooms: any[] = [];
    userName: string | null = "";
    constructor(
        private router: Router,
        private allRoomsDataService: AllRoomsDataService,
        private route: ActivatedRoute
    ) {
        this.allRoomsDataService.rooms$.subscribe(
            (rooms: any) => (this.rooms = rooms)
        );
        this.userName = this.route.snapshot.paramMap.get("name");
    }

    public canJoin = (current: number, max: number): boolean => {
        return Math.abs(current - max) === 0;
    };

    joinRoom(roomId: string) {
        this.router.navigate([`/room/${roomId}`], {});
    }
}
