import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    name: string = 'Iron Man';
    age: number = 45;

    getNameAndAge(): string {
        return `${ this.name } - ${ this.age }`
    }

    getNameCapitalize(): string {
        return this.name.toUpperCase();
    }

    changeName(): void {
        this.name = 'SpiderMan';
    }

    changeAge(): void {
        this.age = 19;
    }
}