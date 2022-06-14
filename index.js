function myEach(collection, callback){
    return (turnArray(collection).forEach(element => callback(element)))
}

function myMap(collection, callback) {

    return (turnArray(collection).map(item=>callback(item)))
}
function myReduce(collection, callback, acc=0) {
    //console.log(callback)
    for (let item of turnArray(collection)) {
        console.log(item)
        acc += callback(item)
    }
    console.log(acc)
    return acc
}

function turnArray(collection) {
    if (!collection.length) {
        return (Object.values(collection))
    }
    else return collection
}