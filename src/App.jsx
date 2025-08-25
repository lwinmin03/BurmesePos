import Layout from './pages/Layout.jsx';
import useWindowSize from "./hooks/WindowSize.jsx";
function App() {
  useWindowSize()
  return (
<main className="App font-inter  bg-gray-50">
  <Layout/>
</main>
  )
}

export default App
