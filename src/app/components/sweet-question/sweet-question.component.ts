import { Component, Input, ViewChild } from '@angular/core';
import { SwalPartialTargets, SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CustomizeMessageService } from 'src/app/services/customize-message.service';

@Component({
  selector: 'app-sweet-question',
  templateUrl: './sweet-question.component.html',
  styleUrls: ['./sweet-question.component.scss'],
})
export class SweetQuestionComponent {
  static componentName = 'SweetQuestionComponent';

  /**
  * Swal view child reference.
  */
  @ViewChild('swal') public generalSwal: SwalComponent;

  /**
   * Swal options.
   */
  @Input() swalOptions: any;

  /**
   * dismissible.
   */
  @Input() dismissible: boolean = true;

  /**
   * @ignore
   */
  constructor(
    public readonly swalTargets: SwalPartialTargets,
    private customizeMessageService: CustomizeMessageService,
  ) { }

  /**
   * Show message.
   */
  show() {

    // show swal
    this.generalSwal.show();

  }

  /**
   * Close message.
   */
  close(answer: boolean) {

    // clos swal
    this.generalSwal.nativeSwal.close();

    // send answer
    this.sendAnswer(answer);

  }

  /**
   * Send anwser.
   */
  sendAnswer(answer: boolean) {

    // send answer
    this.customizeMessageService.loaderSubjectAnswerQuestion.next(answer);

  }

}
