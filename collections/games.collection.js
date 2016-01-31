GamesCollection = new Mongo.Collection("games");
GamesCollection.attachSchema(Schemas.Game);