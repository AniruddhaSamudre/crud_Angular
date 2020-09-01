import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todoData: any
  tempTodoData: any;
  formFlag: boolean = false;

  formData = {
    title: '',
    description: '',
    completed: ''
  }

  constructor(private _service: CommonService) { }

  ngOnInit() {
    this.getallTodos();
  }

  getallTodos() {
    this._service.getAllTodo().subscribe((res:any) => {
      this.todoData = res.data;
    })
  }

  onClickEdit(item) {
    this.tempTodoData = item;

    this.formData.title = item.title;
    this.formData.description = item.description;
    this.formData.completed = item.completed;

    this.formFlag = true
  }

  updateTodo() {
    this._service.updateTodo(this.tempTodoData._id, this.formData).subscribe(res => {
      if(res['message'] === 'OK') {
        let index = this.todoData.findIndex(x => x._id === this.tempTodoData._id);

        this.todoData[index].title = this.formData.title;
        this.todoData[index].description = this.formData.description
        this.formFlag = false
      }
    })

  }

  onClickDelete(item, i) {
    this._service.deleteTodo(item._id).subscribe(res => {
      if(res['message'] === 'OK') {

          this.todoData.splice(i, 1);

      }
    })
  }


}
