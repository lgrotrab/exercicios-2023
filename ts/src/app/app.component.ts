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
  initialDiscussion: boolean = true;
  formsDiscussion: boolean = false;
  sentFormDiscussion: boolean = false;
  expandedComentary: boolean = false;

  changeText(): void {
    this.compactText = !this.compactText;
    this.allText = !this.allText;
  }

  changeInitialDiscussion(): void {
    this.initialDiscussion = !this.initialDiscussion;
    this.formsDiscussion = !this.formsDiscussion;
  }

  changeFormsDiscussion(): void {
    this.formsDiscussion = !this.formsDiscussion;
    this.sentFormDiscussion = !this.sentFormDiscussion;
  }

  changeSentFormDiscussion(): void {
    this.sentFormDiscussion = !this.sentFormDiscussion;
    this.formsDiscussion = !this.formsDiscussion;
  }

  toggleComments(): void {
    this.expandedComentary = !this.expandedComentary;
  }
}
