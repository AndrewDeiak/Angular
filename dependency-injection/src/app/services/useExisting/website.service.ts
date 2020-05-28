import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})
class ApplicationService {
  public saySomething() {
    console.log("Application is a ..");
  }
}

@Injectable({
  providedIn: "root",
  useExisting: ApplicationService
})
export class WebsiteService {
  public saySomething() {
    console.log("Website is a ..");
  }
}
