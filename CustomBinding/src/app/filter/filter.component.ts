import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    @Input() all:number=0;
    @Input() free:number=0;
    @Input() premium:number=0;

    selectedRadioButtonValue:string='All'

    @Output()
    filterRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

    OnRadioButtonSelectionChange()
    {
      this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
      //console.log(this.selectedRadioButtonValue);
    }
}
