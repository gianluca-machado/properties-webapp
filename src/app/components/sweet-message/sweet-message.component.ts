import { Component, ViewChild, Input } from '@angular/core';
import { SwalComponent, SwalPartialTargets } from '@sweetalert2/ngx-sweetalert2';
import { CustomizeMessageService } from 'src/app/services/customize-message.service';

/**
 * Default message component into app.
 */
@Component({
  selector: 'app-sweet-message',
  templateUrl: './sweet-message.component.html',
  styleUrls: ['./sweet-message.component.scss'],
})
export class SweetMessageComponent {
  static componentName = 'SweetMessageComponent';

  /**
   * Swal view child reference.
   */
  @ViewChild('swal', { static: false }) public generalSwal: SwalComponent;

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
  close() {

    // clos swal
    this.generalSwal.nativeSwal.close();

    // send answer
    this.sendAnswer(true);

  }

  /**
   * Send anwser.
   */
  sendAnswer(answer: boolean) {

    // send answer
    this.customizeMessageService.loaderSubjectAnswerMessage.next(answer);

  }

}
