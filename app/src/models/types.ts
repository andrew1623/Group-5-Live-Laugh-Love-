interface Character {
    name: string,
    health: number,
    strength: number,
    defense: number,
    speed: number,
}

interface StoryChoice {
    id: number,
    text: string,
    result: string,
}

interface StoryPage  {
    id: number,
    title: string,
    text: string,
    choices: StoryChoice[]
}

interface Story  {
    storyId: number,
    story: StoryPage[],
    initialCharacter: Character,
    choiceHistory: StoryChoice[],
}
export type { Character, StoryChoice, StoryPage, Story}