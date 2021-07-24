const Home = () => {
  const handleClick = (e) => {
    console.log('hello bitch', e)
  };

  const handleClickAgain = (name, e) => {
    console.log('hello again ' + name, e.target)
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      {/* could remove the curly brackets around handleClickAgain.  */}
      <button onClick={(e) => { handleClickAgain('Chris', e) }}> Another Click</button> 
    </div>
  );
}

export default Home;