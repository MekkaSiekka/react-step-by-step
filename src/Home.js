import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
/*
need a json server to provide data instead of hardcoding
npx json-server --watch .\data\db.json --port 8000

Making customer hook: want to not rewrite the thing for each component 
for data fetching
*/
const Home = () => {
  //id is used for reacto to export data and should be unique
  
  /*should not hardcoding the lists, need a way to cycle through the list
  However, this really repetivie and needs a template to make it reusable
  So, use props to pass as arguments
  1. use cross component
  2. can be resued in the home.js
  */

  const {data , isPending, error} = useFetch('https://localhost:8000/blogs');
  const title = "WAP"

  /**
   * Dangerous here because blogs are init as null, and could be rendered as null when useEffect happends 
   * So use conditional to show templates
   */
  return (
    <div className="home">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div> }
      {data && <BlogList blogs={data} title={title} />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = 'Noob' /> */}
      {/* <button onClick={()=>setName('Chris, new name')}>change Name</button> */}
    </div>
  );
}

export default Home;