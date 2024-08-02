const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
        'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'
      ],
      [
        'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
        'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
      ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
    }
  }
const Players1 = game.players[0]
// console.log(Players1)
const players2 = game.players[1]
let gk = Players1[0]
const fieldPlayers = Players1.slice(1)
const allPlayers = Players1.concat(players2);
const players1Final = Players1.concat(["Thiago", "Coutinho", "Perisic"])

let team1Odds = game.odds.team1
let xOdds = game.odds.x
let team2Odds = game.odds.team2

function printGoals(...player)/*الجزء دا عملت عليه سيرش */{
    let numberOfgoals = player.length
    player.forEach(item => {console.log(`${player} -> ${numberOfgoals} goals`)})
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
game.scored.forEach(player => printGoals(player));

let winner = game.odds.team1 < game.odds.team2 ? game.team1 : game.team2;
console.log(`${winner} is more likely to win.`)

game.scored.map((players, i) => console.log(`${i + 1}: ${players}`))

console.log(`Odd of victory ${game.team1}: ${team1Odds}`);
console.log(`Odd of draw: ${xOdds}`);
console.log(`Odd of victory ${game.team2}: ${team2Odds}`);