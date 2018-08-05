import {Component, OnInit} from '@angular/core';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats: any;
  catRemoved = false;

  constructor(private catService: CatService) {
  }

  ngOnInit() {
    this.catService.getCats()
      .subscribe(cats => {
        this.cats = cats;
      }, error => console.log(error));
  }

  deleteCat(id) {
    this.catService.deleteCat(id)
      .subscribe(() => {
        this.catRemoved = true;
        setTimeout(() => this.catRemoved = false, 2000);
        this.cats = this.cats.filter(cat => cat.id !== id);
      });
  }
}
