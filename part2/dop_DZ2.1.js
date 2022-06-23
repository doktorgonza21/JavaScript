//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2



function rez(kvadrat) {
    for (let kv = 1; kv <= kvadrat; kv++) {
        console.log(2 ** kv)
    } 
}

rez(10)