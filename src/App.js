import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Tabs from './Tabs';
import Card from './Card';

function App() {
  const content = "Do you work on whatsApp? Yes, we do offer our services on WhatsApp!";
  return (
    <div className="app-container">
    <Navbar />
    <Tabs />
    <div className="cards-section">
      <Card content={content} />
      <Card content={content} />
      <Card content={content} />
      <Card content={content} />
      <Card content={content} />
      <Card content={content} />
      <Card content={content} />
    </div>
  </div>
  );
}

export default App;
