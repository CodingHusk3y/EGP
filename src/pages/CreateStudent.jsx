import React, { useState } from 'react';
import { supabase } from '../client.jsx';



const CreateStudent = (event) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({name: post.name, major: post.major, description: post.description})
            .select();
        }

  const [post, setPost] = useState({name: "", major: "", description: ""})

  const handleChange = (event) => {
    const {name, value} = event.target;
    setPost( (prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} /><br />
        <br/>

        <label htmlFor="major">major</label><br />
        <input type="text" id="major" name="major" onChange={handleChange} /><br />
        <br/>

        <label htmlFor="description">Description</label><br />
        <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange} />
        <br/>
        <input type="submit" value="Submit" onClick={CreateStudent} />
      </form>
    </div>
  );
}

export default CreateStudent;