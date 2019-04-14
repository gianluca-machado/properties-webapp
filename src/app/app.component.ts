import { Component, ViewChild } from '@angular/core';
import { SweetMessageComponent } from './components/sweet-message/sweet-message.component';

/**
 * App component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /**
   * Swal options.
   */
  public swalOptions: any = {
    title: '',
    content: '',
    button: 'Entendi',
  };

  /**
   * View message child.
   */
  @ViewChild(SweetMessageComponent) messageComponent: SweetMessageComponent;

  /**
   * @ignore.
   */
  constructor() { }

  /**
   * Will show message into a normal way.
   */
  showMessage1() {

    // log call
    console.log('showMessage1()');

    // set message
    this.swalOptions.title = 'Usuário e/ou senha inválidos';
    this.swalOptions.content = 'Verifique as informações inseridas e tente novamente.';
    this.swalOptions.button = 'Entendi';

    // present swal
    this.messageComponent.show();

  }

  /**
   * Will show message into a correct way.
   */
  showMessage2() {

    // log call
    console.log('showMessage2()');

  }
}
