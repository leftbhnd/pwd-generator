export class PwdGenerator {
    pwdLength: number
    useUpper: boolean
    useNumber: boolean
    useSpec: boolean
    constructor(pwdLength: number, useUpper: boolean, useNumber: boolean, useSpec: boolean) {
        this.pwdLength = pwdLength
        this.useUpper = useUpper
        this.useNumber = useNumber
        this.useSpec = useSpec
    }
    private letters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    private numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    private spec = ['!', '@', '#', '$', '%', '^', '&', '*']

    private randomElement = (list: string[]) => {
        return list[Math.floor(Math.random() * list.length)]
    }

    public setLength = (length: number) => { this.pwdLength = length }

    public setUseUpper = (value: boolean) => { this.useUpper = value }

    public setUseNumber = (value: boolean) => { this.useNumber = value }

    public setUseSpec = (value: boolean) => { this.useSpec = value }

    public pwd = () => {
        let password = []
        if (this.useUpper) {
            password.push(this.randomElement(this.letters))
        }
        if (this.useNumber) {
            password.push(this.randomElement(this.numbers))
        }
        if (this.useSpec) {
            password.push(this.randomElement(this.spec))
        }
        const defaultLength = this.pwdLength - password.length
        for (let i = 0; i < defaultLength; i++) {
            password.push(this.randomElement(this.letters))
        }
        const random = password.sort(() => Math.random() - 0.5)
        return random.join('')
    }
}
