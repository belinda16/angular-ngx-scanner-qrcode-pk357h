import { Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public output: string;

  // @ViewChild('action', { static: true }) action: NgxScannerQrcodeComponent;
  // TODO something this.action

  public onError(e: any): void {
    alert(e);
  }

  getData(event: any){
    alert(event)
  }
}
