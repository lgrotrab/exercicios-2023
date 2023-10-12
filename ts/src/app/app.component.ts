import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DevChuva';

  compactText: boolean = true;
  allText: boolean = false;

  changeText(): void {
    this.compactText = !this.compactText;
    this.allText = !this.allText;
  }
}
