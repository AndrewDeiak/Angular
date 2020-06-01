import {ChangeDetectionStrategy, Component, ComponentFactoryResolver, OnInit, Type, ViewChild} from "@angular/core";
import {AdDirective} from "./ad.directive";
import {CatBannerComponent} from "./cat-banner/cat-banner.component";
import {DogBannerComponent} from "./dog-banner/dog-banner.component";

export interface AdComponent {
  data: any;
}

class AdItem {
  constructor(public component: Type<any>, public data: any) {
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  public ads = [
    new AdItem(DogBannerComponent, {
      title: "Dog banner",
      description: "Start free trial ..."
    }),
    new AdItem(CatBannerComponent, {
      title: "Cat banner",
      description: "Start free trial ..."
    }),
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public ngOnInit(): void {
  }

  private loadComponent(index: number) {
    const adItem = this.ads[index];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as AdComponent).data = adItem.data;
  }
}
