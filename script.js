function getArea() {
    const a = prompt('Enter radius');
    let radius = a*a
    //'Text'
    if(isNaN(a)){ //isNumber //isNaN = /true /false
       getArea()
    }else if(!isNaN(a)){
        return (Math.PI) * radius
    }else{
        console.log('Enter number!!!')
    }
}

// console.log(getArea())

// console.log(Number.isNaN(NaN));

// function getSqrt(number) {
//     let a = prompt('enter number');
//     let summ = 0
//     if(!isNaN(a)){
//         return Math.sqrt(a)
//      }
//     else if(isNaN(a)){ //isNumber //isNaN = /true /false
//         alert('Повинно бути числове значення.')
//         getSqrt()
//      }else if(a<0){
//         console.log('Введіть додатнє значення')
//      }
//      else{
//          console.log('Будь ласка, введіть число')
//      }

// }
// console.log(getSqrt())

const MyMath2 = {
    pi() {
        console.log(Math.PI)
    },
    pow(number, degree) {
        if (number == undefined || degree == undefined) {
            console.log('введіть число')
        }
        else if (isNaN(number) || isNaN(degree)) {
            console.log('mistake')
        }
        else {
            console.log(Math.pow(number, degree))
        }
    },
    abs(number) {
        if (isNaN(number)) {
            console.log('mistake')
        } else
            console.log(Math.abs(number))
    },
    min2() {
        if (isNaN(...arguments)) {
            console.log('mistake')
        } else {
            return console.log(Math.min(...arguments))
        }
    },
    max2() {
        if (isNaN(...arguments)) {
            console.log('mistake')
        } else {
            return console.log(Math.max(...arguments))
        }
    },
}
MyMath2.pow('1','asd')

MyMath2.pi()
MyMath2.pow(4, 2)
MyMath2.abs(-5)
MyMath2.min2(10, 20, 40)
MyMath2.max2(20,30,40)
