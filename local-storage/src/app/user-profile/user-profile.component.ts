import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {CountriesService} from '../countries.service';
import {CountryOfBirth, Languages, UserProfile} from '../user-profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
  public _formGroup: FormGroup;
  public _editMode: boolean;
  public _countries: CountryOfBirth[];
  public _languages: Languages[];
  public _genders: string[] = ['Male', 'Female', 'Other'];
  public _isLoadingCountries: boolean;

  constructor(private countriesService: CountriesService,
              private cdr: ChangeDetectorRef,
              private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this._isLoadingCountries = true;
    this.countriesService.getCountries()
      .pipe(
        finalize(() => {
          this._isLoadingCountries = false;
          this.cdr.detectChanges();
        }))
      .subscribe((countries: CountryOfBirth[]) => {
        this._countries = countries;
        this.initForm();
      });
  }

  public _onChangeCountryOfBirth($event: CountryOfBirth): void {
    this._languages = $event.languages;
    this._formGroup.controls.languages.setValue(null);
  }

  public _compareByName(a, b): boolean {
    return a && b && a.name === b.name;
  }

  public _onEdit(): void {
    this._formGroup.enable();
    this._editMode = true;
  }

  public _onSave(): void {
    localStorage.setItem('user-profile', JSON.stringify(this._formGroup.value));
    this._editMode = false;
    this._formGroup.disable();
  }

  public _onCancel(): void {
    this._editMode = false;
    const userProfile: UserProfile = this.getUserProfile();
    if (userProfile) {
      const {name, dateOfBirth, countryOfBirth, languages, gender} = userProfile;
      this._languages = countryOfBirth ? countryOfBirth.languages : null;
      this._formGroup.patchValue({
        name,
        dateOfBirth,
        countryOfBirth,
        languages,
        gender
      });
    }
    this._formGroup.disable();
  }

  private getUserProfile(): UserProfile {
    return JSON.parse(localStorage.getItem('user-profile'));
  }

  private initForm(): void {
    const userProfile: UserProfile = this.getUserProfile();
    if (userProfile) {
      const {name, dateOfBirth, countryOfBirth, languages, gender} = userProfile;
      this._languages = countryOfBirth ? countryOfBirth.languages : null;
      this._formGroup = this.fb.group({
        name,
        dateOfBirth,
        countryOfBirth,
        languages: [languages],
        gender
      });
    } else {
      this._formGroup = this.fb.group({
        name: null,
        dateOfBirth: null,
        countryOfBirth: null,
        languages: [],
        gender: null
      });
    }
    this._formGroup.disable();
  }
}
