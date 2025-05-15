import './App.css';

function App() {
  function Yashil() {
    document.getElementById('body').style.backgroundColor = 'green';
  }

  function Sariq() {
    document.getElementById('body').style.backgroundColor = 'yellow';
  }

  function Kok() {
    document.getElementById('body').style.backgroundColor = 'blue';
  }

  return (
    <div id='body' style={{ height: '100vh', padding: '20px' }}>
      <button style={{backgroundColor:'green',padding: '10px',borderRadius:'10px' , marginLeft:'10px'}} onClick={Yashil}>Yashil</button>
      <button style={{backgroundColor:'yellow' ,padding:'10px',borderRadius:'10px' , marginLeft:'10px'}} onClick={Sariq}>Sariq</button>
      <button style={{backgroundColor:'blue',padding:'10px',borderRadius:'10px ' , marginLeft:'10px'}} onClick={Kok}>Ko‘k</button>
    </div>
  );
}

export default App;
