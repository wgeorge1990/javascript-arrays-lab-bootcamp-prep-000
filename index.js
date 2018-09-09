var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
}

function destructivelyPrependKitten(name){
  kittens.splice(2,1,(name))
  return kittens
}
