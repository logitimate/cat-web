import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class NewCatComponent implements OnInit {
  newCat: FormGroup;
  catCreated = false;
  error: string;
  loading = false;

  constructor(private fb: FormBuilder, private catService: CatService) {
  }

  @ViewChild('uploadImage') uploadImage: ElementRef;

  ngOnInit() {
    this.newCat = this.fb.group({
      name: [],
      description: [],
      sex: [],
      longHair: [],
      tail: [],
    });
  }


  createCat() {
    const files = this.uploadImage.nativeElement.files;
    const formData = new FormData();
    formData.append('file', files[0]);
    const obj = this.newCat.getRawValue();
    Object.keys(obj).forEach(key => {
      formData.append(key, obj[key]);
    });

    this.loading = true;
    this.catService.createCat(formData).subscribe(
      () => {
        this.catCreated = true;
        this.newCat.reset();
      },
      (error) => this.error = error,
      () => this.loading = false
    );
  }
}
