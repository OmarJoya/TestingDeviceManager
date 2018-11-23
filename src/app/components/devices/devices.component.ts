import { Component, OnInit } from '@angular/core';

import { DevicesService, Device } from '../../services/devices.service';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html'
})
export class DevicesComponent implements OnInit {
  devices:Device[] = [];
  deviceSelected:Device = {};

  constructor( private _devicesService: DevicesService) { }

  ngOnInit() {
    this.devices=this._devicesService.getDevices();
  }

  getDevice(index:number):Device{
    console.log(index);
    if(this.devices.length - 1 > index){
      this.deviceSelected = this.devices[index]
      return this.deviceSelected;
    }
    return null;
  }

  request(deviceId:string) {
      console.log(this.getDevice(2));
  }
}
