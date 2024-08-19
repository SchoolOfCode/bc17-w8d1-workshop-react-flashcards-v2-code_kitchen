import "./flashcards.css"

export default function Flashcard (props) {
    return (
        <div className="question">
            <span className="closeCard">❌</span>
            <div className="emojiCard">{props.emoji}</div>
            <p className="questionCard">{props.question}</p>
        </div>
    );
}