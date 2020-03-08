import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Animal } from 'src/app/models/animal/animal';
import { Utils } from '../../models/utils';
import { AnimalService } from '../../services/animal/animal.service';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  form: FormGroup;
  animal = new Animal();

  constructor(public fb: FormBuilder, public utils: Utils, private animalService: AnimalService) { }

  ngOnInit() {
    this.createAnimalForm();
  }

  onSubmit() {
    if (this.validateForm) {
      this.animal.animalName = this.getField('name').value;
      this.animal.gender = this.getField('gender').value;

      this.animalService.addAnimal(this.animal).then((res) => {
        console.log(res);
        this.utils.resetFormGroup(this.form);
      }).catch((error) => {
        console.log(error);
      });
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

  get validateForm() { return this.form.valid; }

  getField(name: any) {
    return this.form.get(name);
  }
}
