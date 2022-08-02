import HomePage from './Pages/Homepage';
import LoginPage from './Pages/Loginpage';
import MapPage from './Pages/Mappage';
import ListPage from './Pages/Community/Listpage';
import EditPage from './Pages/Community/Editpage';

const routes = [
{
  path: '/',
  component: HomePage
},
{
  path: '/login',
  component: LoginPage
},
{
  path: '/map',
  component: MapPage
},
{
  path: '/community/edit',
  component: EditPage
},
{
  path: '/community',
  component: ListPage
},
];

export default routes;