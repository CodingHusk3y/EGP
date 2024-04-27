import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client.jsx';

const ReadStudent = (props) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (props.data && props.data.length > 0) {
            // If posts are already provided, use them and skip data fetching
            setPosts(props.data);
            setIsLoading(false);
        } else {
            // Otherwise, fetch data from the database
            const fetchPosts = async () => {
                const {data} = await supabase
                  .from('Posts')
                  .select();
              
                // set state of posts
                setPosts(data);
                setIsLoading(false);
            }
            fetchPosts();
        }
    }, [props.data]); // Only re-run the effect if props.data changes
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ReadPosts">
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