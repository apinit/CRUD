import { FormGroup } from '@angular/forms';

export class Utils {
    constructor(){}

    resetFormGroup(form: FormGroup) {
        return form.reset();
    }
}