import { Router } from "@angular/router";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-createusername",
    templateUrl: "./createusername.component.html",
    styleUrls: ["./createusername.component.scss"],
})
export class CreateusernameComponent implements OnInit {
    userName: any = "";
    constructor(private router: Router) {}

    ngOnInit(): void {
        const name: string | null = localStorage.getItem("userName");
        if (name) {
            this.redirectToHome(name);
        }
    }

    redirectToHome(name: string): void {
        this.router.navigate(["home", { name: name }], {});
    }

    handleChange = (e: any): void => {
        //e.preventDefault();
        this.userName = e.currentTarget.value;
    };

    handleSubmit(): void {
        if (this.userName) {
            localStorage.setItem("userName", this.userName);
            this.redirectToHome(this.userName);
        }
        return;
    }
}
