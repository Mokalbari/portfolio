import Header from "./components/Header"
import Stack from "./components/Stack"

const App = () => {
  return (
    <div className="mx-4 my-8 max-w-[600px] rounded-lg border border-black bg-white px-4 shadow-full sm:mx-auto sm:my-16 sm:px-16 sm:py-8">
      <Header />
      <Stack />
    </div>
  )
}

export default App
