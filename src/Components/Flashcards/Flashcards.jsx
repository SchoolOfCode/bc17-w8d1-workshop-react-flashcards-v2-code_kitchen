import Flashcard from "./Flashcard";
import "./flashcards.css"

const questions = [
    {
        question: "What is used to pass in data to a component from the outside, or from a parent?",
        emoji: "🤔"
    },
    {
        question: "What is the correct place to put a side effect that synchronizes your component with some outside system in React?",
        emoji: "🤣"
    },
    {
        question: "What triggers a component in React to re-render?",
        emoji: "🤯"
    }
]

// Props
// Inside the useEffect hook
// When its state or props have changed.

export default function Flashcards () {
    return (
        <div className="flashCardContainer">
            <Flashcard question="Where is Rome?" emoji="🤔"/>
            <Flashcard question="What is the square root of 64?" emoji="🤔"/>
            <Flashcard question="Who wrote 'To Kill a Mockingbird'?" emoji="🤔"/>
        </div>
    )
}