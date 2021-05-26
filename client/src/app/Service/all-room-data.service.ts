import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class AllRoomsDataService {
    private rooms: Subject<RoomsData> = new BehaviorSubject<RoomsData>(
        [
            {
                name: "room1",
                users: 12,
                maxUsers: 12,
                roomId: "room1",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room2",
                users: 9,
                maxUsers: 10,
                roomId: "room2",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room3",
                users: 1,
                maxUsers: 2,
                roomId: "room3",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room4",
                users: 62,
                maxUsers: 200,
                roomId: "room4",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room5",
                users: 52,
                maxUsers: 79,
                roomId: "room5",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room6",
                users: 32,
                maxUsers: 32,
                roomId: "room6",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room7",
                users: 12,
                maxUsers: 15,
                roomId: "room7",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room8",
                users: 3,
                maxUsers: 7,
                roomId: "room8",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room9",
                users: 2,
                maxUsers: 5,
                roomId: "room9",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room10",
                users: 81,
                maxUsers: 89,
                roomId: "room10",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room11",
                users: 2,
                maxUsers: 100,
                roomId: "room11",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room12",
                users: 21,
                maxUsers: 22,
                roomId: "room12",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room13",
                users: 3,
                maxUsers: 4,
                roomId: "room13",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room14",
                users: 2,
                maxUsers: 2,
                roomId: "room14",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room15",
                users: 9,
                maxUsers: 9,
                roomId: "room15",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room16",
                users: 1,
                maxUsers: 10,
                roomId: "room16",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room17",
                users: 4,
                maxUsers: 6,
                roomId: "room17",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room18",
                users: 5,
                maxUsers: 8,
                roomId: "room18",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room19",
                users: 10,
                maxUsers: 15,
                roomId: "room19",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room20",
                users: 1,
                maxUsers: 21,
                roomId: "room20",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room21",
                users: 0,
                maxUsers: 102,
                roomId: "room21",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
            {
                name: "room22",
                users: 0,
                maxUsers: 4,
                roomId: "room22",
                img: "https://live.staticflickr.com/2904/33359308043_7426155303_b.jpg",
            },
            {
                name: "room23",
                users: 0,
                maxUsers: 7,
                roomId: "room23",
                img: "https://live.staticflickr.com/23/32075004_f03188e735_b.jpg",
            },
        ],
    );

    // getData = async (): Promise<RoomsData> => {
    //     const response = await fetch("http://localhost:3002/");
    //     const data = await response.json();
    //     if (data.status === 200) {
    //         return data.data;
    //     }
    //     return [];
    // };

    get rooms$() {
        return this.rooms.asObservable();
    }
}