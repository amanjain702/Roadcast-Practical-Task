import { Component, OnInit } from '@angular/core';
import { ServicefileService } from './servicefile.service';

@Component({
  selector: 'app-recruitmentdata',
  templateUrl: './recruitmentdata.component.html',
  styleUrls: ['./recruitmentdata.component.css'],
  providers:[ServicefileService]
})
export class RecruitmentdataComponent implements OnInit {

  count:any =0;
  obj:any=[];
  dataList:any =[]
  intervalId: any;
  constructor(private service: ServicefileService) { }

  ngOnInit() {
   this.intervalId = setInterval(()=>{
    this.getListOfData()
   },1000)
  }


  getListOfData(){
    if(this.count <=10)
    {
      this.service.getList().subscribe((data:any)=>{
        console.log("Response ==>",data);
        this.dataList.push(data);
        let source ={
          "data":this.dataList,
          "count":this.count
        }
        this.obj.push(source)
  
        if(this.count === 10)
          clearInterval(this.intervalId);
  
        this.count++;
      },error=>{
        if(this.count === 10)
        clearInterval(this.intervalId);
      })
    }
  }

}
