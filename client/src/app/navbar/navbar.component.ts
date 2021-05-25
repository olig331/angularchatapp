import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
    faUser = faUser;
    @Input() userName!: string;
    @Input() rooms!: any[];

    ngOnInit(): void {}
}
