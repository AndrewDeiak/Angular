import {Injectable} from "@angular/core";

class CatService {
  public saySomething() {
    console.log("cat say may may may");
  }
}

@Injectable({
  providedIn: "root",
  useClass: CatService
})
export class DogService {

  constructor() {
  }

  public saySomething() {
    console.log("dog say hav hav hav");
  }
}
