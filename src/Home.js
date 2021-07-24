import { useState} from 'react';


/*use state to ask react to watch for Change and whenever 
 a hook is invoked, the useState's registered function will be 
 invoked
*/
const Home = () => {
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(25)

  //let name = 'mario';
  const handleClick = () => {
    setName('new name');
    setAge(47)
  };






  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age}</p>
      <button onClick={handleClick}>Click Me</button>
      {/* could remove the curly brackets around handleClickAgain.  */}
    </div>
  );
}

export default Home;