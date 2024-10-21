/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    // todo: ...
    private numerator:number;
    private denominator:number;

    constructor( numerator:number,denominator:number){
        this.numerator = numerator;
        this.denominator = denominator;
        this.normalize;
    }

    public getNumerator():number{
        return this.numerator;
    }

    public getDenominator():number {
        return this.denominator;
    }

    public normalize():Rational{
        let gcd:number = 0;
        for (let i = 1; i <= this.numerator && i <= this.denominator; i++) {
            if (this.numerator % i == 0 && this.denominator % i == 0) {
                gcd = i;
            }
        }
        return this;
    }

    public isWhole():boolean {
        return this.numerator % this.denominator == 0 || this.denominator == 1;
    }

    public isDecimal():boolean {
        return !this.isWhole();
    }

    public equals(numerator: number, denominator: number): boolean;
    public equals(r: Rational): boolean;

    public equals(param: any): boolean {
        if (param instanceof Rational) {
            return this.numerator === param.getNumerator() && this.denominator === param.getDenominator();
        } else {
            const other: Rational = new Rational(param.numerator, param.denominator);
            return this.numerator === other.numerator && this.denominator === other.denominator;
        }
    }

    public static _parseRational(char1:string[] , char2:string[] ):Rational {
        const num = parseInt(char1.join(''),10);
        const den = parseInt(char2.join(''),10);
        return new Rational(num, den);
    }

    public static parseRational(str:string):Rational {
        const parts = str.split("/");
        const num = parseInt(parts[0].trim());
        const den = parseInt(parts[1].trim());
        return new Rational(num, den);
    }

    public toString():string{
        return `${this.numerator}/${this.denominator}`;
    }
}