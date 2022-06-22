
const data = {
    names: ["justin","jane","joe"]
}
class GiftExchange {
    static async pairs(names){
        if (names.length % 2 != 0){
            console.error("The number of names is an odd number");
        }
        
    }
    static async traditional(){

    }
}
module.exports = GiftExchange