import { Component } from '@angular/core';

@Component({
  selector: 'app-dream-catcher',
  templateUrl: './dream-catcher.component.html',
  styleUrls: ['./dream-catcher.component.scss']
})
export class DreamCatcherComponent {

  inputText: string = "";
  counter: number = 0;
  cloudTexts = ["", "Joy", "", "Love", "Bliss", "", "Magic", ""]

  generateCloudText() {
    this.cloudTexts[this.counter] = this.inputText;
    this.counter++;
    this.inputText = "";
    if (this.counter == this.cloudTexts.length) {
      this.counter = 0;
    }
  }
}
