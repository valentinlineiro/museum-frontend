import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../component/confirm/confirm.component';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirm(): Observable<boolean> {
    return this.dialog.open(ConfirmComponent).afterClosed();
  }
}
