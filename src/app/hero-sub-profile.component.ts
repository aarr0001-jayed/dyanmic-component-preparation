import { Component, Input, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';

import { AdComponent } from './ad.component';
import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';

@Component({
  template: `
    <div class="job-ad">
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class HeroSubProfileComponent implements AdComponent, OnInit {
  @Input() data: any;
  ads: AdItem[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.ads = this.data;
  }

}


