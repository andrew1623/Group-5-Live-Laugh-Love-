import { Character, StoryPage, Story } from "./types"

const testCharecter: Character = {
    name: 'Test Character',
    health: { max: 100, current: 100 },
    stats: [
        {
            name: 'strength',
            value: 10
        },
        {
            name: 'defense',
            value: 10
        },
        {
            name: 'speed',
            value: 10
        }
    ],
    inventory: [
        {
            name: 'Test Item',
            description: 'This is a test item',
            quantity: 1,
            effect: [{ stat: 'health', value: 10 }]
        },
        {
            name: 'Test Item 2',
            description: 'This is a test item',
            quantity: 2,
            effect: [{ stat: 'health', value: 10 }]
        }
    ],
    equipped: []
}

const testPages: StoryPage[] = [
    {
    id: 1,
    title: 'Test Page',
    text: 'This is a test page',
    choices: [{
                id: 0,
                text: 'lose  2 strength',
                result: [{ stat: "strength", value: -2 }],
                nextPage: 2,

            },
            {
                id: 1,
                text: 'lose 10 health',
                result: [{ stat: "health", value: -10 }],
                nextPage: 2,
            },
            {
                id: 2,
                text: 'restore 10 health',
                result: [{ stat: "health", value: 10 }],
                nextPage: 2
            },
            {
                id: 3,
                text: 'gain 2 speed',
                result: [{ stat: "speed", value: 2 }],
                nextPage: 2
            }]
    },
    {
        id: 2,
        title: 'Test Page 2',
        text: 'Secondary page text for testing purposes',
        choices: [
            {
                id: 0,
                text: 'Gain more strength, but get hurt while training',
                result: [{ stat: "strength", value: 20 }, { stat: "health", value: -10 }],
                nextPage: 1
            },
            {
                id: 1,
                text: 'Run until you feel better.',
                result: [{ stat: "health", value: 10 },{ stat: "speed", value: 10 }],
                nextPage: 1
            }
        ]
    }
]

const testStory: Story ={
    storyId: 1,
    story: testPages,
    character: testCharecter,
    choiceHistory: [],
    created: new Date(),
    author: 'Test Author',
} 

export default testStory;