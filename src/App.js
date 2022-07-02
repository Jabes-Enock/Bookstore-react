
import LivroContextProvider from './contexts/livroContext';
import Routes from './routes'

function App() {
  return (
    <div className='container'>
      <LivroContextProvider>
        < Routes/>
      </LivroContextProvider>
    </div>
  );
}

export default App;
