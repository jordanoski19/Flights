import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {


  searchResult: FlightRm[] = []

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search() {
    this.flightService.searchFlight({}).subscribe(
      (response: FlightRm[]) => {
        console.log('Flight Data:', response);
        this.searchResult = response;
      },
      (error) => {
        console.error('Error:', error);
        this.handleError(error);
      }
    );
  }

  private handleError(err: any) {
    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

}
