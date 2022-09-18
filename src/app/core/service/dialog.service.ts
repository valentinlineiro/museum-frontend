import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../component/confirm/confirm.component';
import { ConfirmConfig } from '../model/confirm-config';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirm(config: ConfirmConfig): Observable<boolean> {
    return this.dialog
      .open(ConfirmComponent, {
        data: config,
        disableClose: true,
      })
      .afterClosed();
  }
}
