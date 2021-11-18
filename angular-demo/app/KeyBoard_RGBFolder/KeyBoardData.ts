export class KB61Prohibit {
    static prohibitNum: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    static prohibitAll: any = [
        '`',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '+',
        'Backspace', //14
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '[',
        ']',
        '\\', //14
        'Caps',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter', //13
        'LShift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        ',',
        '.',
        '/',
        'RShift', //12
        'LCtrl',
        'LWin',
        'LAlt',
        'Space',
        'RAlt',
        'RWin',
        'Menu',
        'RCtrl',
    ]

    static prohibitABC: any = [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
    ]
    static prohibitControl: any = [
        '`',
        'Backspace', //14
        'Tab',
        'Caps',
        'Enter', //13
        'LShift',
        'RShift', //12
        'LCtrl',
        'LWin',
        'LAlt',
        'Space',
        'RAlt',
        'RWin',
        'Menu',
        'RCtrl',
    ]
    static prohibitSymbol: any = ['-', '+', '[', ']', '\\', ':', '"', ',', '.', '/']

    static KeyIndexMatrix1: any = [
        '`',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '+',
        'Backspace', //14
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '[',
        ']',
        '\\', //14
        'Caps',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter', //13
        'LShift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        ',',
        '.',
        '/',
        'RShift', //12
        'LCtrl',
        'LWin',
        'LAlt',
        'Space',
        'RAlt',
        'RWin',
        'Menu',
        'RCtrl',
    ] //8
    constructor() {}
    static get_prohibit(Class = '') {
        let target
        switch (Class) {
            case 'All':
                target = this.prohibitAll
                break
            case 'Num':
                target = this.prohibitNum
                break
            case 'Symbol':
                target = this.prohibitSymbol
                break
            case 'ABC':
                target = this.prohibitABC
                break
            case 'Control':
                target = this.prohibitControl
                break
        }
        if (Class != '') {
            var resultIndexArr: any = []

            for (let one = 0; one < this.KeyIndexMatrix1.length; one++) {
                const element = this.KeyIndexMatrix1[one]
                for (let index2 = 0; index2 < target.length; index2++) {
                    if (target[index2] == element) {
                        resultIndexArr.push(one)
                    }
                }
            }
            console.log('KB61Prohibit_constructor', resultIndexArr)
            return resultIndexArr
        }
    }
}
