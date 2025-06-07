import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home"
import theme from "./utils/theme"
import './App.css'

function App() {
  return (
      <Provider store={store}>
      <ConfigProvider theme={theme} >
        <Home />
    </ConfigProvider>
  </Provider>
  )
}

export default App
