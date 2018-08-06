import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    degree = 0;

    clientX;
    clientY;

    offsetLeft;
    offsetTop;
    startRotating = false;


    coordinates(event: MouseEvent): void {
        if (this.startRotating) {
            this.clientX = event.clientX;
            this.clientY = event.clientY;


            this.offsetLeft = event.srcElement.parentElement.offsetLeft;
            
            this.offsetTop = event.srcElement.parentElement.offsetTop;

            const center_x = (this.offsetLeft) + (100 / 2);
            const center_y = (this.offsetTop) + (100 / 2);

            const radians = Math.atan2(this.clientX - center_x, this.clientY - center_y);
            this.degree = (radians * (180 / Math.PI) * -1) + 100 + 80;

            console.log(this.degree);
        }

    }


}



