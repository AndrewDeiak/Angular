export interface UserProfile {
  name: string;
  dateOfBirth: string;
  countryOfBirth: CountryOfBirth;
  languages: Array<object>;
  gender: string;
}

export interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface CountryOfBirth {
  languages: Languages[];
  name: string;
}
