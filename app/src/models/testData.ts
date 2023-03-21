import { Character, StoryPage } from "./types"

const testCharecter: Character = {
    name: 'Test Character',
    stats: [
        {
            name: 'maxHealth',
            value: 100
        },
        {
            name: 'health',
            value: 100
        },
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
            name: 'Test Item ',
            description: 'This is a test item',
            quantity: 2,
            effect: [{ stat: 'health', value: 10 }]
        }
    ],
    equipped: []
}

const testPage: StoryPage = {
    id: 1,
    title: 'Test Page',
    text: 'This is a test page',
    choices: [
        {
            id: 1,
            text: 'lose  2 strength',
            result: [{ stat: "strength", value: -2 }]
        },
        {
            id: 2,
            text: 'lose 10 health',
            result: [{ stat: "health", value: -10 }]
        },
        {
            id: 3,
            text: 'restore 10 health',
            result: [{ stat: "health", value: 10 }]
        },
        {
            id: 4,
            text: 'gain 2 speed',
            result: [{ stat: "speed", value: 2 }]
        }
    ]
}

export { testCharecter, testPage }