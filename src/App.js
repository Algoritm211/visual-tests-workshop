import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="container">
      <Card
        title={'Some title'}
        tag={'Technologies'}
        mainImage="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNjUyMDg2MTY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At distinctio dolorum earum, error esse et excepturi fuga illo incidunt modi neque perferendis repudiandae rerum sequi soluta temporibus tenetur velit veniam?'}
        author={'Alex'}
        avatar="https://i.pravatar.cc/40?img=1"
        date={new Date().toLocaleString()}
      />
    </div>
  );
}

export default App;
