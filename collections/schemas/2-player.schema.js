/**
 * A player is a derived from an Account that participates in match
 */
Schemas.Player = new SimpleSchema({
    accountId: {
        type: String,
        label: "ID of the account that created the message"
    },
    username: {
        type: String,
        label: "Username of the account that created the message"
    },
    avatarUrl: {
        type: String,
        label: "URL of the associated Account's avatar image"
    }
});