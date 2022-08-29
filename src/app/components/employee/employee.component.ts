import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employee: Employee[] = [];

  // vaccine status
  state: any [] = [
    {value:'Si'},
    {value:'No'}
  ];

  // vaccine name
  vaccines: any [] = [
    {value:'Pfizer'},
    {value:'Moderna'},
    {value:'Astrazeneca'},
    {value:'Janssen de Johnson & Johnson'},
    {value:'Sinovac'},
    {value:'Ninguna'},
  ]

  // elements that reactively communicate with the html form
  // form element validation
  public form = new FormGroup({
    txtId: new FormControl(""),
    txtIdentification: new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
    txtName: new FormControl("",[Validators.required,Validators.pattern("[A-Z]{1}[a-z]{2,20}")]),
    txtLastname: new FormControl("",[Validators.required,Validators.pattern("[A-Z]{1}[a-z]{2,20}")]),
    txtMail: new FormControl("",[Validators.required,Validators.email]),
    txtaddress: new FormControl("",[Validators.required,]),
    txtdateBirth: new FormControl("",[Validators.required,Validators.pattern("[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}")]),
    txtcellphone: new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
    txtvaccinestatus: new FormControl("",[Validators.required,]),
    txtvaccinename: new FormControl("",[Validators.required,]),
    txtvaccinedate: new FormControl("",[Validators.required,Validators.pattern("[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}")]),
    txtvaccinedose: new FormControl("",[Validators.required,Validators.pattern("[0-9]{1}")]),
    txtuser: new FormControl("",[Validators.required,]),
    txtpassword: new FormControl("",[Validators.required,]),
  });

  // declaret temporal information of employee
  public information = {
    id: -1,
    name: "",
    lastname: "",
    mail: "",
    address: "",
    dateBirth: "",
    cellphone: "",
    vaccinestatus: "",
    vaccinename: "",
    vaccinedate: "",
    vaccinedose: -1,
    user: "",
    password: "",
    identification: ""
  }

  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.listEmployee();
  }

  // list all employee
  public listEmployee() {

    this.service.getEmployee().subscribe(
      (list: any) => {
        this.employee = list
      },
      (error) => console.warn(error)
    )
  }

  // save temporal information of employee in the next form
  temporalInformation(id: any, name: any, lastname: any, address: any,
    mail: any, dateBirth: any, cellphone: any, vaccinestatus: any,
    vaccinename: any, vaccinedate: any, vaccinedose: any,
    user: any, password: any, identification: any) {
    this.information.id = id;
    this.information.name = name;
    this.information.lastname = lastname;
    this.information.mail = mail;
    this.information.address = address;
    this.information.dateBirth = dateBirth;
    this.information.cellphone = cellphone;
    this.information.vaccinestatus = vaccinestatus;
    this.information.vaccinename = vaccinename;
    this.information.vaccinedate = vaccinedate;
    this.information.vaccinedose = vaccinedose;
    this.information.user = user;
    this.information.password = password;
    this.information.identification = identification;

    this.form.controls['txtId'].setValue(this.information.id);
    this.form.controls['txtIdentification'].setValue(this.information.identification);
    this.form.controls['txtName'].setValue(this.information.name);
    this.form.controls['txtLastname'].setValue(this.information.lastname);
    this.form.controls['txtMail'].setValue(this.information.mail);
    this.form.controls['txtaddress'].setValue(this.information.address);
    this.form.controls['txtdateBirth'].setValue(this.information.dateBirth);
    this.form.controls['txtcellphone'].setValue(this.information.cellphone);
    this.form.controls['txtvaccinestatus'].setValue(this.information.vaccinestatus);
    this.form.controls['txtvaccinename'].setValue(this.information.vaccinename);
    this.form.controls['txtvaccinedate'].setValue(this.information.vaccinedate);
    this.form.controls['txtvaccinedose'].setValue(this.information.vaccinedose);
    this.form.controls['txtuser'].setValue(this.information.user);
    this.form.controls['txtpassword'].setValue(this.information.password);
  }

  // update employee
  public updateEmployee() {

    // console.log(this.form.value);

    this.service.updateEmployee(
      {
        emp_id: this.form.value.txtId,
        emp_name: this.form.value.txtName,
        emp_lastname: this.form.value.txtLastname,
        emp_mail: this.form.value.txtMail,
        emp_datebirth: this.form.value.txtdateBirth,
        emp_address: this.form.value.txtaddress,
        emp_cellphone: this.form.value.txtcellphone,
        emp_vaccinestatus: this.form.value.txtvaccinestatus,
        emp_vaccinename: this.form.value.txtvaccinename,
        emp_vaccinedate: this.form.value.txtvaccinedate,
        emp_vaccinedose: this.form.value.txtvaccinedose,
        emp_user: this.form.value.txtuser,
        emp_password: this.form.value.txtpassword,
        emp_identification: this.form.value.txtIdentification,
      }
    ).subscribe({
      next: rest => {
        this.employee.push(
          rest as Employee
        )
      },
      error: () => { }
    }
    );
  }

  // getters of forms for the validation
  get Identification(): FormControl {
    return this.form.get("txtIdentification") as FormControl;
  }

  get Name(): FormControl {
    return this.form.get("txtName") as FormControl;
  }

  get LastName(): FormControl {
    return this.form.get("txtLastname") as FormControl;
  }

  get Email(): FormControl {
    return this.form.get("txtMail") as FormControl;
  }

  get Adress(): FormControl {
    return this.form.get("txtaddress") as FormControl;
  }

  get Birth(): FormControl {
    return this.form.get("txtdateBirth") as FormControl;
  }

  get Cell(): FormControl {
    return this.form.get("txtcellphone") as FormControl;
  }

  get VaccineStatus(): FormControl {
    return this.form.get("txtvaccinestatus") as FormControl;
  }

  get VaccineName(): FormControl {
    return this.form.get("txtvaccinename") as FormControl;
  }

  get VaccineDate(): FormControl {
    return this.form.get("txtvaccinedate") as FormControl;
  }

  get VaccineDose(): FormControl {
    return this.form.get("txtvaccinedose") as FormControl;
  }

  get User(): FormControl {
    return this.form.get("txtuser") as FormControl;
  }

  get Password(): FormControl {
    return this.form.get("txtpassword") as FormControl;
  }

}
