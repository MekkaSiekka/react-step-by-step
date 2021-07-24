import { useState, useEffect } from 'react';
import BlogList from './BlogList';

/*
need a json server to provide data instead of hardcoding
npx json-server --watch .\data\db.json --port 8000
*/
const Home = () => {
  //id is used for reacto to export data and should be unique
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [name, setName] = useState('mario')
  const [error, setError] = useState(null);
  /*should not hardcoding the lists, need a way to cycle through the list
  However, this really repetivie and needs a template to make it reusable
  So, use props to pass as arguments
  1. use cross component
  2. can be resued in the home.js
  */

  const FetchAndUpdateData = () => {
    //fetch('http://localhost:8000/blogs22')
    fetch('http://localhost:8000/blogs')
      .then(res => {
        //console.log(res)
        if (!res.ok){
          throw Error('Could not fetch the data, data is null');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err)=>{
        setError(err.message);
        setIsPending(false);
      });
  }


  /*runs any time when it renders
  adding [] would not run this,  because it specifies it only runs for the first time
  now it only watch for 'name' and first refresh
  */
  useEffect(() => {
    //all function contents callback
    console.log("useEffect running");
    console.log(blogs);
    console.log(name);
    setTimeout(() => {
      FetchAndUpdateData();
    }, 1000); 
  },
    []
  )
  const title = "WAP"

  /**
   * Dangerous here because blogs are init as null, and could be rendered as null when useEffect happends 
   * So use conditional to show templates
   */
  return (
    <div className="home">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div> }
      {blogs && <BlogList blogs={blogs} title={title} />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = 'Noob' /> */}
      {/* <button onClick={()=>setName('Chris, new name')}>change Name</button> */}
      <p>{name}</p>
    </div>
  );
}

export default Home;