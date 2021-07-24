import { useState, useEffect } from 'react';
import BlogList from './BlogList';

/*use state to ask react to watch for Change and whenever 
 a hook is invoked, the useState's registered function will be 
 invoked
*/
const Home = () => {
  //id is used for reacto to export data and should be unique
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario')
  /*should not hardcoding the lists, need a way to cycle through the list
  However, this really repetivie and needs a template to make it reusable
  So, use props to pass as arguments
  1. use cross component
  2. can be resued in the home.js
  */

  const handleDelete = (id) => {
    //filter does not mutate original blogs
    const newBlogs = blogs.filter(blog => blog.id != id);
    setBlogs(newBlogs)
  }

  /*runs any time when it renders
  adding [] would not run this,  because it specifies it only runs for the first time
  now it only watch for 'name' and first refresh
  */
  useEffect( 
    ()=>{
      console.log("useEffect running");
      console.log(blogs);
      console.log(name);
    }  ,
    [name]
  )
  const title = "WAP"
  return (
    <div className="home">
      <BlogList blogs={blogs} title={title} handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = 'Noob' /> */}
      <button onClick={()=>setName('Chris, new name')}>change Name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;