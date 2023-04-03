import { Character, StoryPage, Story } from "./types"

const testCharacter: Character = {
    name: 'Arthur Venture',
    health: { max: 100, current: 100 },
    stats: [
        { //0
            name: 'strength',
            value: 10
        },
        { //1
            name: 'dexterity',
            value: 10
        },
        { //2
            name: 'speed',
            value: 10
        },
        { //3
            name: 'intelligence',
            value: 10
        },
        { //4
            name: 'charisma',
            value: 10
        },
        { //5
            name: 'luck',
            value: 10
        },
        { //6
            name: 'defense',
            value: 0
        },
        { //7
            name: 'karma',
            value: 0
        }
    ],
    inventory: [
        {
            name: 'Rusty Iron Sword',
            description: 'Sword of an old warrior',
            quantity: 1,
            effect: [{ stat: 'health', value: -10 }]
        },
        {
            name: 'Small Health Potion',
            description: 'Simple potion for small wounds',
            quantity: 2,
            effect: [{ stat: 'health', value: 10 }]
        }
    ],
    equipped: []
}

const testPages: StoryPage[] = [
    {
    id: 1,
    title: 'Emeralia Marketplace',
    text: 'The sounds of haggling and exchanges being made fill the street.\nThere is a commotion along with a man rushing past you.\n\"Catch that thief!\" You hear.',
    choices: [{
                id: 1,
                text: 'Chase the thief!',
                result: [],
                nextPage: 2

            },
            {
                id: 2,
                text: 'Stay a bystander.',
                result: [],
                condition: true,
                nextPage: 3
            }]
    },
    {
        id: 2,
        title: 'Emeralia Marketplace',
        text: 'You chase after the thief.',
        choices: [
            {
                id: 1,
                text: 'Tackle the thief.',
                result: [],
                nextPage: 4
            },
            {
                id: 2,
                text: 'Yell for the thief to stop. [Charisma 10]',
                result: [],
                condition: (testCharacter.stats[4].value >= 10),
                nextPage: 6
            }
        ]
    },
    {
        id: 3,
        title: 'An Early End',
        text: 'You let your spark fade and you never become an adventurer...',
        choices: [
            {
                id: 1,
                text: 'Regain your spark and start your journey.',
                result: [],
                nextPage: 1
            }]
    },
    {
        id: 4,
        title: 'Emeralia Marketplace',
        text: 'Guards approach and apprehend the thief. They thank you for helping.',
        choices: [
            {
                id: 1,
                text: 'Take the stolen item back to the merchant.',
                result: [],
                nextPage: 5
            }
        ]
    },
    {
        id: 5,
        title: 'Emeralia Marketplace',
        text: '\"Thank you for returning my merch. For your kindness, have a free trinket of your choice.\"',
        choices: [
            {
                id: 1,
                text: 'Select the Ring of Strength. [Permanent +2 Strength]',
                result: [{ stat: "strength", value: 2 }],
                nextPage: 9
            },
            {
                id: 2,
                text: 'Select the Ring of Dexterity. [Permanent +2 Dexterity]',
                result: [{ stat: "dexterity", value: 2 }],
                nextPage: 9
            },
            {
                id: 3,
                text: 'Select the Ring of Intelligence. [Permanent +2 Intelligence]',
                result: [{ stat: "intelligence", value: 2 }],
                nextPage: 9
            }
        ]
    },
    {
        id: 6,
        title: 'Emeralia Marketplace',
        text: 'You convince the thief to stop, he is shaking and looks malnourished.',
        choices: [
            {
                id: 1,
                text: 'Allow the thief to get away.',
                result: [{ stat: "karma", value: 4 }],
                nextPage: 7
            },
            {
                id: 2,
                text: 'Take back the item and allow the thief to get away.',
                result: [{ stat: "karma", value: 2 }],
                nextPage: 8
            },
            {
                id: 3,
                text: 'Keep the thief still long enough for the guards to catch up to you.',
                result: [],
                nextPage: 4
            }
        ]
    },
    {
        id: 7,
        title: 'Emeralia Marketplace',
        text: 'The city guards rush past you, giving you an aggravated face. A mysterious figure approaches.\n\"You are a kind individual for letting that man get away.\" they hand you an invitation to the Selection Trials.',
        choices: [
            {
                id: 1,
                text: 'What is the Selection Trials?',
                result: [],
                nextPage: 10
            }
        ]
    },
    {
        id: 8,
        title: 'Emeralia Marketplace',
        text: 'The city guards rush past you, some give you an aggravated face.\nOne stops, \"At least you saved the product. I will escort you back to the merchant to return it.\"',
        choices: [
            {
                id: 1,
                text: 'Take the stolen item back to the merchant.',
                result: [],
                nextPage:5 
            }
        ]
    },
    {
        id: 9,
        title: 'Emeralia Marketplace',
        text: 'A guard from before approaches you. \"Thanks for helping uphold some orde, even as a civilian. You got the chops for the Selection Trials\"\nHe hands you an invitation to the Selection Trials.',
        choices: [
            {
                id: 1,
                text: 'What is the Selection Trials?',
                result: [],
                nextPage: 10
            }
        ]
    },
    {
        id: 10,
        title: 'City of Emeralia',
        text: 'The Selection Trials is a test for aspiring individuals to become official heros, it is a test held by the king, in the royal castle.',
        choices: [
            {
                id: 1,
                text: 'Make your way to the city castle, Castle Monty.',
                result: [],
                nextPage: 11
            }
        ]
    },
    {
        id: 11,
        title: 'City of Emeralia',
        text: 'You walk through the streets of Emeralia. Packed with stores and civilians walking everywhere. You notice a few adventurering parties resting in the city guild. One day you too will have your own party.',
        choices: [
            {
                id: 1,
                text: 'To be continued.',
                result: [],
                nextPage: 11
            }
        ]
    }
]

const testStory: Story ={
    storyId: 1,
    story: testPages,
    character: testCharacter,
    choiceHistory: [],
    created: new Date(2023,3,31),
    author: "Jeremy Durflinger",
} 

export default testStory;