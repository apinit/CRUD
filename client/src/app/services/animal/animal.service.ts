import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from '../../models/constant';
import { Animal } from 'src/app/models/animal/animal';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(public http: HttpClient) { }

  addAnimal(animal: Animal): Promise<any> {
    return this.http.post(ENDPOINT + '/animal/add', animal).toPromise();
  }
}
