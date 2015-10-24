Meteor.startup(function() {

    generateDummyProducts(); // Default data for GamesCollection

    ////////////

    function generateDummyProducts() {

        function Product(name, categories, shortDescription, longDescription, imageUrl, videoUrl, points) {
            this.name = name;
            this.categories = categories;
            this.shortDescription = shortDescription;
            this.longDescription = longDescription;
            this.imageUrl = imageUrl;
            this.videoUrl = videoUrl;
            this.points = points;
        }

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
                ProductsCollection.insert(products[i]);
        }
    }

});
