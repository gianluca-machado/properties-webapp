import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SwalComponent, SwalPartialTargets } from '@sweetalert2/ngx-sweetalert2';

/**
 * Default message component into app.
 */
@Component({
  selector: 'app-sweet-message',
  templateUrl: './sweet-message.component.html',
  styleUrls: ['./sweet-message.component.scss'],
})
export class SweetMessageComponent implements OnInit {

  /**
   * Swal view child reference.
   */
  @ViewChild('generalSwal') private generalSwal: SwalComponent;

  /**
   * Swal options.
   */
  @Input() swalOptions: any;

  /**
   * dismissible.
   */
  @Input() dismissible: boolean = true;

  /**
   * Output confirm button clicked.
   */
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  /**
   * @ignore
   */
  constructor(
    public readonly swalTargets: SwalPartialTargets,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() { }

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

    // em,mit event
    this.onConfirm.emit();

  }

}
