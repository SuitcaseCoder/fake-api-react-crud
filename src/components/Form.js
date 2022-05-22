import React, { useState } from "react";

const Form = (props) => {

    const [post, setPost] = useState({
        title: props.title,
        body: props.body
    });

    const { title, body } = post;


    const handleInputChange = (e) => {
        console.log(e.target.value);

        const { name, value } = e.target

        setPost((prevState) => ({
            ...prevState,
            [name]: value
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('submit clicked');
        // const value = e.target.value;

        const post = {
            id,
            title, 
            body
        }

        props.handleSubmit(post);
    }


return (

    <div className="flex-container">
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">title</label>
            <input type="text" name="title" value={title} onChange={handleInputChange} />

            <label htmlFor="tibodytle">body</label>
            <input type="text" name="body" value={body} onChange={handleInputChange} />
            
            <button type="submit">submit</button>
       </form>
    </div>
)

}

export default Form;