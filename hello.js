let data = [
    ["the", "red", "igloo", "d"],
    ["1", "2", "3", "4"],
    ["one", "two", "three", "four"]
]

let newdata = data.map(item=>item.reduce((a,i)=>`${a} ${i}`))

console.log(newdata)
console.log(data)