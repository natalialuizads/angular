import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User, UserList } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  public userList!: UserList;
  public isAddMode: boolean = true;
  public id!: number;


  public form: FormGroup = this.formBuilder.group({
    id: [''],
    nome: [''],
    email: [''],
  });

  constructor(private formBuilder: FormBuilder, private service: UserService) {}

  ngOnInit(): void {
    this.service.getListUsers().subscribe(
      (res: UserList) => {
        this.userList = res;
      },
      (error) => {
        console.error(error);
      }
    );

    /**
     * Atualizando manualmente a listagem após caso o backend não retorne.
     */
    this.service.emitEvent.subscribe((res) => this.userList.push(res));


  }

  submitForm(): void {
    if(this.isAddMode){
      this.addUser();
      this.form.reset();
    } else {
      this.editUser();
    }
  }
  addUser() {
    this.service.addUser(this.form.value).subscribe(
      (res) => {
        this.service.addUserAlert(res)
      },
      (error) => error
    );
  }

  editUser() {
    this.service.editUser(this.form.value).subscribe(
      res => {
        this.userList = this.userList.map((user) => {
          return user.id === this.form.value.id ? this.form.value : user;
        })
        this.form.reset();
      },
      error => error
    )
  }

  removeUser(id: number): void {
    this.service.removeUser(id).subscribe(
      (res) => {
        this.userList = this.userList.filter((user) => user.id !== id);
      },
      (error) => error
    );
  }

  getUser(id: number): void {
    this.isAddMode = false;
    this.service.getUser(id).pipe(first())
    .subscribe(user => this.form.patchValue(user));
  }
}
