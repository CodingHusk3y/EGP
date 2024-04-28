import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client.jsx';

const ReadStudent = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select();
          
            // set state of posts
            setPosts(data)
          }
          
          fetchPosts();

    }, []);

    return (
        <div className="ReadStudents">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card key={post.id} id={post.id} name={post.name} major={post.major} description={post.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadStudent;