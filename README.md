### Data Grouping for API from https://dummyjson.com/users


## Available Scripts

In the project directory, you can run:

### `npm run dev`

for testing
### `npm run test`

--- sample response ---

    {
        [Department]: {
            "male": 1,                      // ---> Male Count Summary
            "female": 1,                    // ---> Female Count Summary
            "ageRange": "XX-XX",            // ---> Range
            "hair": {                       // ---> "Color": Color Summary
                "Black": 1,                
                "Blond": 1,
                "Chestnut": 1,
                "Brown": 1
            },
            "addressUser": {                // ---> "firstNamelastName": postalCode
                "TerryMedhurst": "XXXXX",
            }
        }
    }, 
    ...
