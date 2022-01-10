

function gameObject(){
    const game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson' : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1 
                },
                'Reggie Evans' : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez' : {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee' : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry' : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien' : {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },
                'Bismak Biyombo' : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10 
                },
                'DeSagna Diop' : {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon' : {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },
                'Brendan Haywood' : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12 
                }                                                        
            }
        }
    }
    return game
}




function homeTeam(){
    return gameObject().home
}

function awayTeam(){
    return gameObject().away
}

function teamsArray(){
    return Object.values(gameObject())
}

function playersObject(){
   return Object.assign({}, homeTeam().players, awayTeam().players)

    // ____DRAFT____   
    // const game = gameObject()
    // const homePlayers = game.home.players
    // const awayPlayers = game.away.players

    // const allPlayers = Object.assign(homePlayers, awayPlayers)
    // const allPlayers = {...homePlayers, ...awayPlayers}
}


function numPointsScored(nameInput) {
    return playersObject()[nameInput].points
   
    // ___THIRD DRAFT____
    // const playerArrays = Object.entries(playersObject())
    // const player = playerArrays.find(playerArray => playerArray[0] === nameInput)
    // return player[1].points

    // ___SECOND DRAFT____
    // for(const playerName in playersObject()){
    //     if(playerName === nameInput){
    //         return players()[playerName].points
    //     }
    // }

    // ___FIRST DRAFT____
    // for (let gameKey in game) {   
    //     let teamObj = game[gameKey]
    //     let playersObj = teamObj.players
    //     for (let playerKey in playersObj) {  
    //         if (playerKey === nameInput) {
    //             return playersObj[playerKey].points
    //         }
    //     }
    // }
}

function teamNames(){
    return teamsArray().map(teamArray => {
        return teamArray.teamName})
}

function shoeSize(inputName){
    return playersObject()[inputName].shoe

}

function playerStats(inputName){
    return playersObject()[inputName]
}

function teamColors(inputName){
    const team = teamsArray().find(teamArray => teamArray.teamName === inputName)
    return team.colors
}

function playerNumbers(inputName){
    const team = teamsArray().find(teamArray => teamArray.teamName === inputName)
    const playersStats = Object.values(team.players)
    return playersStats.map(playerStat => {
        return playerStat.number
    })
}


function largestShoePlayer(){
    const playersNameAndStats = Object.entries(playersObject())
    const shoeSizes = playersNameAndStats.map(player => player[1].shoe)
    const largestSize = Math.max(...shoeSizes)
    const locationOfLargest = shoeSizes.indexOf(largestSize)

    return playersNameAndStats[locationOfLargest][0]
}


function bigShoeRebounds(){
    return playersObject()[largestShoePlayer()].rebounds
}
 

 function playerWithLongestName(){
    const playersNameAndStats = Object.entries(playersObject())
    const players = playersNameAndStats.map(player => player[0])
    const longest = players.reduce((longName,nextLongest) => {
        return longName.length > nextLongest.length ? longName : nextLongest;
        }
    )
    return longest
 }

// function mostPointsScored(){
// }
// function winningTeam(){
// }
// function doesLongNameStealATon(){
// }

console.log('object of players:', playersObject())
console.log('points for Ben Gordon:', numPointsScored("Ben Gordon"))
console.log('player stats for Ben Gordon:', playerStats("Ben Gordon"))
console.log('shoe size for Ben Gordon:', shoeSize('Ben Gordon'))
console.log('team names:', teamNames())
console.log('team colors for Charlotte Hornets:', teamColors("Charlotte Hornets"))
console.log('Brooklyn Nets player numbers:', playerNumbers("Brooklyn Nets"))
console.log('Player\'s rebounds with biggest shoe size:', bigShoeRebounds())
console.log(playerWithLongestName())