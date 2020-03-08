import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Animal } from 'src/app/models/animal/animal';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  form: FormGroup;
  animal = new Animal();

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.createAnimalForm();
  }

  onSubmit() {
    if(this.validateForm){
      this.animal.animalName = this.getField('name').value;
      this.animal.gender = this.getField('gender').value;
    }
  }

  createAnimalForm() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ])],
      gender: ['', Validators.required]
    });
  }

  get validateForm(){ return this.form.valid; }
  
  getField(name: any) {
    return this.form.get(name);
  }
}
