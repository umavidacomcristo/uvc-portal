import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UVCSnackbarComponent } from 'src/app/components/shared/uvcsnackbar/uvcsnackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackBar(message: string, action: string, typeSnack?: string){
    const typeSnackAux = typeSnack!==undefined? typeSnack: 'Success';
    this.snackBar.openFromComponent(UVCSnackbarComponent, {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      data: {message: message, snackType: typeSnackAux, actionSnackBar: action }
    })
  }
}
