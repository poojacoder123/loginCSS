import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatList, MatListModule} from '@angular/material/list'
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,MatListModule, RouterLink,
     MatSidenavModule, FlexLayoutModule, RouterOutlet, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
