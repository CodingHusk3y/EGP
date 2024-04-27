import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client.jsx';


const EditStudent = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({name: null, major: "", description: ""});

    const updatePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .update({ name: post.name, major: post.major,  description: post.description})
          .eq('id', id);
      
        window.location = "/";
    }    
      
    const deletePost = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id); 
        
        window.location = "http://localhost:3000/";
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
            <label htmlFor="name">name</label> <br />
            <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
            <br/>
      
            <label htmlFor="major">major</label><br />
            <input type="text" id="major" name="major" value={post.major} onChange={handleChange} /><br />
            <br/>
      
            <label htmlFor="description">Description</label><br />
            <textarea rows="5" cols="50" id="description" value={post.description} onChange={handleChange} >
            </textarea>
            <br/>
            <input type="submit" value="Submit" onClick={updatePost}/>
            <button className="deleteButton" onClick={deletePost}>Delete</button>
          </form>
        </div>
      );
}

export default EditStudent