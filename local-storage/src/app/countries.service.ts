import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CountryOfBirth} from './user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
  }

  public getCountries(): Observable<CountryOfBirth[]> {
    return this.http.get<CountryOfBirth[]>('https://restcountries.eu/rest/v2/all');
  }
}
