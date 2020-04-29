import { Injectable } from '@angular/core';


export class StatusTranslators {


    deliveryStatus(value: string) {
        let status = "";
        switch (value) {
            case "0":
                status = "requested";
                break;
            
            case "1":
                status = "picked up";
                break;
            
            
            case "2":
                status = "enroute";
                break;
            
            
            case "3":
                status = "delivered";
                break;
            
            default:
                status = "invalid status";
                break;
        }
        return status;
    }

    pickupStatus(value) {
        // JSON.stringify(value);

        let status = "";

        if(value == "0"){
            status = "REQUESTED";
        }else if(value == "1"){
            status = "PICKED UP";
        }

        return status;
    }
}
