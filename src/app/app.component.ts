import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { apptodoitem } from './apptodoitem';
import { Model } from './model';
declare let alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayAll: boolean = false;
  model = new Model();
  // removeItem(i:any): void {
  //   this.model.items=this.model.items.filter(item=>item.i!==i);
  // }
  runSuccess(){
    alertify.success("To do eklendi.");
  }
  addItem(value: any) {
    if (value != '') {
      
        this.model.items.push({id:this.model.items.length, description: value, action: false });
        this.runSuccess();
      
    } else {
      window.alert('Todo boş bırakılamaz.');
    }
  }
  
  removeItem(id: any) {
    this.model.items=this.model.items.filter(item=>item.id!==id)
   

  }
  getItems() {
    if(this.displayAll){
      return this.model.items;

    }
    return this.model.items.filter(item=> ! item.action)
  }
}
