import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

function CalculatorPage() {
  return (
    <>
      <main>
        <h2>Let&apos;s do some Math!</h2>
        <Calculator />
      </main>
    </>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to our page!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor,
          erat a pulvinar tristique, magna diam aliquam est, eu mattis ante diam
          non massa. Integer venenatis cursus turpis sit amet dapibus. Phasellus
          tincidunt, odio vitae fermentum volutpat, nisl ipsum sollicitudin
          turpis, quis accumsan dui ligula sed dolor. Etiam in dictum mi,
          viverra sagittis sapien. Etiam ac leo ipsum. Sed tincidunt, mi et
          lobortis ultricies, tellus sapien aliquet leo, scelerisque rutrum nunc
          ipsum non felis. Ut vel sapien quis purus vehicula feugiat in et est.
          Phasellus maximus, purus eu consectetur suscipit, ligula diam
          tincidunt ex, nec auctor mauris erat nec nunc.
        </p>
        <p>
          Etiam sagittis congue turpis, eu ornare odio gravida quis. Duis eget
          cursus sem. Suspendisse semper, metus eget maximus dapibus, lacus
          mauris maximus erat, a pellentesque velit enim ut eros. Vestibulum eu
          mi in purus mattis dignissim. Donec condimentum magna ex, non gravida
          metus pellentesque ut. Aliquam pharetra justo ipsum, non tincidunt
          enim ultricies vitae. Proin nec leo a ante pellentesque lacinia.
          Integer pretium tristique libero, at scelerisque elit tristique eu.
          Suspendisse nec tortor sed odio eleifend imperdiet. Proin pulvinar
          imperdiet congue. Nam vel urna et nunc congue tempus non ac augue.
          Etiam sit amet tellus vel ipsum dignissim molestie et ac dolor.
          Praesent mollis nisl quis ipsum maximus rutrum. Cras at aliquet arcu,
          non laoreet libero. Duis imperdiet ante dolor, vitae iaculis nulla
          volutpat a.
        </p>
      </main>
    </>
  );
}

function Quote() {
  return (
    <>
      <div className="quote">
        <q>
          Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding.
        </q>
        <cite>William Paul Thurston</cite>
      </div>
    </>
  );
}

export default App;
