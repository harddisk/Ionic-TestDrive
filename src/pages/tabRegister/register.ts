import { Component } from '@angular/core';
import { Platform, Alert, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, Camera } from 'ionic-native';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})

export class RegisterPage {
    private platform: Platform;
    private nav: NavController;

    public base64Image: string;

    static get parameters() {
        return [[Platform], [NavController]];
    }

    constructor(platform: Platform, navController: NavController) {
        this.platform = platform;
        this.nav = navController;
    }

    scan() {
        BarcodeScanner.scan((result) => {
                //  success
            if (!result.cancelled) {
                alert("OK: " + result);
            } else {
                alert("Cancelled: " + result);
            }
        })
        .catch((err) => {
            alert("Error: " + err);
        })
    }

        // BarcodeScanner.scan()
        // .then((result) => {
        //     //  success
        //     if (!result.cancelled) {
        //         alert(result);
        //     }
        // })
        // .catch((err) => {
        //     //  error
        //     alert(err);
        // })

    // scan() {
    //     this.platform.ready().then(() => {
    //         cordova.plugins.barcodeScanner.scan((result) => {
    //             this.nav.present(Alert.create({
    //                 title: "Scan Results",
    //                 subTitle: result.text,
    //                 buttons: ["Close"]
    //             }));
    //         }, (error) => {
    //             this.nav.present(Alert.create({
    //                 title: "Attention!",
    //                 subTitle: error,
    //                 buttons: ["Close"]
    //             }))
    //         })
    //     })
    // }

    takePicture() {
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 400,
            targetHeight: 600
        }).then((imageData) => {
            //  imageData is a base64 encoding string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    }
}
