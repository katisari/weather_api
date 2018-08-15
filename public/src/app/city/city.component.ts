import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  specificCity;
  specificCityInfo = {};
  img_url;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      console.log(params['city']);
      this.specificCity = params['city'];
      if(this.specificCity == "Seattle") {
        this.img_url = "https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
      } else if (this.specificCity == "San Jose"){
        this.img_url = "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
      } else if (this.specificCity == "Burbank") {
        this.img_url = "https://as2.ftcdn.net/jpg/01/22/74/95/500_F_122749535_nvhixljeKcd4iMc59YB126nj2ZS7Q8F4.jpg";
      } else if (this.specificCity == "Dallas"){
        this.img_url = "https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&h=350";
      } else if (this.specificCity == "Chicago"){
        this.img_url = "https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
      } else {
        this.img_url = "https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
      }
      this.showInfo();
    });
  }
  showInfo() {
    let observable = this._httpService.showInfo(this.specificCity);
    observable.subscribe(data => {
      this.specificCityInfo = data;
    });
  }


}
