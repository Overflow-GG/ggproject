/**
 * A match is were players gather together to compete within each other to win awards (points that can be later exchanged for products)
 */
Schemas.Match = new SimpleSchema({
    game: {
        type: Schemas.Game,
        label: "A Game where the players want to compete on"
    },
    status: {
        type: String,
        label: "Current status of the match"
    },
    fee: {
        type: Number,
        label: "The cost in dollars of joining this match"
    },
    players: {
        type: [Schemas.Player],
        label: "An array of players involved in the match"
    },
    awards: {
        type: [Number],
        label: "An array that contains the points to be awarded for the 1st, 2nd, 3th, etc, positions at the end of the match"
    },
    messages: {
        type: [Schemas.UserMessage],
        label: "Players messages of the match's chat"
    }
})