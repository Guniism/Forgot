import Footer from './ui/footer'
import Work from './ui/work'

function App() {
  return (
    <div id="bod" >
      <div id="content" className="flex flex-col items-center justify-center h-screen">
            {/* <h1 className='font-medium text-4xl mb-1'>ลืม - FORGOT</h1> */}
            <Work />
      </div>
      <Footer />
    </div>
  )
}

export default App
