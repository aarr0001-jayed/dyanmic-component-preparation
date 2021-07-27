import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';
import { HeroSubProfileComponent } from './hero-sub-profile.component';
import { AdBannerComponent } from './ad-banner.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroSubProfileComponent, [
        new AdItem(HeroProfileComponent, {
          name: 'Great Scott',
          bio: 'Awesome'
        })
      ])
      // new AdItem(AdBannerComponent, [
      //   new AdItem(HeroProfileComponent, {
      //     name: 'Bombasto',
      //     bio: 'Brave as they come'
      //   })
      // ])
    ];
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
