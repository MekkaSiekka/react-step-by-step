import { useState} from 'react';
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
  /*should not hardcoding the lists, need a way to cycle through the list
  However, this really repetivie and needs a template to make it reusable
  So, use props to pass as arguments
  1. use cross component
  2. can be resued in the home.js
  */
 const title = "WAP"
  return (
    <BlogList blogs={blogs} title = {title} />
  );
}

export default Home;