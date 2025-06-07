import Home from "./pages/Home"
import { ConfigProvider } from 'antd';
import theme from "./utils/theme"
import './App.css'

function App() {
  return (
     <ConfigProvider theme={theme} >
      <Home />
  </ConfigProvider>
  )
}

export default App
