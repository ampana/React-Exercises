import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import data from './data.js'

export default function App() {
      const details = data.map(card => {
        return (
          <Card
            key = {card.id}
            item = {card}
          />
        )
      })
    return (
    <div className="App">
      {details}
    </div>
  );
}

