import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-uvcsnackbar',
  templateUrl: './uvcsnackbar.component.html',
  styleUrls: ['./uvcsnackbar.component.scss']
})
export class UVCSnackbarComponent implements OnInit {

  actualColorStyle ={
    background: 'var(--color-primary)',
    buttonColor: 'var(--color-secondary)'
  }

  constructor(
    public snackBarRef: MatSnackBarRef<UVCSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit(): void {
  }


  get getIcon(){
    let root = document.documentElement;
    root.style.setProperty('--backgroundSnack', 'var(--color-primary)');
    switch (this.data.snackType){
      case 'Success':
        return 'check_circle';
      case 'Error':
        root.style.setProperty('--backgroundSnack', 'rgba(255, 57, 43, 1.0)');
        return 'error';
      case 'Warn':
        return 'warning';
      case 'Info':
        return 'info';
      default:
        return 'help';
    }
  }

}
