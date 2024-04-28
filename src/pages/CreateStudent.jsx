import React, { useState } from 'react';
import { supabase } from '../client.jsx';
import './CreateStudent.css';
import GAStudent from './StudentPage/GAStudent';



const CreateStudent = () => {
  
  const [post, setPost] = useState({name: "", major: "", description: ""})

  const CreatePost = async (event) => {
    event.preventDefault();
  
    await supabase
      .from('Posts')
      .insert({name: post.name, major: post.major, description: post.description})
      .select();
  
    window.location = "/GAStudent";
  }

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
      <form>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} /><br />
        <br/>

        <label htmlFor="major">major</label><br />
        <input type="text" id="major" name="major" onChange={handleChange} /><br />
        <br/>

        <label htmlFor="description">Description</label><br />
        <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange} />
        <br/>
        <input type="submit" value="Submit" onClick={CreatePost} />
      </form>
    </div>
  );
  }

export default CreateStudent;