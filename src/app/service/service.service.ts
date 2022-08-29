import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  // API GET Employee
  public getEmployee() {
    const url = `http://localhost:8080/administrator`;
    return this.http.get(url);
  }
  // API POST Employee
  public create(body: any) {
    const url = `http://localhost:8080/administrator/saveNewEmployee`;
    return this.http.post(url,body);
  }
  // API DELETE Employee
  public deleteEmployee(id: any){
    const url = `http://localhost:8080/administrator/deletEmployee/` + id;
    return this.http.delete(url);
  }
  // API UPDATE Employee
  public updateEmployee(body: Employee){
    const url = `http://localhost:8080/employee/updateEmployee`;
    return this.http.post(url,body);
  }
}
