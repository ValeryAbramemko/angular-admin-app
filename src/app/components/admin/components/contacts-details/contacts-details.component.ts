import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {User} from "../../user";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements  OnInit{
  id!:number;
  User!: Observable<User>
  constructor(private activeRoute:ActivatedRoute,private adminService: AdminService) {

  }
  ngOnInit(): void {
    this.User = this.activeRoute.data.pipe(map((data) => data?.['user']))
  }
}
