import './App.css';
import WebPage1 from './Components/WebPages/WebPage1';
import CartProvider from './Components/Context-Page1/Cart-Provider';

function App() {
  return (
    <CartProvider>
      <WebPage1 />
    </CartProvider>

  );
}

export default App;