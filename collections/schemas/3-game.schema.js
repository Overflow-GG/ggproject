/**
 * A Game is a Product that can have matchs
 * Game extends Product
 */
Schemas.Game = new SimpleSchema([Schemas.Product, {
    slots: {
        type: Number,
        label: "Max number of concurrent players in a match of this game"
    },
    modes: {
        type: [String],
        label: "An array of game modes for this game (ex: ['Team vs. Team' , 'Free for all', 'Knives only'])"
    }
}]);