import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
task:any;
  constructor(private tasks:TaskService) { }

  ngOnInit(): void {
this.getTask()

  }

  getTask(){
    this.tasks.getTasks().subscribe((res:any)=>{
      this.task=res
      console.log(this.task);
      
          })
  }

  deleteTask(id:any){
    this.tasks.deleteTask(id).subscribe(res=>{
console.log(res)
this.getTask()
    })
  }

}
