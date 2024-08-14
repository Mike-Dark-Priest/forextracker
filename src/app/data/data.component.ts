
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {  HttpClientModule } from '@angular/common/http';

@Component({

  selector: 'app-data',

  templateUrl: './data.component.html',
  imports: [HttpClientModule],
  styleUrls: ['./data.component.css'],
  standalone: true,
  providers: [ApiService]

})

export class DataComponent implements OnInit {

 

  data: any;

 

  constructor(private apiService: ApiService) {} // Inject the service here

 

  ngOnInit(): void {

    this.getData(); // Call the API when the component initializes

  }

 

  async getData()  {

    this.apiService.getData().subscribe(response => {

      this.data = response;

    }, error => {

      console.error('Error fetching data', error);

    });

  }

 

  async submitData(data: any) {

    this.apiService.postData(data).subscribe(response => {

      console.log('Data submitted successfully', response);

    }, error => {

      console.error('Error submitting data', error);

    });

  }

}