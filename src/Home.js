import { useState} from 'react';


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
  //should not hardcoding the lists, need a way to cycle through the list
  return (
    <div className="home">
      {
        blogs.map((blog) => (
          <div className="blog-preview" key = {blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Home;