import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  @Input() retornarId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
