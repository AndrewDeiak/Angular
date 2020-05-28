import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

class FlatService {
  public saySomething() {
    console.log("Flat say ...");
  }
}

function provideFactory(http: HttpClient) {
  console.log(http);
  return new FlatService();
}

@Injectable({
  providedIn: "root",
  useFactory: provideFactory,
  deps: [HttpClient]
})
export class HouseService {
  public saySomething() {
    console.log("House say ...");
  }
}
