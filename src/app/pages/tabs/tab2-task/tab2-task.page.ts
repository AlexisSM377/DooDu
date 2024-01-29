import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2-task',
  templateUrl: './tab2-task.page.html',
  styleUrls: ['./tab2-task.page.scss'],
})
export class Tab2TaskPage implements OnInit {

  @Input() slides: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
