function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [
    { 
        name: "cupon1",
        discount: 15
    },
    { 
        name: "cupon2",
        discount: 30
    },
    { 
        name: "cupon3",
        discount: 25
    }    
];

function onClickButtonPriceDiscount(){
    // const priceValue = document.getElementById("InputPrice").value;
    // const discountvalue = document.getElementById("InputDiscount").value;

    // const precioConDescuento = calcularPrecioConDescuento(priceValue,discountvalue);

    // const resultP = document.getElementById("ResultP");
    // resultP.innerText = "El precio con descuento es $" + precioConDescuento;
    
    const priceValue = document.getElementById("InputPrice").value;
    const couponValue = document.getElementById("InputCoupon").value;

    let descuento;
    
    
    // switch(couponValue){
        //     case coupons[0]: //cupon1
        //         descuento = 15;
        //     break;
        //     case coupons[1]: //cupon2
        //         descuento = 30;
        //     break;
        //     case coupons[2]: //cupon3
        //         descuento = 25;
        //     break;
        //     }    
        
        // if(!coupons.includes(couponValue)){
        //     alert("El cupon " + couponValue + " no es válido");
        // }else if(couponValue === "cupon1"){
        //     descuento = 15;
        // }else if(couponValue === "cupon2"){
        //     descuento = 30;
        // }else if(couponValue === "cupon3"){
        //     descuento = 25;
        // }
        console.log("paso 1");
        const isCouponValueValid = function (cupon) {
            console.log("---" + cupon.name);
            console.log("***" + couponValue);
            console.log("///" + cupon.name === couponValue);

            return cupon.name === couponValue;
        }
        console.log("paso 2");
        const userCoupon = coupons.find(isCouponValueValid);
        console.log("-----" + userCoupon);
        console.log("paso 3");
        console.log("-----" + !userCoupon);
        
        // if(!userCoupon){   
        //     console.log("paso 4");         
        //     alert("El cupon " + couponValue + " no es válido");
        // }else{
        //     console.log("paso 5");
        //     const descuento = userCoupon.discount;
        //     const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

        //     const resultP = document.getElementById("ResultP");
        //     resultP.innerText = "El precio con descuento son: $"+precioConDescuento;

        // }

        if(userCoupon){   
            console.log("paso 5");
            const descuento = userCoupon.discount;
            const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con descuento son: $"+precioConDescuento;
            
        }else{
            console.log("paso 4");         
            alert("El cupon " + couponValue + " no es válido");

        }
        console.log("paso 6");

    //     const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        
    //     const resultP = document.getElementById("ResultP");
    // resultP.innerText = "El precio con descuento son: $"+precioConDescuento;
}
