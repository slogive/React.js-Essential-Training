import './App.css';

function Header(props) {
  console.log(props);
  const { name } = props;
  return <header>Header {name}</header>;
}

function Secret() {
  return <h2>This is a secret</h2>;
}

function NotSecret() {
  return <h2>This is not a secret</h2>;
}

function Main(props) {
  const { Tech } = props;
  return (
    <main>
      <ul style={{ textAlign: 'left' }}>
        {Tech.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <img
        src='https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1043&q=80'
        alt='React'
        height={200}
      ></img>
      {props.Status ? <Secret /> : <NotSecret />}
    </main>
  );
}

function Footer(props) {
  const { year } = props;
  return <footer>Copyright {year}</footer>;
}

const Tech = ['React', 'Redux', 'Next'];

const TechObject = Tech.map((item, i) => ({ id: i, title: item }));

Tech.map((item) => console.log(item));

function App() {
  return (
    <div className='App'>
      <Header name='Cesar' />
      <Main Tech={TechObject} Status={true} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
