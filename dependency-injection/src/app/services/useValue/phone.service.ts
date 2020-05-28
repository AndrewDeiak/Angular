import {Injectable} from "@angular/core";

function saySomething() {
  console.log("Laptop say ...");
}

@Injectable({
  providedIn: "root",
  useValue: {saySomething}
})
export class PhoneService {

  public saySomething() {
    console.log("Phone say ...");
  }
}

