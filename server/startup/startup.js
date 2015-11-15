Meteor.startup(function() {

    generateDummyProducts(); // Default data for ProductsCollection
    generateDummyGames(); // Default data for GamesCollection

    ////////////

    /**
     * A product is a claimeable reward for competing in GG Project. To claim this product a player needs to have
     * a sufficient amount of points
     * @param {String}          name                Name (ex: 'Battlefield 4')
     * @param {Array<String>}   categories          Categories array (ex: ['FPS', 'Action'])
     * @param {String}          shortDescription    Short description of the product (ex:'The best game ever')
     * @param {String}          longDescription     Long description used on the product's detail view (ex: 'Furthermore, this game has multiplayer')
     * @param {String}          imageUrl            Image URL of the product (ex: 'example.com/battelfield4_cover.png')
     * @param {String}          videoUrl            Option YouTube trailer of the product (ex: 'https://www.youtube.com/embed/cC2bsG4vVG4')
     * @param {Number}          points              Necessary points to claim this product as a reward
     */
    function Product(name, categories, shortDescription, longDescription, imageUrl, videoUrl, points) {
        this.name = name;
        this.categories = categories;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
        this.points = points;
    }

    /**
     * A Game is a Product that can have matchs
     * @prototype Product
     * @param {Nymber}          slots            Max number of concurrent players in a match of this game
     * @param {Array<String>}   modes            An array of game modes for this game (ex: ['Team vs. Team' , 'Free for all', 'Knives only'])
     */
    function Game(name, categories, shortDescription, longDescription, imageUrl, videoUrl, points, slots, modes) {
        Product.call(this, name, categories, shortDescription, longDescription, imageUrl, videoUrl, points);

        this.slots = slots;
        this.modes = modes;
    }
    Game.prototype = new Product();

    /**
     * A chat's message
     * @param {String}          text                Text of the message
     * @param {String}          username            Username of the account that created the message
     * @param {String}          accountId           ID of the account that created the message
     */
    function Message(text, username, accountId) {
        this.text = text;
        this.username = username;
        this.accountId = accountId;
    }

    /**
     * A player is an Account that participates in match
     * @param {String}          accountId           ID of the Account associated with this player
     * @param {String}          username            Username of the associated Account
     * @param {String}          avatarUrl           URL of the associated Account's avatar image
     */
    function Player(accountId, username, avatarUrl) {
        this.accountId = accountId;
        this.username = username;
        this.avatarUrl = avatarUrl;
    }

    /**
     * A match is were players gather together to compete within each other to win awards (points that can be later exchanged for products)
     * @param {Game}            game                A Game (which is a Product) where the players want to compete on
     * @param {MatchStatus}     status              Current status of the match
     * @param {Number}          fee                 The cost in dollars of joining this match
     * @param {Array<Player>}   players             An array of players involved in the match
     * @param {Array<Number>}   awards              An array that contains the points to be awarded for the 1st, 2nd, 3th, etc, positions at the end of the match
     * @param {Array<Message>}  messages            Players messages of the match's chat
     */
    function Match(game, status, fee, players, awards, messages) {
        this.game = game;
        this.status = status;
        this.fee = fee;
        this.players = players;
        this.awards = awards;
        this.messages = messages;
    }

    function generateDummyProducts() {

        if (ProductsCollection.find().count() === 0) {

            var products = [
                new Product(
                    'Battlefield 4', ['FPS', 'Action', 'Multiplayer'],
                    'Battlefield 4 on PC, powered by the advanced technology of DICE’s proprietary Frostbite 3 engine, blurs the line between game and glory. With dynamic destructable environments, vehicular combat, and the chaos of all-out-war with 64 players, Battlefield 4 on PC is an unmatched interactive experience.',
                    'In addition to its hallmark multiplayer, Battlefield 4 features an intense, dramatic character-driven campaign that starts with the evacuation of American VIPs from Shanghai and follows your squad\'s struggle to find its way home.',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/b/a/battlefield-4-2d_1.png',
                    'https://www.youtube.com/embed/cC2bsG4vVG4',
                    2000
                ),
                new Product(
                    'XCOM', ['Turn-based strategy', 'Tactical', 'Strategy'],
                    'XCOM: Enemy Unknown will place you in control of a secret paramilitary organization called XCOM. As the XCOM commander, you will defend against a terrifying global alien invasion by managing resources, advancing technologies, and overseeing combat strategies and individual unit tactics.',
                    'The original XCOM is widely regarded as one of the best games ever made and has now been re-imagined by the strategy experts at Firaxis Games. XCOM: Enemy Unknown will expand on that legacy with an entirely new invasion story, enemies and technologies to fight aliens and defend Earth. ',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/x/c/xcom-enemy-unknown-2d.png',
                    'https://www.youtube.com/embed/tZdanb02280',
                    1000
                ),
                new Product(
                    'Metal Gear Solid V', ['Stealth', 'Open World', 'Story Rich'],
                    'Konami Digital Entertainment continues forth the ‘METAL GEAR SOLID V Experience’ with the latest chapter, METAL GEAR SOLID V: The Phantom Pain. Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.',
                    'Nine years after the events of MGSV: GROUND ZEROES and the fall of Mother Base, Snake a.k.a. Big Boss, awakens from a nine year coma. The year is 1984. The Cold War serves as the backdrop as nuclear weapons continue to shape a global crisis. Driven by revenge, Snake establishes a new private army and returns to the battlefield in pursuit of the shadow group, XOF.',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/m/e/metal_gear_solid_v_the_phantom_pain_8.png',
                    'https://www.youtube.com/embed/yfoPfF2u1to',
                    5000
                ),
                new Product(
                    'Grand Theft Auto V', ['Open World', 'Action', 'Multiplayer'],
                    'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
                    'Grand Theft Auto V for PC also includes Grand Theft Auto Online, with support for 30 players and two spectators. Grand Theft Auto Online for PC will include all existing gameplay upgrades and Rockstar-created content released since the launch of Grand Theft Auto Online, including Heists and Adversary modes.',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/g/t/gta-v-2d_2.png',
                    'https://www.youtube.com/embed/qoytS3930aY',
                    3000
                ),
                new Product(
                    'Borderlands 2 GOTY', ['FPS', 'Co-op', 'Action', 'RPG', 'Loot', 'Shooter'],
                    'A new era of shoot and loot is about to begin. Play as one of four new vault hunters facing off against a massive new world of creatures, psychos and the evil mastermind, Handsome Jack. Make new friends, arm them with a bazillion weapons and fight alongside them in 4 player co-op on a relentless quest for revenge and redemption across the undiscovered and unpredictable living planet.',
                    'Share your adventures with friends both online and via LAN. Borderlands 2 features a seamless system enabling you to drop in and drop out of a campaign without ever having to restart the game. On top of that you can even take your new gear from any game to any other! ',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/b/o/borderlands-2-goty-2d_2.png',
                    'https://www.youtube.com/embed/ZuMACYc_5XY',
                    1000
                ),
                new Product(
                    'Call of Duty Black Ops', ['Action', 'FPS', 'Zombies', 'Multiplayer', 'Shooter'],
                    'The biggest first-person action series of all time and the follow-up to last year’s blockbuster Call of Duty®: Modern Warfare 2 returns with Call of Duty®: Black Ops. Call of Duty®: Black Ops will take you behind enemy lines as a member of an elite special forces unit engaging in covert warfare, classified operations, and explosive conflicts across the globe. With access to exclusive weaponry and equipment, your actions will tip the balance during the most dangerous time period mankind has ever known.',
                    'An epic campaign and story that takes you to a variety of locations and conflicts all over the world where you will play as an elite Black Ops soldier in deniable operations where if you are caught, captured or killed, your country will disavow all knowledge of your existence. ',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/c/a/call-of-duty-black-ops--2d-box_2_1.png',
                    'https://www.youtube.com/embed/OtRnpC7ddv8',
                    4000
                ),
                new Product(
                    'Mad Max', ['Action', 'Open World', 'Post-apocalyptic', 'Survival'],
                    'Become Mad Max, the lone warrior in a savage post-apocalyptic world where cars are the key to survival. In this action-packed, open world, third person action game, you must fight to stay alive in The Wasteland, using brutal on-ground and vehicular against vicious gangs of bandits. A reluctant hero with an instinct for survival, Max wants nothing more than to leave the madness behind and find solace in the storied “Plains of Silence.” Players are challenged with treacherous missions as they scavenge the dangerous landscape for supplies to build the ultimate combat vehicle.',
                    '',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/m/a/mad-max.png',
                    'https://www.youtube.com/embed/9hDPmTvqob0',
                    3000
                ),
                new Product(
                    'PayDay 2', ['Co-op', 'Action', 'FPS', 'Heist'],
                    'PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.',
                    'Up to four friends co-operate on the hits, and as the crew progresses the jobs become bigger, better and more rewarding. Along with earning more money and becoming a legendary criminal comes a new character customization and crafting system that lets crews build and customize their own guns and gear.',
                    'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/p/a/payday-2-2d.png',
                    'https://www.youtube.com/embed/Gb-_DKC6wc4',
                    2000
                )
            ];

            for (var i = 0; i < products.length; i++)
                ProductsCollection.insert(products[i], function(error, data) {
                    if (error) console.log("Error when inserting new product: " + error);
                });
        }
    }

    function generateDummyGames() {
        if (GamesCollection.find().count() === 0) {
            var games = [
                new Game(
                    'League of Legends', ['MOBA', 'Strategy', 'Competitive', 'Multiplayer'],
                    'League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.',
                    'Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.',
                    'img/opt/league-of-legends_opt.jpg',
                    'https://www.youtube.com/embed/cXZqfuJ9Zps',
                    0, 10, []
                ),
                new Game(
                    'Counter Strike: GO', ['FPS', 'Shooter', 'Team-based', 'Multiplayer'],
                    'Counter-Strike: Global Offensive (CS: GO) will expand upon the team-based action gameplay that it pioneered when it was launched 14 years ago.',
                    'CS: GO features new maps, characters, and weapons and delivers updated versions of the classic CS content (de_dust, etc.). In addition, CS: GO will introduce new gameplay modes, matchmaking, leader boards, and more.',
                    'img/opt/csgo_opt.jpg',
                    'https://www.youtube.com/embed/edYCtaNueQY',
                    1000, 16, []
                ),
                new Game(
                    'Dota 2', ['MOBA', 'Strategy', 'Competitive', 'Multiplayer'],
                    'Dota is a competitive game of action and strategy, played both professionally and casually by millions of passionate fans worldwide. Players pick from a pool of over a hundred heroes, forming two teams of five players. Radiant heroes then battle their Dire counterparts to control a gorgeous fantasy landscape, waging campaigns of cunning, stealth, and outright warfare.',
                    'Irresistibly colorful on the surface, Dota is a game of infinite depth and complexity. Every hero has an array of skills and abilities that combine with the skills of their allies in unexpected ways, to ensure that no game is ever remotely alike. This is one of the reasons that the Dota phenomenon has continued to grow. Originating as a fan-made Warcraft 3 modification, Dota was an instant underground hit. After coming to Valve, the original community developers have bridged the gap to a more inclusive audience, so that the rest of the world can experience the same core gameplay, but with the level of polish that only Valve can provide.',
                    'img/opt/dota-2_opt.jpg',
                    'https://www.youtube.com/embed/-cSFPIwMEq4',
                    0, 10, []
                )
            ];

            for (var i = 0; i < games.length; i++)
                GamesCollection.insert(games[i]);
        }
    }

});