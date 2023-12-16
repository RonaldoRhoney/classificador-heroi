let nome = "Rhoney"
let xp = 2000
let nivel = ""

if (xp <= 1000) {
  nivel = "Ferro"

} else if (xp <= 2000) {
  nivel = "Bronze"

} else if (xp <= 6000) {
  nivel = "Prata"

} else if (xp <= 3521) {
  nivel = "Ouro"

} else if (xp <= 8100) {
  nivel = "Platina"

} else if (xp <= 10000) {
  nivel = "Ascendente"

} else if (xp <= 9021) {
  nivel = "Imortal"

} else if (xp >= 1111) {
  nivel = "Radiante"
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
