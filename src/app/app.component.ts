import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomizeMessageService, MessageState, QuestionState } from './services/customize-message.service';
import { SweetMessageComponent } from './components/sweet-message/sweet-message.component';
import { SweetQuestionComponent } from './components/sweet-question/sweet-question.component';

/**
 * App component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MKSaúde';

  /**
   * Swal options.
   */
  public swalMessageOptions: MessageState = {
    title: '',
    content: '',
    button: '',
  };

  /**
   * Swal options.
   */
  public swalQuestionOptions: QuestionState = {
    title: '',
    content: '',
    buttons: [],
  };

  /**
   * View message child.
   */
  @ViewChild(SweetMessageComponent, { static: false }) messageComponent: SweetMessageComponent;

  /**
   * View qua=tion child.
   */
  @ViewChild(SweetQuestionComponent, { static: false }) questionComponent: SweetQuestionComponent;

  /**
   * @ignore
   */
  constructor(
    private messageService: CustomizeMessageService,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {

    // define subscribe to listen new messsage subscribe
    this.messageService.loaderStateMessage.subscribe((state: MessageState) => {
      console.log(state);
      this.swalMessageOptions = { ...state };
      setTimeout(() => {
        this.messageComponent.show();
      }, 50);
    });

    // define subscribe to listen new question subscribe
    this.messageService.loaderStateQuestion.subscribe((state: QuestionState) => {
      console.log(state);
      this.swalQuestionOptions = { ...state };
      setTimeout(() => {
        this.questionComponent.show();
      }, 50);
    });

  }

}
