import { Component } from '@angular/core';
import { ModuleTeaserGroupComponent } from '../../shared-components/lessons/module-teaser-group/module-teaser-group.component';
import { ModuleDetailBannerComponent } from "../../shared-components/lessons/module-detail-banner/module-detail-banner.component";

@Component({
  selector: 'app-home',
  imports: [ModuleTeaserGroupComponent, ModuleDetailBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
