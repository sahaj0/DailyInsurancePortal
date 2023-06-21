import { FormGroup } from "@angular/forms";

export function ConfirmedValidator(controlName:string,matchingControlname:string){
    return (formGroup:FormGroup)=>{
        const control=formGroup.controls[controlName];
        const matchingControl=formGroup.controls[matchingControlname];
        if(matchingControl.errors && !matchingControl.errors['confirmedValidator']){
           return
        }
        if(control.value!==matchingControl.value){
            matchingControl.setErrors({ConfirmedValidator:true})
        }
        else{
            matchingControl.setErrors(null);
        }
    }
}