import { Component, OnInit } from '@angular/core';
import { CustomizeMessageService, QuestionStateButton } from 'src/app/services/customize-message.service';

/**
 * Login component.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  /**
   * @ignore
   */
  constructor(
    private customizeMessageService: CustomizeMessageService,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() { }

  /**
   * Show Message.
   */
  async showMessage() {

    // log call
    console.log('showMessage()');

    // set message
    const title: string = 'Usuário e/ou senha inválidos';
    const content: string = 'Verifique as informações inseridas e tente novamente.';
    const button: string = 'Entendi';

    // show message
    const response: boolean = await this.customizeMessageService.showMessage(title, content, button);
    console.log(response);

  }

  /**
   * Show Question.
   */
  async showQuestion() {

    // log call
    console.log('showQuestion()');

    // set message
    const title: string = 'Aviso';
    const content: string = 'Este é um exemplo de pergunta';
    const buttons: QuestionStateButton[] = [
      {
        text: 'Resposta 1',
        value: 1,
        class: 'primary',
      },
      {
        text: 'Resposta 2',
        value: 2,
        class: 'secondary',
      },
      {
        text: 'Resposta 3',
        value: 3,
      },
    ];

    // show message
    const response: boolean = await this.customizeMessageService.showQuestion(title, content, buttons);
    console.log(response);

  }

}
