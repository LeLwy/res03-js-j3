
function countActiveUsers(users) {
    
    let count = 0;
    
    for(user of users){
        
        if(user.isActive === true){
            
            count ++;
        }
    }
    
    return count;
}

function getActiveUsers(users) {
    
    let activeUsers = [];
    
    for(user of users){
        
        if(user.isActive === true){
            
            activeUsers.push(user);
        }
    }
    
    return activeUsers;
}

function hasBlueEyes(users) {
    
    let count = 0;
    
    for(user of users){
        
        if(user.isActive === true && user.eyeColor === "blue"){
            
            count ++
        }
    }
    
    return count;

}

function computeActiveUsersAverageAge(users) {
    
    activeUsers = getActiveUsers(users);
    
    activeUsersAverageAge = 0;
    
    for(activeUser of activeUsers){
        
        activeUsersAverageAge += activeUser.age;
        
    }
    
    return activeUsersAverageAge / activeUsers.length;
}

function setMultronToCenturia(users) {
    
    let count = 0;
        
    for(user of users){
        
        if(user.company === "MULTRON"){
            
            user.company = "CENTURIA";
            count ++;
        }
    }
    
    return count;
}

function getBrownEyedUsersExcludingCenturiaWorkers(users) {
    
    let count = 0;
    
    for(user of users){
        
        if(user.company !== "CENTURIA" && user.eyeColor === "brown"){
            
            count ++;
        }
    }
    
    return count;
}

function countActiveBrownEyedUsers(users){
    
    count= 0;
    
    for(user of users){
        
        if(user.eyeColor === "brown" && user.isActive === true){
            
            count ++;
        }
    }
    
    return count;
}

function countInactiveBrownEyedUsers(users){
    
    count= 0;
    
    for(user of users){
        
        if(user.eyeColor === "brown" && user.isActive === false){
            
            count ++;
        }
    }
    
    return count;
}

function countActiveGreenEyedUsers(users){
    
    count= 0;
    
    for(user of users){
        
        if(user.eyeColor === "green" && user.isActive === true){
            
            count ++;
        }
    }
    
    return count;
}

function countInactiveGreenEyedUsers(users){
    
    count= 0;
    
    for(user of users){
        
        if(user.eyeColor === "green" && user.isActive === false){
            
            count ++;
        }
    }
    
    return count;
}

function countActiveBlueEyedUsers(users){
    
    count= 0;
    
    for(user of users){
        
        if(user.eyeColor === "blue" && user.isActive === true){
            
            count ++;
        }
    }
    
    return count;
}

function countInactiveBlueEyedUsers(users){
    
    count= 0;
    
    for(user of users){
        
        if(user.eyeColor === "blue" && user.isActive === false){
            
            count ++;
        }
    }
    
    return count;
}

let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

/***** ETAPE 1 *****/

console.log(`We currently have ${ countActiveUsers(users) } active users.`);

/***** ETAPE 2 *****/

console.log(`Out of our currently ${ countActiveUsers(users) } active users, ${hasBlueEyes(users)} have blue eyes.`);

/***** ETAPE 3 *****/

console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(users)}.`);

/***** ETAPE 4 *****/

console.log(`${setMultronToCenturia(users)} user companies have been changed from MULTRON to CENTURIA.`);

/***** ETAPE 5 *****/

console.log(`${getBrownEyedUsersExcludingCenturiaWorkers(users)} users with brown eyes do not work at CENTURIA`);

/***** ETAPE 6 *****/

console.log(`Out of our brown eyed users ${countActiveBrownEyedUsers(users)} are active and ${countInactiveBrownEyedUsers(users)} are inactive`);

console.log(`Out of our green eyed users ${countActiveGreenEyedUsers(users)} are active and ${countInactiveGreenEyedUsers(users)} are inactive`);

console.log(`Out of our blue eyed users ${countActiveBlueEyedUsers(users)} are active and ${countInactiveBlueEyedUsers(users)} are inactive`);