// 1. створити три map-а у першому {'виробник':'назва продукту'}, у другому {'вартість':'виробник'}, у третьому {'час доставки':'виробник'}
// 2. вивести в об'єкт товар із найменшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
// 3. вивести в об'єкт товар із найменшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}
// 4. вивести в об'єкт товар із найбільшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
// 5. вивести в об'єкт товар із найбільшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}


let map1 = new Map([["V" , "p"],["VV" , "pp"],["VVV" , "ppp"]]);
let map2 = new Map([[1 , "V"], [2 , "VV"], [3, "VVV"]]);
let map3 = new Map([[259200, "V"],[432000, "VV"], [86400, "VVV"]]);

let highest_price = Math.max(...map2.keys());
//виробник з найбільшою ціною
let highest_price_manufacturer = map2.get(highest_price);

let lower_price = Math.min(...map2.keys());
//виробник з lower ціною
let lower_price_manufacturer = map2.get(lower_price);

//product with highest price
let h_price_prod = map1.get(highest_price_manufacturer);

// product with lower price
let l_price_prod = map1.get(lower_price_manufacturer);

// найбільший час доставки
let time_deliv_h
let time_deliv_l
for (let i of map3){
    for(let j of i){
        if (j == highest_price_manufacturer){
            time_deliv_h = i[0];
        }
        if (j == lower_price_manufacturer){
            time_deliv_l = i[0];
        }
    }
}


let highest_time = Math.max(...map3.keys());
let lower_time = Math.min(...map3.keys());
let highest_time_manufacturer = map3.get(highest_time);
let lower_time_manufacturer = map3.get(lower_time);
let h_time_prod = map1.get(highest_time_manufacturer);
let l_time_prod = map1.get(lower_time_manufacturer);

let price_h
let price_l
for (let i of map2){
    for(let j of i){
        if (j == highest_time_manufacturer){
            price_h = i[0];
        }
        if (j == lower_time_manufacturer){
            price_l = i[0];
        }
    }
}

let obj1 = {}
obj1[h_price_prod] = highest_price + " " + highest_price_manufacturer + " " + time_deliv_h
console.log(obj1)
let obj2 = {}
obj2[l_price_prod] = lower_price + " " + lower_price_manufacturer + " " + time_deliv_l
console.log(obj2)
let obj3 = {}
obj3[h_time_prod] = price_h + " " + highest_time_manufacturer + " " + highest_time
console.log(obj3)
let obj4 = {}
obj4[l_time_prod] = price_l + " " + lower_time_manufacturer + " " + lower_time
console.log(obj4)

