const numberSets = (arr) => {
    let result = 0
    arr.map( (item) => result += item.length)
    return result
}
export default numberSets