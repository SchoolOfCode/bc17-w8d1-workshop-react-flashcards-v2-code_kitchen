import "./form.css";

export default function Form () {
    return (
            <form className="form">
                <label for="question">Question:</label>
                <input type="text" id="question" name="question"/> 
                <label for="answer">Answer:</label>
                <input type="text" id="answer" name="answer"/>
                <input type="submit" value="Add"/>
            </form>
    )
}