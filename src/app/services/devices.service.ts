import { Injectable } from '@angular/core';

@Injectable()
export class DevicesService {

  private Devices:Device[] = [
    {
      name:"Galaxy S9",
      os:"Android",
      version:"8.0.0",
      type: "Phone",

      urlImage:"https://www.valuewalk.com/wp-content/uploads/2017/11/Galaxy-S9-Render.jpg"
    },
    {
      name:"iPhone X",
      os:"iOS",
      version:"11",
      type: "Phone",
      urlImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlIc5pe727__Lf99tSCy8ItHdyw3PmdEoPCrKhpcacJuF5kQoQ"
    },
    {
      name:"iPad Pro",
      os:"iOS",
      version:"11",
      type: "Tablet",
      urlImage:"https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/r/fb/rfb/ipad/rfb-ipad-pro10in-spacegray-wifi-2017?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1513118526233"
    }
  ]
  constructor() {
    console.log("service started");
  }

    getDevices(){
      return this.Devices;
    }

}

export interface Device{
  name: string;
  os: string;
  version: string;
  type: string;
  urlImage: string;
}
