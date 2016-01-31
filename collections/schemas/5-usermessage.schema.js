/**
 * A chat's message
 */
Schemas.UserMessage = new SimpleSchema({
    accountId: {
        type: String,
        label: "ID of the account that created the message"
    },
    username: {
        type: String,
        label: "Username of the account that created the message"
    },
    message: {
        type: String,
        label: "Text of the message"
    }
});