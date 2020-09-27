import { FormGroup, FormBuilder } from '@angular/forms';
import { AppOrganizationEmployee } from 'src/app/_models/organization/app-organization-employee-skills';
import * as moment from 'moment';
import { CustomValidator } from 'src/app/shared/custom-validators/custom-validators';


export class AcceptEmployeeFunctions {


    public static createForm(fb: FormBuilder, employee: AppOrganizationEmployee): FormGroup {

        const dateLeft = employee.dateLeft ? moment(employee.dateLeft).format('MM/YYYY') : null;

        return fb.group({
            professionId: [employee.professionId],
            fullName: [{value: employee.fullName, disabled: true}],
            positionIfAccepted: [employee.position, [CustomValidator.CustomRequired('Position'), CustomValidator.MaxLength(256)]],
            departmentIfAccepted: [null, [CustomValidator.CustomRequired('Department'), CustomValidator.MaxLength(256)]],
            dateStared: [{value: moment(employee.dateStarted).format('MM/YYYY'), disabled: true}],
            dateLeft: [{value: dateLeft, disabled: true}],
            acceptIndividual: [true]
        });
    }

}