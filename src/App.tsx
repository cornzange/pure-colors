import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  const [color, setColor] = useState("#b32aa9");
  return (
    <TonConnectUIProvider manifestUrl="https://%PUBLIC_URL%/ton-manifest.json">
      <div className="App">
        <Header color={color} ></Header>
        <Content color={color} setColor={setColor}></Content>
        <Footer color={color}></Footer>
      </div>
    </TonConnectUIProvider>

  );
}

export default App;
