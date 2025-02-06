import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ModuleTeaserComponent } from "../module-teaser/module-teaser.component";

@Component({
  selector: 'app-module-teaser-group',
  imports: [NgFor, ModuleTeaserComponent],
  templateUrl: './module-teaser-group.component.html',
  styleUrl: './module-teaser-group.component.css'
})
export class ModuleTeaserGroupComponent {

}
