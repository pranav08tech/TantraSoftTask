import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  filArray: any = []
  constructor() {}
  ngOnInit() {

  }
  onSubmit(data: any) {
    if (data) {
      let strArray = data.split("")
      strArray.forEach((ele: any) => {
        let check = this.filArray.includes(ele)
        if (!check && ele != " ") this.filArray.push(ele)
      });
    }
  }
}
