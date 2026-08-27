function getOwnProps(obj){
    for (let prop in obj){
        if(obj.hasOwnProperty(prop) && (typeof obj[prop] !== 'function')){
            console.log(prop);
        }
        }

    }
console.log(getOwnProps(ship))
