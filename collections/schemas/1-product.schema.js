/**
 * A product is a claimeable reward for competing in GG Project. To claim this product a player needs to have
 * a sufficient amount of points
 */
Schemas.Product = new SimpleSchema({
    name: {
        type: String,
        label: "Name (ex: 'Battlefield 4')"
    },
    categories: {
        type: [String],
        label: "Categories array (ex: ['FPS', 'Action'])"
    },
    shortDescription: {
        type: String,
        label: "Short description of the product (ex:'The best game ever')"
    },
    longDescription: {
        type: String,
        label: "Long description used on the product's detail view (ex: 'Furthermore, this game has multiplayer')",
        optional: true
    },
    imageUrl: {
        type: String,
        label: "Image URL of the product (ex: 'example.com/battelfield4_cover.png')"
    },
    videoUrl: {
        type: String,
        label: "Option YouTube trailer of the product (ex: 'https://www.youtube.com/embed/cC2bsG4vVG4')",
        optional: true
    },
    points: {
        type: Number,
        label: "Necessary points to claim this product as a reward"
    }
});