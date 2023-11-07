import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  isFirstButtonClicked: boolean = false;
  isSecondButtonClicked: boolean = false;
  isThirdButtonClicked: boolean = false;
  isFourthButtonClicked: boolean = false;
  isFifthButtonClicked: boolean = false;
  isSixthButtonClicked: boolean = false;
  isSeventhButtonClicked: boolean = false;
  isEighthButtonClicked: boolean = false;
  isNinethButtonClicked: boolean = false;
  isTenthButtonClicked: boolean = false;
  isEleventhButtonClicked: boolean = false;
  isTwelvethButtonClicked: boolean = false;
  isThirteenButtonClicked: boolean = false;
  isFourteenButtonClicked: boolean = false;

  changeFrame() {
    this.isFirstButtonClicked = !this.isFirstButtonClicked;
  }
  changeFrameGans() {
    this.isSecondButtonClicked = !this.isSecondButtonClicked;
  }
  changeFrameDeep() {
    this.isThirdButtonClicked = !this.isThirdButtonClicked;
  }
  changeFrameGans2() {
    this.isFourthButtonClicked = !this.isFourthButtonClicked;
  }
  changeFramePowerBI() {
    this.isFifthButtonClicked = !this.isFifthButtonClicked;
  }
  changeFrameSql() {
    this.isSixthButtonClicked = !this.isSixthButtonClicked;
  }
  changeFrameMit() {
    this.isSeventhButtonClicked = !this.isSeventhButtonClicked;
  }
  changeFramePhyton() {
    this.isEighthButtonClicked = !this.isEighthButtonClicked;
  }
  changeFrameMachine() {
    this.isNinethButtonClicked = !this.isNinethButtonClicked;
  }
  changeFrameNeural() {
    this.isTenthButtonClicked = !this.isTenthButtonClicked;
  }
  changeFrameNeuralImproving() {
    this.isEleventhButtonClicked = !this.isEleventhButtonClicked;
  }
  changeFrameNeuralStructuring() {
    this.isTwelvethButtonClicked = !this.isTwelvethButtonClicked;
  }
  changeFrameNeuralConvolution() {
    this.isThirteenButtonClicked = !this.isThirteenButtonClicked;
  }
  changeFrameNeuralGANS(){
    this.isFourteenButtonClicked = !this.isFourteenButtonClicked;
  }
}
