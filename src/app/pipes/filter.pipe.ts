import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( employee: Employee[], searchState: string = '', searchName: string = '' ): Employee[] {
    
    // filter vaccine by state
    if ( searchState.length > 0 ){
      const filteredStatus = employee.filter( emp => emp.emp_vaccinestatus.includes( searchState ) );
      return filteredStatus;
    } 
    // filter vaccine by name
    if ( searchName.length > 0 ){
      const filteredName = employee.filter( emp => emp.emp_vaccinename.includes( searchName ) );
      return filteredName;
    }
    return employee;
    
}

}
