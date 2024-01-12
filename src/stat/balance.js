const balance = (arr) => {
    let result = 0
    arr.map( (item) => item.map( (itemElement) => 
    (itemElement[0] + itemElement[1])  >= 21 ? result += 1 : 0 ))
    return result
    }

export default balance