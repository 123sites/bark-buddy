const db = require('./connection');
const { User, Dog } = require('../models');

db.once('open', async () => {

    await User.deleteMany();

    await User.create([
        {
            "username": "Brian Kernighan",
            "email": "bkernighan@techfriends.dev",
            "password": "password01"
        },
        {
            "username": "Max Kanat-Alexander",
            "email": "mkanatalexander@techfriends.dev",
            "password": "password02"
        },
        {
            "username": "Why The Lucky Stiff",
            "email": "wtls@techfriends.dev",
            "password": "password03"
        },
        {
            "username": "Kent Beck",
            "email": "kbeck@techfriends.dev",
            "password": "password04"
        },
        {
            "username": "Edward V. Berard",
            "email": "evberard@techfriends.dev",
            "password": "password05"
        },
        {
            "username": "Alan Kay",
            "email": "akay@techfriends.dev",
            "password": "password06"
        },
        {
            "username": "C.A.R. Hoare",
            "email": "choare@techfriends.dev",
            "password": "password07"
        },
        {
            "username": "David Thomas",
            "email": "dthomas@techfriends.dev",
            "password": "password08"
        },
        {
            "username": "Donald Knuth",
            "email": "dknuth@techfriends.dev",
            "password": "password09"
        },
        {
            "username": "Lernantino",
            "email": "lernantino@techfriends.dev",
            "password": "password10"
        }
    ]);

    console.log('users seeded');

    await Dog.deleteMany();

    const dogs = await Dog.insertMany(
        [
            {
                "id": 64813384,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/louie-64813384/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Terrier",
                "breeds": {
                    "primary": "Terrier",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Small",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Louie",
                "description": "Ears for miles - seriously look at him! One up, one down - cutest thing ever!!\n\nLouis- a sweet approx....",
                "organization_animal_id": "2023408",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/1/?bust=1685644359&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/1/?bust=1685644359&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/1/?bust=1685644359&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/1/?bust=1685644359"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/2/?bust=1685644359&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/2/?bust=1685644359&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/2/?bust=1685644359&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/2/?bust=1685644359"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/3/?bust=1685644358&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/3/?bust=1685644358&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/3/?bust=1685644358&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/3/?bust=1685644358"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/4/?bust=1685644425&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/4/?bust=1685644425&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/4/?bust=1685644425&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/4/?bust=1685644425"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/5/?bust=1685644358&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/5/?bust=1685644358&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/5/?bust=1685644358&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/5/?bust=1685644358"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/6/?bust=1685644426&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/6/?bust=1685644426&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/6/?bust=1685644426&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/6/?bust=1685644426"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813384/1/?bust=1685644359",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-06-01T18:22:32+0000",
                "published_at": "2023-06-01T18:22:30+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64813384"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64796243,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/juniper-64796243/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Golden Retriever",
                "breeds": {
                    "primary": "Golden Retriever",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Baby",
                "gender": "Female",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Juniper",
                "description": "Introducing Juniper, affectionately known as Junie! This bright and playful 6-month-old Golden Retriever mix is eagerly awaiting to capture your...",
                "organization_animal_id": "2023404",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/1/?bust=1685550804&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/1/?bust=1685550804&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/1/?bust=1685550804&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/1/?bust=1685550804"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/2/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/2/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/2/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/2/?bust=1685550805"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/3/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/3/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/3/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/3/?bust=1685550805"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/4/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/4/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/4/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/4/?bust=1685550805"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/5/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/5/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/5/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/5/?bust=1685550805"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/6/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/6/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/6/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/6/?bust=1685550805"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64796243/1/?bust=1685550804",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-31T16:23:23+0000",
                "published_at": "2023-05-31T16:23:19+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64796243"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64788129,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/sadie-mae-64788129/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Hound",
                "breeds": {
                    "primary": "Hound",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Female",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": false
                },
                "tags": [],
                "name": "Sadie Mae",
                "description": "This momma has had a long tough road but is coming out the other side!\n\nShe was fabulous mom to...",
                "organization_animal_id": "2023018",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/1/?bust=1685485977&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/1/?bust=1685485977&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/1/?bust=1685485977&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/1/?bust=1685485977"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/2/?bust=1685485978&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/2/?bust=1685485978&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/2/?bust=1685485978&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/2/?bust=1685485978"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/3/?bust=1685485978&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/3/?bust=1685485978&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/3/?bust=1685485978&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/3/?bust=1685485978"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/4/?bust=1685485979&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/4/?bust=1685485979&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/4/?bust=1685485979&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/4/?bust=1685485979"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/5/?bust=1685485978&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/5/?bust=1685485978&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/5/?bust=1685485978&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/5/?bust=1685485978"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64788129/1/?bust=1685485977",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-30T22:22:55+0000",
                "published_at": "2023-05-30T22:22:53+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64788129"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64813385,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/tip-64813385/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Terrier",
                "breeds": {
                    "primary": "Terrier",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Small",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Tip",
                "description": "This little &amp;#34;&amp;#34;deer&amp;#34;&amp;#34; dog - he looks like a deer in some pictures and in person is TIP - a...",
                "organization_animal_id": "2023407",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/1/?bust=1685644353&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/1/?bust=1685644353&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/1/?bust=1685644353&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/1/?bust=1685644353"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/2/?bust=1685644353&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/2/?bust=1685644353&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/2/?bust=1685644353&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/2/?bust=1685644353"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/3/?bust=1685644353&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/3/?bust=1685644353&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/3/?bust=1685644353&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/3/?bust=1685644353"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/4/?bust=1685644355&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/4/?bust=1685644355&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/4/?bust=1685644355&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/4/?bust=1685644355"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/5/?bust=1685644356&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/5/?bust=1685644356&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/5/?bust=1685644356&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/5/?bust=1685644356"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/6/?bust=1685644355&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/6/?bust=1685644355&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/6/?bust=1685644355&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/6/?bust=1685644355"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64813385/1/?bust=1685644353",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-06-01T18:22:32+0000",
                "published_at": "2023-06-01T18:22:30+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64813385"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 59232113,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/frito-59232113/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Belgian Shepherd / Malinois",
                "breeds": {
                    "primary": "Belgian Shepherd / Malinois",
                    "secondary": null,
                    "mixed": false,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Frito",
                "description": "Frito was picked up as a stray, so we have no background information on him. Malinois are not a dog...",
                "organization_animal_id": "18878514",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/1/?bust=1685311793&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/1/?bust=1685311793&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/1/?bust=1685311793&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/1/?bust=1685311793"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/2/?bust=1685311793&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/2/?bust=1685311793&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/2/?bust=1685311793&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/2/?bust=1685311793"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/3/?bust=1685311795&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/3/?bust=1685311795&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/3/?bust=1685311795&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/3/?bust=1685311795"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232113/1/?bust=1685311793",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-12-22T01:46:38+0000",
                "published_at": "2022-12-22T01:46:36+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59232113"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 58059271,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/chandler-58059271/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [],
                "name": "Chandler",
                "description": "Chandler and his siblings were all turned into the pound when they were about 5 weeks old. Their mom did...",
                "organization_animal_id": "18613317",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/1/?bust=1685311937&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/1/?bust=1685311937&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/1/?bust=1685311937&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/1/?bust=1685311937"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/2/?bust=1685311874&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/2/?bust=1685311874&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/2/?bust=1685311874&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/2/?bust=1685311874"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/3/?bust=1685311876&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/3/?bust=1685311876&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/3/?bust=1685311876&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/3/?bust=1685311876"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58059271/1/?bust=1685311937",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-10-10T21:02:30+0000",
                "published_at": "2022-10-10T21:02:30+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/58059271"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 60413990,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/lucy-60413990/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Female",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Lucy",
                "description": "Lucy is believed to be a 1- to 2-year-old lab mix who was rescued from a hoarding situation where they...",
                "organization_animal_id": "19079889",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/1/?bust=1685311861&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/1/?bust=1685311861&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/1/?bust=1685311861&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/1/?bust=1685311861"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/2/?bust=1685311861&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/2/?bust=1685311861&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/2/?bust=1685311861&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/2/?bust=1685311861"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/3/?bust=1685311861&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/3/?bust=1685311861&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/3/?bust=1685311861&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/3/?bust=1685311861"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413990/1/?bust=1685311861",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-03-04T07:36:42+0000",
                "published_at": "2023-03-04T07:36:40+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/60413990"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 63351297,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/casey-63351297/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Shepherd",
                "breeds": {
                    "primary": "Shepherd",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": null,
                    "cats": null
                },
                "tags": [],
                "name": "Casey",
                "description": "Somehow Casey and his littermates ended up at the pound which is where we got them from. He is very...",
                "organization_animal_id": "19215486",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/1/?bust=1685311854&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/1/?bust=1685311854&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/1/?bust=1685311854&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/1/?bust=1685311854"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/2/?bust=1685311854&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/2/?bust=1685311854&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/2/?bust=1685311854&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/2/?bust=1685311854"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/3/?bust=1685311855&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/3/?bust=1685311855&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/3/?bust=1685311855&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/3/?bust=1685311855"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351297/1/?bust=1685311854",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-21T17:30:29+0000",
                "published_at": "2023-04-24T21:48:20+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/63351297"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 63351298,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/rory-63351298/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Shepherd",
                "breeds": {
                    "primary": "Shepherd",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": null,
                    "cats": null
                },
                "tags": [],
                "name": "Rory",
                "description": "Somehow Rory and his littermates ended up at the pound which is where we got them from. He is very...",
                "organization_animal_id": "19215501",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/1/?bust=1685311862&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/1/?bust=1685311862&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/1/?bust=1685311862&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/1/?bust=1685311862"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/2/?bust=1685311924&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/2/?bust=1685311924&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/2/?bust=1685311924&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/2/?bust=1685311924"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/3/?bust=1685311863&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/3/?bust=1685311863&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/3/?bust=1685311863&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/3/?bust=1685311863"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351298/1/?bust=1685311862",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-04-24T21:48:22+0000",
                "published_at": "2023-04-24T21:48:20+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/63351298"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 64741555,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/pumpkin-spice-local-64741555/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Poodle",
                "breeds": {
                    "primary": "Poodle",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Baby",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [],
                "name": "Pumpkin Spice - Local",
                "description": "Lookee!! Baby poodle mixes right in New England waiting for you. BUT... we don&amp;#39;t know who daddy is so we...",
                "organization_animal_id": "2023334",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/1/?bust=1685673263&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/1/?bust=1685673263&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/1/?bust=1685673263&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/1/?bust=1685673263"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/2/?bust=1685673264&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/2/?bust=1685673264&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/2/?bust=1685673264&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/2/?bust=1685673264"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/3/?bust=1685673324&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/3/?bust=1685673324&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/3/?bust=1685673324&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/3/?bust=1685673324"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/4/?bust=1685673264&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/4/?bust=1685673264&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/4/?bust=1685673264&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/4/?bust=1685673264"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/5/?bust=1685673264&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/5/?bust=1685673264&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/5/?bust=1685673264&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/5/?bust=1685673264"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/6/?bust=1685673260&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/6/?bust=1685673260&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/6/?bust=1685673260&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/6/?bust=1685673260"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64741555/1/?bust=1685673263",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-26T02:21:31+0000",
                "published_at": "2023-05-26T02:21:28+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64741555"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64764599,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/simone-64764599/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Australian Shepherd",
                "breeds": {
                    "primary": "Australian Shepherd",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Baby",
                "gender": "Female",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Simone",
                "description": "Look at this precious face!!\nThis is Simone, a typical puppy who just loves to play. Her favorite toys are...",
                "organization_animal_id": "2023397",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/1/?bust=1685493121&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/1/?bust=1685493121&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/1/?bust=1685493121&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/1/?bust=1685493121"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/2/?bust=1685320424&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/2/?bust=1685320424&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/2/?bust=1685320424&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/2/?bust=1685320424"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/3/?bust=1685320352&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/3/?bust=1685320352&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/3/?bust=1685320352&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/3/?bust=1685320352"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/4/?bust=1685320353&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/4/?bust=1685320353&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/4/?bust=1685320353&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/4/?bust=1685320353"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/5/?bust=1685493121&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/5/?bust=1685493121&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/5/?bust=1685493121&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/5/?bust=1685493121"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/6/?bust=1685320353&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/6/?bust=1685320353&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/6/?bust=1685320353&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/6/?bust=1685320353"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764599/1/?bust=1685493121",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-28T04:22:34+0000",
                "published_at": "2023-05-28T04:22:32+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64764599"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64753880,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/woody-woof-64753880/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Terrier",
                "breeds": {
                    "primary": "Terrier",
                    "secondary": null,
                    "mixed": false,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Woody Woof",
                "description": "Meet Woody Woof. \n \nWoody Woof is a fun, playful boy. He is very social with other dogs and loves playing...",
                "organization_animal_id": "2023389",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/1/?bust=1685170927&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/1/?bust=1685170927&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/1/?bust=1685170927&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/1/?bust=1685170927"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/2/?bust=1685170936&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/2/?bust=1685170936&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/2/?bust=1685170936&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/2/?bust=1685170936"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/3/?bust=1685170930&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/3/?bust=1685170930&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/3/?bust=1685170930&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/3/?bust=1685170930"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/4/?bust=1685171017&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/4/?bust=1685171017&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/4/?bust=1685171017&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/4/?bust=1685171017"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/5/?bust=1685171156&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/5/?bust=1685171156&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/5/?bust=1685171156&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/5/?bust=1685171156"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64753880/1/?bust=1685170927",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-27T02:34:22+0000",
                "published_at": "2023-05-27T02:34:19+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64753880"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64789842,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/ben-nevis-special-needs-64789842/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"West Highland White Terrier / Westie",
                "breeds": {
                    "primary": "West Highland White Terrier / Westie",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Ben Nevis -Special Needs",
                "description": "Ben Nevis is named for the highest peak in the West Highlands of Scotland. The name means &amp;#39;Cloud Mountain&amp;#39; and,...",
                "organization_animal_id": "2023361",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/1/?bust=1685493123&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/1/?bust=1685493123&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/1/?bust=1685493123&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/1/?bust=1685493123"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/2/?bust=1685493123&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/2/?bust=1685493123&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/2/?bust=1685493123&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/2/?bust=1685493123"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/3/?bust=1685493121&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/3/?bust=1685493121&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/3/?bust=1685493121&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/3/?bust=1685493121"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/4/?bust=1685493196&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/4/?bust=1685493196&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/4/?bust=1685493196&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/4/?bust=1685493196"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/5/?bust=1685493123&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/5/?bust=1685493123&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/5/?bust=1685493123&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/5/?bust=1685493123"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/6/?bust=1685493123&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/6/?bust=1685493123&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/6/?bust=1685493123&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/6/?bust=1685493123"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64789842/1/?bust=1685493123",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-31T00:22:01+0000",
                "published_at": "2023-05-31T00:21:57+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64789842"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64806310,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/pepper-boy-64806310/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Scottish Terrier",
                "breeds": {
                    "primary": "Scottish Terrier",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Small",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": false,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Pepper Boy",
                "description": "Pepper&amp;#39;s home of origin surrendered him to a high kill shelter in Memphis. His foster mom took one look and...",
                "organization_animal_id": "2023406",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/1/?bust=1685586820&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/1/?bust=1685586820&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/1/?bust=1685586820&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/1/?bust=1685586820"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/2/?bust=1685586819&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/2/?bust=1685586819&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/2/?bust=1685586819&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/2/?bust=1685586819"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/3/?bust=1685586818&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/3/?bust=1685586818&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/3/?bust=1685586818&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/3/?bust=1685586818"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/4/?bust=1685586822&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/4/?bust=1685586822&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/4/?bust=1685586822&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/4/?bust=1685586822"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806310/1/?bust=1685586820",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-06-01T02:23:34+0000",
                "published_at": "2023-06-01T02:23:31+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64806310"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64764600,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/lee-lee-64764600/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Pit Bull Terrier",
                "breeds": {
                    "primary": "Pit Bull Terrier",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Baby",
                "gender": "Female",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Lee Lee",
                "description": "As you can see at first glance, Lee Lee is a beautiful pup. She just beams when given attention.\n\nShe&amp;#39;s...",
                "organization_animal_id": "2023393",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/1/?bust=1685248356&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/1/?bust=1685248356&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/1/?bust=1685248356&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/1/?bust=1685248356"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/2/?bust=1685248358&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/2/?bust=1685248358&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/2/?bust=1685248358&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/2/?bust=1685248358"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/3/?bust=1685248358&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/3/?bust=1685248358&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/3/?bust=1685248358&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/3/?bust=1685248358"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/4/?bust=1685248359&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/4/?bust=1685248359&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/4/?bust=1685248359&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/4/?bust=1685248359"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/5/?bust=1685248359&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/5/?bust=1685248359&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/5/?bust=1685248359&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/5/?bust=1685248359"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64764600/1/?bust=1685248356",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-28T04:22:34+0000",
                "published_at": "2023-05-28T04:22:32+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64764600"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 60519558,
                "organization_id": "AZ01",
                "url": "https://www.petfinder.com/dog/whiskey-60519558/az/phoenix/citizens-for-north-phoenix-strays-az01/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Dachshund",
                "breeds": {
                    "primary": "Dachshund",
                    "secondary": "Chihuahua",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": "Yellow / Tan / Blond / Fawn",
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Small",
                "coat": "Medium",
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [
                    "Affectionate",
                    "Friendly"
                ],
                "name": "WHISKEY",
                "description": "If you are interested in this dog please email directly to CNPSrescue@gmail.com (No phone calls. No text messages please)\n \nWhiskey...",
                "organization_animal_id": null,
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/2/?bust=1678062481&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/2/?bust=1678062481&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/2/?bust=1678062481&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/2/?bust=1678062481"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/1/?bust=1678062480&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/1/?bust=1678062480&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/1/?bust=1678062480&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/1/?bust=1678062480"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/3/?bust=1678062482&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/3/?bust=1678062482&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/3/?bust=1678062482&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/3/?bust=1678062482"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/4/?bust=1678062483&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/4/?bust=1678062483&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/4/?bust=1678062483&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/4/?bust=1678062483"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60519558/2/?bust=1678062481",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-03-06T00:28:08+0000",
                "published_at": "2023-03-06T00:28:04+0000",
                "distance": null,
                "contact": {
                    "email": "CNPSrescue@gmail.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Phoenix",
                        "state": "AZ",
                        "postcode": "85027",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/60519558"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az01"
                    }
                }
            },
            {
                "id": 58776579,
                "organization_id": "AZ01",
                "url": "https://www.petfinder.com/dog/archie-58776579/az/phoenix/citizens-for-north-phoenix-strays-az01/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Tibetan Spaniel",
                "breeds": {
                    "primary": "Tibetan Spaniel",
                    "secondary": "Dachshund",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": "Tricolor (Brown, Black, & White)",
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Small",
                "coat": "Medium",
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "ARCHIE ",
                "description": "If you are interested in this dog please email directly to CNPSrescue@gmail.com (No phone calls. No text messages please)\n\nArchie...",
                "organization_animal_id": null,
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/1/?bust=1667767241&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/1/?bust=1667767241&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/1/?bust=1667767241&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/1/?bust=1667767241"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/2/?bust=1667767242&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/2/?bust=1667767242&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/2/?bust=1667767242&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/2/?bust=1667767242"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/3/?bust=1667767243&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/3/?bust=1667767243&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/3/?bust=1667767243&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/3/?bust=1667767243"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/4/?bust=1667767244&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/4/?bust=1667767244&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/4/?bust=1667767244&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/4/?bust=1667767244"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/5/?bust=1667767244&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/5/?bust=1667767244&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/5/?bust=1667767244&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/5/?bust=1667767244"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/6/?bust=1667767245&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/6/?bust=1667767245&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/6/?bust=1667767245&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/6/?bust=1667767245"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776579/1/?bust=1667767241",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-11-06T20:40:49+0000",
                "published_at": "2022-11-06T20:40:47+0000",
                "distance": null,
                "contact": {
                    "email": "CNPSrescue@gmail.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Phoenix",
                        "state": "AZ",
                        "postcode": "85027",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/58776579"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az01"
                    }
                }
            },
            {
                "id": 63351173,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/cohen-63351173/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Shepherd",
                "breeds": {
                    "primary": "Shepherd",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": null,
                    "cats": null
                },
                "tags": [],
                "name": "Cohen",
                "description": "Somehow Cohen and his littermates ended up at the pound which is where we got them from. He is very...",
                "organization_animal_id": "19215356",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/1/?bust=1685311779&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/1/?bust=1685311779&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/1/?bust=1685311779&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/1/?bust=1685311779"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/2/?bust=1685311780&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/2/?bust=1685311780&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/2/?bust=1685311780&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/2/?bust=1685311780"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/3/?bust=1685311783&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/3/?bust=1685311783&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/3/?bust=1685311783&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/3/?bust=1685311783"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63351173/1/?bust=1685311779",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-04-24T21:32:50+0000",
                "published_at": "2023-04-24T21:32:48+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/63351173"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 59467587,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/staple-aka-baby-59467587/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Female",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": true
                },
                "tags": [],
                "name": "Staple AKA Baby",
                "description": "Staple came out of hoarding situation so she can be a little shy with strangers to start with, she is...",
                "organization_animal_id": "18947195",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/1/?bust=1685311831&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/1/?bust=1685311831&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/1/?bust=1685311831&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/1/?bust=1685311831"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/2/?bust=1685311830&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/2/?bust=1685311830&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/2/?bust=1685311830&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/2/?bust=1685311830"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/3/?bust=1685311831&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/3/?bust=1685311831&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/3/?bust=1685311831&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/3/?bust=1685311831"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59467587/1/?bust=1685311831",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-06-03T17:53:07+0000",
                "published_at": "2023-01-15T05:23:07+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59467587"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 59232108,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/note-pad-59232108/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Note Pad",
                "description": "Note Pad came out of hoarding situation so he can be a little shy with strangers to start with he...",
                "organization_animal_id": "18878581",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/1/?bust=1685311848&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/1/?bust=1685311848&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/1/?bust=1685311848&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/1/?bust=1685311848"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/2/?bust=1685311921&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/2/?bust=1685311921&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/2/?bust=1685311921&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/2/?bust=1685311921"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/3/?bust=1685311848&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/3/?bust=1685311848&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/3/?bust=1685311848&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/3/?bust=1685311848"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232108/1/?bust=1685311848",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-12-22T01:46:38+0000",
                "published_at": "2022-12-22T01:46:36+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59232108"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 59232114,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/marker-59232114/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Marker",
                "description": "Marker came out of hoarding situation so he can be a little shy with strangers to start with he is...",
                "organization_animal_id": "18878573",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/1/?bust=1685311838&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/1/?bust=1685311838&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/1/?bust=1685311838&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/1/?bust=1685311838"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/2/?bust=1685311839&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/2/?bust=1685311839&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/2/?bust=1685311839&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/2/?bust=1685311839"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/3/?bust=1685311841&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/3/?bust=1685311841&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/3/?bust=1685311841&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/3/?bust=1685311841"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232114/1/?bust=1685311838",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-12-22T01:46:38+0000",
                "published_at": "2022-12-22T01:46:36+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59232114"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 54744548,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/sandy-54744548/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Rottweiler",
                "breeds": {
                    "primary": "Rottweiler",
                    "secondary": "Labrador Retriever",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Female",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Sandy",
                "description": "Sandy came to us back in November. She was picked up as a stray with 5 puppies. The puppies were...",
                "organization_animal_id": "17800990",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/1/?bust=1685311846&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/1/?bust=1685311846&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/1/?bust=1685311846&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/1/?bust=1685311846"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/2/?bust=1685311846&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/2/?bust=1685311846&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/2/?bust=1685311846&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/2/?bust=1685311846"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/3/?bust=1685311847&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/3/?bust=1685311847&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/3/?bust=1685311847&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/3/?bust=1685311847"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54744548/1/?bust=1685311846",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-02-24T21:51:24+0000",
                "published_at": "2022-02-24T21:51:23+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/54744548"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 55076890,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/ridley-55076890/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"German Shepherd Dog",
                "breeds": {
                    "primary": "German Shepherd Dog",
                    "secondary": null,
                    "mixed": false,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Female",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Ridley",
                "description": "Ridley is finally ready to start looking for her new home. She started off in a bad situation with a...",
                "organization_animal_id": "17883133",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/1/?bust=1685311787&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/1/?bust=1685311787&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/1/?bust=1685311787&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/1/?bust=1685311787"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/2/?bust=1685311786&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/2/?bust=1685311786&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/2/?bust=1685311786&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/2/?bust=1685311786"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/3/?bust=1685311789&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/3/?bust=1685311789&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/3/?bust=1685311789&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/3/?bust=1685311789"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55076890/1/?bust=1685311787",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-03-23T00:21:13+0000",
                "published_at": "2022-03-23T00:21:12+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/55076890"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 59232116,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/highlighter-59232116/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Highlighter",
                "description": "Highlighter came out of hoarding situation so he can be a little shy with strangers to start with he is...",
                "organization_animal_id": "18878519",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/1/?bust=1685311839&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/1/?bust=1685311839&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/1/?bust=1685311839&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/1/?bust=1685311839"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/2/?bust=1685311838&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/2/?bust=1685311838&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/2/?bust=1685311838&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/2/?bust=1685311838"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/3/?bust=1685311837&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/3/?bust=1685311837&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/3/?bust=1685311837&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/3/?bust=1685311837"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232116/1/?bust=1685311839",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-12-22T01:46:38+0000",
                "published_at": "2022-12-22T01:46:36+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59232116"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 64653693,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/french-fries-64653693/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Hound",
                "breeds": {
                    "primary": "Hound",
                    "secondary": "Pit Bull Terrier",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Baby",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [],
                "name": "French Fries",
                "description": "Meet our Fast Food Siblings, French Fries and Hamburger. both so handsome and so loving!!\nThese boys were found as...",
                "organization_animal_id": "2023395",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/1/?bust=1685451536&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/1/?bust=1685451536&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/1/?bust=1685451536&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/1/?bust=1685451536"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/2/?bust=1685451562&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/2/?bust=1685451562&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/2/?bust=1685451562&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/2/?bust=1685451562"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/3/?bust=1685451537&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/3/?bust=1685451537&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/3/?bust=1685451537&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/3/?bust=1685451537"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/4/?bust=1685451538&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/4/?bust=1685451538&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/4/?bust=1685451538&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/4/?bust=1685451538"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/5/?bust=1685457258&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/5/?bust=1685457258&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/5/?bust=1685457258&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/5/?bust=1685457258"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653693/1/?bust=1685451536",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-23T04:21:55+0000",
                "published_at": "2023-05-23T04:21:50+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64653693"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64780326,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/incredible-indy-64780326/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Pit Bull Terrier",
                "breeds": {
                    "primary": "Pit Bull Terrier",
                    "secondary": "Great Dane",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Female",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Incredible Indy",
                "description": "Incredible Indy is proof that even though things were tough at one point, you can pick yourself up and make...",
                "organization_animal_id": "2023291",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/1/?bust=1685457197&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/1/?bust=1685457197&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/1/?bust=1685457197&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/1/?bust=1685457197"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/2/?bust=1685457197&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/2/?bust=1685457197&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/2/?bust=1685457197&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/2/?bust=1685457197"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/3/?bust=1685457197&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/3/?bust=1685457197&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/3/?bust=1685457197&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/3/?bust=1685457197"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/4/?bust=1685457197&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/4/?bust=1685457197&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/4/?bust=1685457197&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/4/?bust=1685457197"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/5/?bust=1685457197&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/5/?bust=1685457197&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/5/?bust=1685457197&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/5/?bust=1685457197"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64780326/1/?bust=1685457197",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-30T14:23:10+0000",
                "published_at": "2023-05-30T14:23:07+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64780326"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64806309,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/hubbell-64806309/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Flat-Coated Retriever",
                "breeds": {
                    "primary": "Flat-Coated Retriever",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": true
                },
                "tags": [],
                "name": "Hubbell",
                "description": "Hubbell - so much to say about this gorgeous creature. He&amp;#39;s a different kind of dog for sure.\n\nThe basics...",
                "organization_animal_id": "2023311",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/1/?bust=1685586816&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/1/?bust=1685586816&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/1/?bust=1685586816&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/1/?bust=1685586816"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/2/?bust=1685586816&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/2/?bust=1685586816&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/2/?bust=1685586816&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/2/?bust=1685586816"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/3/?bust=1685586815&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/3/?bust=1685586815&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/3/?bust=1685586815&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/3/?bust=1685586815"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/4/?bust=1685586816&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/4/?bust=1685586816&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/4/?bust=1685586816&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/4/?bust=1685586816"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/5/?bust=1685586816&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/5/?bust=1685586816&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/5/?bust=1685586816&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/5/?bust=1685586816"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/6/?bust=1685586817&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/6/?bust=1685586817&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/6/?bust=1685586817&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/6/?bust=1685586817"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64806309/1/?bust=1685586816",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-06-01T02:23:33+0000",
                "published_at": "2023-06-01T02:23:31+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64806309"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 59232112,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/paper-59232112/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Paper",
                "description": "Paper came out of hoarding situation so he can be a little shy with strangers to start with he is...",
                "organization_animal_id": "18878587",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/1/?bust=1685311849&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/1/?bust=1685311849&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/1/?bust=1685311849&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/1/?bust=1685311849"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/2/?bust=1685311851&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/2/?bust=1685311851&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/2/?bust=1685311851&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/2/?bust=1685311851"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/3/?bust=1685311852&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/3/?bust=1685311852&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/3/?bust=1685311852&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/3/?bust=1685311852"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232112/1/?bust=1685311849",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-12-22T01:46:38+0000",
                "published_at": "2022-12-22T01:46:36+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59232112"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 59232115,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/thumb-tack-59232115/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Thumb Tack",
                "description": "Thumb Tack came out of hoarding situation so he can be a little shy with strangers to start with he...",
                "organization_animal_id": "18878642",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/1/?bust=1685311845&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/1/?bust=1685311845&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/1/?bust=1685311845&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/1/?bust=1685311845"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/2/?bust=1685311848&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/2/?bust=1685311848&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/2/?bust=1685311848&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/2/?bust=1685311848"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/3/?bust=1685311846&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/3/?bust=1685311846&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/3/?bust=1685311846&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/3/?bust=1685311846"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59232115/1/?bust=1685311845",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-12-22T01:46:38+0000",
                "published_at": "2022-12-22T01:46:36+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59232115"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 56790532,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/harold-56790532/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"German Shepherd Dog",
                "breeds": {
                    "primary": "German Shepherd Dog",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": null,
                    "cats": null
                },
                "tags": [],
                "name": "Harold",
                "description": "Harold is an 8-year-old shepherd mix who had been previously adopted from us. Unfortunately, he was turned into the pound...",
                "organization_animal_id": "18442123",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/1/?bust=1685311819&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/1/?bust=1685311819&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/1/?bust=1685311819&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/1/?bust=1685311819"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/2/?bust=1685311819&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/2/?bust=1685311819&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/2/?bust=1685311819&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/2/?bust=1685311819"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/3/?bust=1685311821&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/3/?bust=1685311821&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/3/?bust=1685311821&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/3/?bust=1685311821"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56790532/1/?bust=1685311819",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-08-24T04:07:26+0000",
                "published_at": "2022-08-24T04:07:26+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/56790532"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 64800614,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/tyson-64800614/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Labrador Retriever",
                "breeds": {
                    "primary": "Labrador Retriever",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Tyson",
                "description": "Lab lovers take notice!\nThis is Tyson----playful, social, with your typical young lab personality.\n\nThis black beauty was part of...",
                "organization_animal_id": "2023394",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/1/?bust=1685565207&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/1/?bust=1685565207&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/1/?bust=1685565207&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/1/?bust=1685565207"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/2/?bust=1685565207&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/2/?bust=1685565207&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/2/?bust=1685565207&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/2/?bust=1685565207"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/3/?bust=1685565208&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/3/?bust=1685565208&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/3/?bust=1685565208&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/3/?bust=1685565208"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/4/?bust=1685565208&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/4/?bust=1685565208&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/4/?bust=1685565208&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/4/?bust=1685565208"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/5/?bust=1685565208&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/5/?bust=1685565208&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/5/?bust=1685565208&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/5/?bust=1685565208"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64800614/1/?bust=1685565207",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-31T20:23:25+0000",
                "published_at": "2023-05-31T20:23:23+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64800614"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 59361065,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/post-it-59361065/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Mixed Breed",
                "breeds": {
                    "primary": "Mixed Breed",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Post It",
                "description": "Post It is a 9-month-old Rottweiler mix who was pulled from a hoarding situation with multiple other dogs where they...",
                "organization_animal_id": "18917989",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/1/?bust=1685311791&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/1/?bust=1685311791&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/1/?bust=1685311791&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/1/?bust=1685311791"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/2/?bust=1685311791&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/2/?bust=1685311791&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/2/?bust=1685311791&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/2/?bust=1685311791"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/3/?bust=1685311794&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/3/?bust=1685311794&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/3/?bust=1685311794&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/3/?bust=1685311794"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59361065/1/?bust=1685311791",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-01-06T07:00:39+0000",
                "published_at": "2023-01-06T07:00:37+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/59361065"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 58074289,
                "organization_id": "AZ347",
                "url": "https://www.petfinder.com/dog/vanilla-ice-58074289/az/queen-creek/central-arizona-animal-rescue-az347/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Australian Cattle Dog / Blue Heeler",
                "breeds": {
                    "primary": "Australian Cattle Dog / Blue Heeler",
                    "secondary": "Husky",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Young",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [],
                "name": "Vanilla Ice",
                "description": "We told Vanilla Ice that we were going to take his picture so we can post him online so we...",
                "organization_animal_id": "18617358",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/1/?bust=1685311777&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/1/?bust=1685311777&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/1/?bust=1685311777&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/1/?bust=1685311777"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/2/?bust=1685311778&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/2/?bust=1685311778&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/2/?bust=1685311778&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/2/?bust=1685311778"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/3/?bust=1685311779&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/3/?bust=1685311779&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/3/?bust=1685311779&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/3/?bust=1685311779"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58074289/1/?bust=1685311777",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-10-11T21:18:31+0000",
                "published_at": "2022-10-11T21:18:31+0000",
                "distance": null,
                "contact": {
                    "email": "mike@caaronline.org",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Queen Creek",
                        "state": "AZ",
                        "postcode": "85142",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/58074289"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az347"
                    }
                }
            },
            {
                "id": 64653692,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/hamburger-64653692/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Hound",
                "breeds": {
                    "primary": "Hound",
                    "secondary": "Pit Bull Terrier",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Baby",
                "gender": "Male",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": false,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [],
                "name": "Hamburger",
                "description": "Meet our Fast Food Siblings, Hamburger and French Fries. both so handsome and so loving!!\nThese boys were found as...",
                "organization_animal_id": "2023396",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/1/?bust=1685457197&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/1/?bust=1685457197&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/1/?bust=1685457197&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/1/?bust=1685457197"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/2/?bust=1685451526&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/2/?bust=1685451526&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/2/?bust=1685451526&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/2/?bust=1685451526"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/3/?bust=1685457196&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/3/?bust=1685457196&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/3/?bust=1685457196&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/3/?bust=1685457196"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/4/?bust=1685457195&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/4/?bust=1685457195&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/4/?bust=1685457195&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/4/?bust=1685457195"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/5/?bust=1685457196&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/5/?bust=1685457196&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/5/?bust=1685457196&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/5/?bust=1685457196"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64653692/1/?bust=1685457197",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-23T04:21:55+0000",
                "published_at": "2023-05-23T04:21:50+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64653692"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 58546378,
                "organization_id": "AZ01",
                "url": "https://www.petfinder.com/dog/obi-58546378/az/phoenix/citizens-for-north-phoenix-strays-az01/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Pit Bull Terrier",
                "breeds": {
                    "primary": "Pit Bull Terrier",
                    "secondary": "Labrador Retriever",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": "Black",
                    "secondary": "White / Cream",
                    "tertiary": null
                },
                "age": "Baby",
                "gender": "Male",
                "size": "Large",
                "coat": "Short",
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": null
                },
                "tags": [
                    "Friendly",
                    "Affectionate",
                    "Playful",
                    "Curious"
                ],
                "name": "OBI",
                "description": "If you are interested in this dog please email directly to CNPSrescue@gmail.com (No phone calls. No text messages please)\nObi...",
                "organization_animal_id": null,
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/2/?bust=1665902454&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/2/?bust=1665902454&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/2/?bust=1665902454&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/2/?bust=1665902454"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/1/?bust=1665902453&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/1/?bust=1665902453&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/1/?bust=1665902453&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/1/?bust=1665902453"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/3/?bust=1665902455&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/3/?bust=1665902455&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/3/?bust=1665902455&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/3/?bust=1665902455"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/4/?bust=1665902456&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/4/?bust=1665902456&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/4/?bust=1665902456&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/4/?bust=1665902456"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/5/?bust=1665902457&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/5/?bust=1665902457&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/5/?bust=1665902457&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/5/?bust=1665902457"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/6/?bust=1665902457&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/6/?bust=1665902457&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/6/?bust=1665902457&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/6/?bust=1665902457"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58546378/2/?bust=1665902454",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-10-16T06:40:59+0000",
                "published_at": "2022-10-16T06:40:59+0000",
                "distance": null,
                "contact": {
                    "email": "CNPSrescue@gmail.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Phoenix",
                        "state": "AZ",
                        "postcode": "85027",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/58546378"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az01"
                    }
                }
            },
            {
                "id": 60022835,
                "organization_id": "AZ01",
                "url": "https://www.petfinder.com/dog/angie-60022835/az/phoenix/citizens-for-north-phoenix-strays-az01/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Chihuahua",
                "breeds": {
                    "primary": "Chihuahua",
                    "secondary": "Rat Terrier",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": "White / Cream",
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Senior",
                "gender": "Female",
                "size": "Small",
                "coat": "Short",
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [
                    "Friendly",
                    "Affectionate",
                    "Curious"
                ],
                "name": "ANGIE",
                "description": "If you are interested in this dog please email directly to CNPSrescue@gmail.com (No phone calls. No text messages please)\n\nAngie...",
                "organization_animal_id": null,
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/1/?bust=1676946645&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/1/?bust=1676946645&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/1/?bust=1676946645&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/1/?bust=1676946645"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/2/?bust=1676946646&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/2/?bust=1676946646&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/2/?bust=1676946646&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/2/?bust=1676946646"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/3/?bust=1676946647&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/3/?bust=1676946647&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/3/?bust=1676946647&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/3/?bust=1676946647"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/4/?bust=1676946648&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/4/?bust=1676946648&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/4/?bust=1676946648&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/4/?bust=1676946648"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/5/?bust=1676946649&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/5/?bust=1676946649&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/5/?bust=1676946649&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/5/?bust=1676946649"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60022835/1/?bust=1676946645",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-02-21T02:30:51+0000",
                "published_at": "2023-02-21T02:30:50+0000",
                "distance": null,
                "contact": {
                    "email": "CNPSrescue@gmail.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Phoenix",
                        "state": "AZ",
                        "postcode": "85027",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/60022835"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az01"
                    }
                }
            },
            {
                "id": 58776048,
                "organization_id": "AZ01",
                "url": "https://www.petfinder.com/dog/rocky-road-58776048/az/phoenix/citizens-for-north-phoenix-strays-az01/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Pug",
                "breeds": {
                    "primary": "Pug",
                    "secondary": null,
                    "mixed": false,
                    "unknown": false
                },
                "colors": {
                    "primary": "Yellow / Tan / Blond / Fawn",
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Senior",
                "gender": "Male",
                "size": "Medium",
                "coat": "Short",
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": true,
                    "shots_current": true
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [
                    "Friendly",
                    "Affectionate",
                    "Loyal"
                ],
                "name": "Rocky Road ",
                "description": "If you are interested in this dog please email directly to CNPSrescue@gmail.com (No phone calls. No text messages please)\n\nRocky...",
                "organization_animal_id": null,
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/1/?bust=1667763620&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/1/?bust=1667763620&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/1/?bust=1667763620&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/1/?bust=1667763620"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/2/?bust=1667763621&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/2/?bust=1667763621&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/2/?bust=1667763621&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/2/?bust=1667763621"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/3/?bust=1667763622&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/3/?bust=1667763622&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/3/?bust=1667763622&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/3/?bust=1667763622"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/4/?bust=1667763622&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/4/?bust=1667763622&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/4/?bust=1667763622&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/4/?bust=1667763622"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/5/?bust=1667763623&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/5/?bust=1667763623&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/5/?bust=1667763623&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/5/?bust=1667763623"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/6/?bust=1680816640&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/6/?bust=1680816640&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/6/?bust=1680816640&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/6/?bust=1680816640"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/58776048/1/?bust=1667763620",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2022-11-06T19:40:26+0000",
                "published_at": "2022-11-06T19:40:25+0000",
                "distance": null,
                "contact": {
                    "email": "CNPSrescue@gmail.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Phoenix",
                        "state": "AZ",
                        "postcode": "85027",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/58776048"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az01"
                    }
                }
            },
            {
                "id": 64695605,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/jack-64695605/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Pit Bull Terrier",
                "breeds": {
                    "primary": "Cattle Dog",
                    "secondary": "Pit Bull Terrier",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Medium",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Jack",
                "description": "Hello there!\nMy name is Jack (I respond better to Goose because I&amp;#39;m often called a silly goose). I am...",
                "organization_animal_id": "2023161",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/1/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/1/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/1/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/1/?bust=1685550805"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/2/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/2/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/2/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/2/?bust=1685550805"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/3/?bust=1685550805&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/3/?bust=1685550805&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/3/?bust=1685550805&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/3/?bust=1685550805"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/4/?bust=1685550806&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/4/?bust=1685550806&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/4/?bust=1685550806&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/4/?bust=1685550806"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/5/?bust=1685550806&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/5/?bust=1685550806&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/5/?bust=1685550806&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/5/?bust=1685550806"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/6/?bust=1685550809&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/6/?bust=1685550809&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/6/?bust=1685550809&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/6/?bust=1685550809"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64695605/1/?bust=1685550805",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-24T14:24:25+0000",
                "published_at": "2023-05-24T14:24:23+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64695605"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 61091321,
                "organization_id": "AZ01",
                "url": "https://www.petfinder.com/dog/nena-61091321/az/phoenix/citizens-for-north-phoenix-strays-az01/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Jack Russell Terrier",
                "breeds": {
                    "primary": "Jack Russell Terrier",
                    "secondary": "Australian Cattle Dog / Blue Heeler",
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": "White / Cream",
                    "secondary": "Red / Chestnut / Orange",
                    "tertiary": null
                },
                "age": "Senior",
                "gender": "Female",
                "size": "Medium",
                "coat": "Medium",
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": true,
                    "dogs": true,
                    "cats": true
                },
                "tags": [
                    "Friendly",
                    "Affectionate",
                    "Loyal",
                    "Gentle",
                    "Smart",
                    "Quiet",
                    "Loves kisses"
                ],
                "name": "NENA",
                "description": "If you are interested in this dog please email directly to CNPSrescue@gmail.com (No phone calls. No text messages please)\nNena...",
                "organization_animal_id": null,
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/1/?bust=1678988392&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/1/?bust=1678988392&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/1/?bust=1678988392&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/1/?bust=1678988392"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/2/?bust=1678988393&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/2/?bust=1678988393&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/2/?bust=1678988393&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/2/?bust=1678988393"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/3/?bust=1678988394&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/3/?bust=1678988394&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/3/?bust=1678988394&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/3/?bust=1678988394"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/4/?bust=1678988394&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/4/?bust=1678988394&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/4/?bust=1678988394&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/4/?bust=1678988394"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/5/?bust=1678988395&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/5/?bust=1678988395&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/5/?bust=1678988395&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/5/?bust=1678988395"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/6/?bust=1678988396&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/6/?bust=1678988396&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/6/?bust=1678988396&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/6/?bust=1678988396"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/61091321/1/?bust=1678988392",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-03-16T17:39:58+0000",
                "published_at": "2023-03-16T17:39:57+0000",
                "distance": null,
                "contact": {
                    "email": "CNPSrescue@gmail.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Phoenix",
                        "state": "AZ",
                        "postcode": "85027",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/61091321"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/az01"
                    }
                }
            },
            {
                "id": 64693048,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/luanna-64693048/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Chihuahua",
                "breeds": {
                    "primary": "Chihuahua",
                    "secondary": null,
                    "mixed": false,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Female",
                "size": "Small",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": true
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Luanna",
                "description": "Three sweet girls turned in by a breeder - probably not useful anymore for baby making - it&amp;#39;s okay, we...",
                "organization_animal_id": "2023400",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/1/?bust=1685586815&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/1/?bust=1685586815&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/1/?bust=1685586815&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/1/?bust=1685586815"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/2/?bust=1685543664&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/2/?bust=1685543664&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/2/?bust=1685543664&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/2/?bust=1685543664"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/3/?bust=1685543663&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/3/?bust=1685543663&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/3/?bust=1685543663&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/3/?bust=1685543663"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/4/?bust=1685586816&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/4/?bust=1685586816&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/4/?bust=1685586816&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/4/?bust=1685586816"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/5/?bust=1685586816&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/5/?bust=1685586816&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/5/?bust=1685586816&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/5/?bust=1685586816"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/6/?bust=1685586816&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/6/?bust=1685586816&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/6/?bust=1685586816&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/6/?bust=1685586816"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64693048/1/?bust=1685586815",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-24T04:22:57+0000",
                "published_at": "2023-05-24T04:22:53+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64693048"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64730570,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/hazel-local-foster-64730570/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Terrier",
                "breeds": {
                    "primary": "Terrier",
                    "secondary": null,
                    "mixed": false,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Female",
                "size": "Large",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": true,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": null,
                    "cats": false
                },
                "tags": [],
                "name": "Hazel - Local Foster",
                "description": "Hazel - one of those dogs who photos don&amp;#39;t do her justice - she&amp;#39;s soooooooo pretty in real life.\n\nHazel...",
                "organization_animal_id": "2023222",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/1/?bust=1685661788&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/1/?bust=1685661788&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/1/?bust=1685661788&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/1/?bust=1685661788"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/2/?bust=1685661561&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/2/?bust=1685661561&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/2/?bust=1685661561&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/2/?bust=1685661561"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/3/?bust=1685661825&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/3/?bust=1685661825&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/3/?bust=1685661825&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/3/?bust=1685661825"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/4/?bust=1685661563&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/4/?bust=1685661563&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/4/?bust=1685661563&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/4/?bust=1685661563"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/5/?bust=1685661571&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/5/?bust=1685661571&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/5/?bust=1685661571&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/5/?bust=1685661571"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/6/?bust=1685661760&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/6/?bust=1685661760&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/6/?bust=1685661760&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/6/?bust=1685661760"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64730570/1/?bust=1685661788",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-25T21:06:01+0000",
                "published_at": "2023-05-25T21:05:59+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64730570"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            },
            {
                "id": 64715702,
                "organization_id": "RI77",
                "url": "https://www.petfinder.com/dog/palmer-64715702/ri/warren/paws-new-england-ri77/?referrer_id=03452fd4-a0d0-48fe-a86b-ee493431e23e",
                "type": "Dog",
                "species": "Dog",
                "breed":"Pomeranian",
                "breeds": {
                    "primary": "Pomeranian",
                    "secondary": null,
                    "mixed": true,
                    "unknown": false
                },
                "colors": {
                    "primary": null,
                    "secondary": null,
                    "tertiary": null
                },
                "age": "Adult",
                "gender": "Male",
                "size": "Small",
                "coat": null,
                "attributes": {
                    "spayed_neutered": true,
                    "house_trained": false,
                    "declawed": null,
                    "special_needs": false,
                    "shots_current": false
                },
                "environment": {
                    "children": null,
                    "dogs": true,
                    "cats": null
                },
                "tags": [],
                "name": "Palmer",
                "description": "Palmer the pom mix is looking for a furever home. \n\nPalmer&amp;#39;s southern foster got him from her vet clinic after...",
                "organization_animal_id": "2023391",
                "photos": [
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/1/?bust=1685586821&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/1/?bust=1685586821&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/1/?bust=1685586821&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/1/?bust=1685586821"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/2/?bust=1685586819&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/2/?bust=1685586819&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/2/?bust=1685586819&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/2/?bust=1685586819"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/3/?bust=1685586823&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/3/?bust=1685586823&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/3/?bust=1685586823&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/3/?bust=1685586823"
                    },
                    {
                        "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/4/?bust=1685586822&width=100",
                        "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/4/?bust=1685586822&width=300",
                        "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/4/?bust=1685586822&width=600",
                        "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/4/?bust=1685586822"
                    }
                ],
                "profile_pic": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64715702/1/?bust=1685586821",
                "videos": [],
                "status": "adoptable",
                "status_changed_at": "2023-05-25T02:23:02+0000",
                "published_at": "2023-05-25T02:23:00+0000",
                "distance": null,
                "contact": {
                    "email": "info@pawsnewengland.com",
                    "phone": null,
                    "address": {
                        "address1": null,
                        "address2": null,
                        "city": "Warren",
                        "state": "RI",
                        "postcode": "02885",
                        "country": "US"
                    }
                },
                "_links": {
                    "self": {
                        "href": "/v2/animals/64715702"
                    },
                    "type": {
                        "href": "/v2/types/dog"
                    },
                    "organization": {
                        "href": "/v2/organizations/ri77"
                    }
                }
            }
        ]
    );

    console.log('pups added');

    process.exit();
});