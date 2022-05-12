import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Fundamentals from './src/fundamentals/Fundamentals';
import './style.css';
import Interactions from './src/interactions/Interactions';

function Layout() {
  return (
    <div className="layout">
      <nav className="layout__header">
        <Link to="fundamentals">Fundamentals</Link>
        <Link to="interaction">Interaction</Link>
        <Link to="reducers">Reducers</Link>
        <Link to="context">Context</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Fundamentals />}></Route>
          <Route path="/fundamentals" element={<Fundamentals />}></Route>
          <Route path="/interaction" element={<Interactions />}></Route>
          <Route
            path="/reducers"
            element={<h1>Typescript App reducers</h1>}
          ></Route>
          <Route
            path="/context"
            element={<h1>Typescript App context</h1>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<RouteConfig />, document.getElementById('root'));
