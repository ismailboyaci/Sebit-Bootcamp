import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    if (args == 'tr') {
      value = '90' + value;
      const countryCodeStr = value.slice(0, 2);
      const areaCodeStr = value.slice(2, 5);
      const midSectionStr = value.slice(5, 8);
      const lastSectionStr = value.slice(8);
      return `+${countryCodeStr} (${areaCodeStr})${midSectionStr}-${lastSectionStr}`;
    }
    if(args=='uk'){
      value = '44' + value;
      const countryCodeStr = value.slice(0, 2);
      const areaCodeStr = value.slice(2, 5);
      const midSectionStr = value.slice(5, 8);
      const lastSectionStr = value.slice(8);
      return `+${countryCodeStr} (${areaCodeStr})${midSectionStr}-${lastSectionStr}`;
    }
    if(args=='us'){
      value = '1' + value;
      const countryCodeStr = value.slice(0, 1);
      const areaCodeStr = value.slice(1, 4);
      const midSectionStr = value.slice(4, 7);
      const lastSectionStr = value.slice(7);
      return `+${countryCodeStr} (${areaCodeStr})${midSectionStr}-${lastSectionStr}`;
    }
  }

}
