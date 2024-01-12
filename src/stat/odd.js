const odd = (arr) => {
    let result = 0
    arr.map( (item) => item.map( (itemElement) => 
    (itemElement[0] + itemElement[1]) % 2 !== 0 ? result += 1 : 0 ))
    return result
    }

export default odd