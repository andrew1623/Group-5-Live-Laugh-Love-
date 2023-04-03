// This file contains all the types used in the application

// This is the object that contains the character stats
type Stats = { 
    name: string,
    value: number,
}

// This is the object that contains the character health
interface Health  {
    max: number,
    current: number, 
}

// This is the interface for the character object that is passed to the Story component
interface Character {
    name: string,
    health: Health,
    stats: Stats[],
    inventory: Item[],
    equipped: Item[]
}

// This is the object that will modify the character stats
// can be used by items, equipment, or story choices
type Effect = {stat: string, value: number}

// This is the interface for the items that are in the characters inventory
interface Item {
    name: string,
    description: string,
    quantity: number,
    effect: Effect[],
}

// This is the interface for the story choices that are passed to the Story component
interface StoryChoice {
    id: number,
    text: string,
    result: Effect[],
    condition?: boolean,
    nextPage: number,
}

// This is the interface for the story pages that are passed to the Story component
interface StoryPage  {
    id: number,
    title: string,
    text: string,
    choices: StoryChoice[]
}

// This is the interface for the story object that is passed to the Story component
interface Story  {
    storyId: number,
    story: StoryPage[],
    choiceHistory: StoryChoice[],
    character: Character,
    created: Date,
    author: string,
}

// This is the interface for the story object that is saved to local storage
interface StorySave {
    saveId: number,
    storyId: number,
    story: StoryPage[],
    choiceHistory: StoryChoice[],
    character: Character,
}

export type { Character, Effect, Item, StoryChoice, StoryPage, Story, StorySave }