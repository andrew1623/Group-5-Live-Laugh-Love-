import { Character, StoryPage, Story, StoryDraft} from "./types"

const templateCharacter: Character = {
    name: 'Name',
    health: { max: 100, current: 100 },
    stats: [
        { //0
            name: 'Strength',
            value: 10
        },
        { //1
            name: 'Dexterity',
            value: 10
        },
        { //2
            name: 'Intelligence',
            value: 10
        },
        { //3
            name: 'Wisdom',
            value: 10
        },
        { //4
            name: 'Charisma',
            value: 10
        },
        { //5
            name: 'Luck',
            value: 10
        },
        { //6
            name: 'Defense',
            value: 0
        },
        { //7
            name: 'Karma',
            value: 0
        }
    ],
    inventory: [],
    equipped: []
}

const templatePages: StoryPage[] = [{
    id: 1,
    title: 'Location',
    text: 'Event Description',
    choices: [{
                id: 1,
                text: 'Action',
                result: [],
                nextPage: 1
            }]
}]

const templateStory: StoryDraft ={
    storyId: -1,
    story: templatePages,
    character: templateCharacter,
    choiceHistory: [],
    title: '',
    description: '',
    created: new Date,
    author: '',
    lastModified: new Date
} 

const emptyCharacter: Character = {
    name: '',
    health: { max: 100, current: 100 },
    stats: [],
    inventory: [],
    equipped: []
}
const emptyPages: StoryPage[] = []
const emptyStory: StoryDraft = {
    storyId: -1,
    story: emptyPages,
    character: emptyCharacter,
    choiceHistory: [],
    title: '',
    description: '',
    created: new Date,
    author: '',
    lastModified: new Date
} 

export default templateStory; emptyStory;
