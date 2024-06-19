import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
taskForm:FormGroup;
taskData:Task
  id: any;
  editMode:boolean=false
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private taskService:TaskService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((a:any)=>{
      if(a.id){
        this.id = a.id;
        this.editMode=true;
        this.getTaskData(this.id);
      }

    })

    this.taskForm=this.fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      completed:[false,[Validators.required]],
    })
  }

  addTask(){
 if(this.taskForm.valid){
  this.taskService.addTask(this.taskForm.value).subscribe((res:any)=>{
    this.taskData=res
this.router.navigate(["/tasks"])
  },
(err:any)=>{
  console.log(err.message)
})
 }
  }

  getTaskData(id:any){
    this.taskService.getTaskbyId(id).subscribe((res:any)=>{
this.taskForm.patchValue({
  title:res.title,
  description:res.  description,
  completed:res.completed,
})
    },(err:any)=>{
      console.log(err)
    })
  }

  updateTask(){
    if(this.taskForm.valid){
      let data={
        id:this.id,
        title:this.taskForm.value.title,
        description:this.taskForm.value.description,
        completed:this.taskForm.value.completed,
      }
      this.taskService.updateTask(data).subscribe((res:any)=>{
        this.taskData=res
        
    this.router.navigate(["/tasks"])
      },
    (err:any)=>{
      console.log(err.message)
    })
     }
      }
  
}
