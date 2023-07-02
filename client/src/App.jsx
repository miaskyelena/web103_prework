import { useState } from 'react'
import { useRoutes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCreator from './pages/create/createCreator'
import UpdateCreator from './pages/update/updateCreator'
import ReadCreator from './pages/read/readCreator';
import HomeFeed from './pages/home/homeFeed'
import Layout from './routes/layout'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [allCreators, setAllCreators] = useState([])

  let element = useRoutes([
    {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <HomeFeed allCreators={allCreators} setAllCreators={setAllCreators} /> },
          { path: '/create', element: <CreateCreator /> },
          { path: '/update/:id', element: <UpdateCreator allCreators={allCreators} /> },
          { path: '/read/:id', element: <ReadCreator allCreators={allCreators} /> },
        ]
      },
  ]);
  return (
    <>
      {element}
    </>
  )
}

export default App
