import "./form.css";


export default function Form (props) {

    return (
            <form className="form">

                <label for="question">Question:</label>
                <input type="text" id="question" name="question" onChange={props.onChange}/> 
                
                <label for="answer">Answer:</label>
                <input type="text" id="answer" name="answer" onChange={props.onChange}/>
                
                <input type="submit" value="Add"/>
            </form>
    )
}
