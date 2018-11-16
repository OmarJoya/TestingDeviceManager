import { Component, OnInit } from '@angular/core';

import { DevicesService, Device } from '../../services/devices.service';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html'
})
export class DevicesComponent implements OnInit {
  devices:Device[]=[];


  constructor( private _devicesService: DevicesService) { }

  ngOnInit() {
    this.devices=this._devicesService.getDevices();
  }
}
