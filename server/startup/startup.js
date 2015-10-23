Meteor.startup(function() {

    generateDummyProducts(); // Default data for GamesCollection

    ////////////

    function generateDummyProducts() {
        if (ProductsCollection.find().count() === 0) {
            var products = [{
                'name': 'Battlefield 4',
                'description': 'Battlefield 4 on PC, powered by the advanced technology of DICE’s proprietary Frostbite 3 engine, blurs the line between game and glory. With dynamic destructable environments, vehicular combat, and the chaos of all-out-war with 64 players, Battlefield 4 on PC is an unmatched interactive experience.',
                'genre': 'FPS',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/b/a/battlefield-4-2d_1.png'
            }, {
                'name': 'XCOM',
                'description': 'XCOM: Enemy Unknown will place you in control of a secret paramilitary organization called XCOM. As the XCOM commander, you will defend against a terrifying global alien invasion by managing resources, advancing technologies, and overseeing combat strategies and individual unit tactics.',
                'genre': 'Strategy',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/x/c/xcom-enemy-unknown-2d.png'
            }, {
                'name': 'Grand Theft Auto IV',
                'description': 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
                'genre': 'Sand Box',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/g/t/gta-v-2d_2.png'
            }, {
                'name': 'Metal Gear Solid V',
                'description': 'Konami Digital Entertainment continues forth the ‘METAL GEAR SOLID V Experience’ with the latest chapter, METAL GEAR SOLID V: The Phantom Pain. Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.',
                'genre': 'Stealth',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/m/e/metal_gear_solid_v_the_phantom_pain_8.png'
            }, {
                'name': 'Borderlands 2 GOTY',
                'description': 'A new era of shoot and loot is about to begin. Play as one of four new vault hunters facing off against a massive new world of creatures, psychos and the evil mastermind, Handsome Jack. Make new friends, arm them with a bazillion weapons and fight alongside them in 4 player co-op on a relentless quest for revenge and redemption across the undiscovered and unpredictable living planet.',
                'genre': 'FPS',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/b/o/borderlands-2-goty-2d_2.png'
            }, {
                'name': 'Call of Duty Black Ops',
                'description': 'The biggest first-person action series of all time and the follow-up to last year’s blockbuster Call of Duty®: Modern Warfare 2 returns with Call of Duty®: Black Ops. Call of Duty®: Black Ops will take you behind enemy lines as a member of an elite special forces unit engaging in covert warfare, classified operations, and explosive conflicts across the globe. With access to exclusive weaponry and equipment, your actions will tip the balance during the most dangerous time period mankind has ever known.',
                'genre': 'FPS',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/c/a/call-of-duty-black-ops--2d-box_2_1.png'
            }, {
                'name': 'PayDay 2',
                'description': 'PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.',
                'genre': 'FPS',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/p/a/payday-2-2d.png'
            }, {
                'name': 'Mad Max',
                'description': 'Become Mad Max, the lone warrior in a savage post-apocalyptic world where cars are the key to survival. In this action-packed, open world, third person action game, you must fight to stay alive in The Wasteland, using brutal on-ground and vehicular against vicious gangs of bandits. A reluctant hero with an instinct for survival, Max wants nothing more than to leave the madness behind and find solace in the storied “Plains of Silence.” Players are challenged with treacherous missions as they scavenge the dangerous landscape for supplies to build the ultimate combat vehicle.',
                'genre': 'RPG',
                'image_url': 'https://www.g2a.com/media/catalog/product/cache/0/small_image/242x344/170ec19af00183b5e0368529fc2daa2f/m/a/mad-max.png'
            }];
            for (var i = 0; i < products.length; i++)
                ProductsCollection.insert(products[i]);
        }
    }

});
