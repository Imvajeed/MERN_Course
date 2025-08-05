import { SearchBtn } from "./assets/HtmlAssests"


function App() {


  return (
    <>
      <p className="m-3 border-2 border-sky-100 p-3"> Hello, world</p>
      <div className="border-3 h-100 border-red-500 flex flex-col justify-center items-center">
        <div className="border-2 w-25 h25 m-2">div-1</div>
        <div className="border-2 w-25 h25 m-2">div22</div>
        <div className="border-2 w-25 h25 m-2">div33</div>
        <SearchBtn />
        <SearchBtn />
      </div>
    </>
  )
}

export default App
