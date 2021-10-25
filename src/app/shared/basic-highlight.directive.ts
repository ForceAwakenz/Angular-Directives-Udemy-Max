import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor (private elementRef: ElementRef) {

    }

    ngOnInit() {
        // not a good practice to change a DOM this way
        this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    }
}