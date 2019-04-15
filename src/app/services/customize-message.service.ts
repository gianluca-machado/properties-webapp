import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CustomizeMessageService {

  /**
   * Create a loader subject to dispare events and show messages.
   */
  private loaderSubjectMessage: Subject<MessageState> = new Subject<MessageState>();

  /**
   * Create a loader subject to dispare events when messasge was dimissed.
   */
  public loaderSubjectAnswerMessage: Subject<boolean> = new Subject<boolean>();

  /**
   * Create a loader subject to dispare events and show question.
   */
  private loaderSubjectQuestion: Subject<QuestionState> = new Subject<QuestionState>();

  /**
   * Create a loader subject to dispare events when question was dimissed.
   */
  public loaderSubjectAnswerQuestion: Subject<boolean> = new Subject<boolean>();

  /**
   * Subscriber.
   */
  public loaderStateMessage: Observable<MessageState>;

  /**
   * Subscriber.
   */
  public loaderStateAnswerMessage: Observable<boolean>;

  /**
   * Subscriber.
   */
  public loaderStateQuestion: Observable<QuestionState>;

  /**
   * Subscriber.
   */
  public loaderStateAnswerQuestion: Observable<boolean>;

  /**
   * Yes or not default buttons of question
   */
  public defaultButtons: QuestionStateButton[] = [
    {
      text: 'Sim',
      value: true,
      class: 'primary',
    },
    {
      text: 'Não',
      value: false,
    },
  ];

  /**
   * @ignore
   */
  constructor() {

    // egt observable of loader subject
    this.loaderStateMessage = this.loaderSubjectMessage.asObservable();

    // egt observable of loader subject
    this.loaderStateAnswerMessage = this.loaderSubjectAnswerMessage.asObservable();

    // egt observable of loader subject
    this.loaderStateQuestion = this.loaderSubjectQuestion.asObservable();

    // egt observable of loader subject
    this.loaderStateAnswerQuestion = this.loaderSubjectAnswerQuestion.asObservable();

  }

  /**
   * Show message component.
   */
  showMessage(title: string = '', content: string = '', button: string = '', dismissible: boolean = true): Promise<boolean> {

    // show message
    this.loaderSubjectMessage.next(<MessageState>{ title, content, button, dismissible });

    // return
    return new Promise<boolean>((resolve) => {

      this.loaderSubjectAnswerMessage.subscribe((result: boolean) => {
        resolve(result);
      });

    });

  }

  /**
   * Show message component.
   */
  showQuestion(title: string = '', content: string = '', buttons: QuestionStateButton[] = this.defaultButtons, dismissible: boolean = true): Promise<boolean> {

    // show message
    this.loaderSubjectQuestion.next(<QuestionState>{ title, content, buttons, dismissible });

    // return
    return new Promise<boolean>((resolve) => {

      this.loaderSubjectAnswerQuestion.subscribe((result: boolean) => {
        resolve(result);
      });

    });

  }

}

/**
 * Message state interface.
 */
export interface MessageState {

  // title of component
  title: string;

  // content text
  content: string;

  // button text
  button: string;

}

/**
 * Question state interface.
 */
export interface QuestionState {

  // title of component
  title: string;

  // content text
  content: string;

  // button text
  buttons: QuestionStateButton[];

}

/**
 * Question state button interface.
 */
export interface QuestionStateButton {

  // text of button
  text: string;

  // value of selection
  value: any;

  // class with background color of button
  class?: string;

}
