import './App.css'
import Menu from './menu/menu'
import Topico from './topico/topico'
import Trend from './trends/trends'

export default function App() {
  return (
    <div>
      <Menu></Menu>
      <div className='container'>
        <Topico></Topico>
        <Trend></Trend>
      </div>
    </div>
  )
}
