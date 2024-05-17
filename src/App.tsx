import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  const [color, setColor] = useState("#b32aa9");
  return (
    <TonConnectUIProvider manifestUrl="https://firebasestorage.googleapis.com/v0/b/pure-colors.appspot.com/o/ton-manifest.json?alt=media&token=fe5a096b-1ab8-4d6f-9c50-63370bf9f6be">
      <div className="App">
        <Header color={color} ></Header>
        <Content color={color} setColor={setColor}></Content>
        <Footer color={color}></Footer>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
