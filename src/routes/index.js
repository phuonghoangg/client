import OnlyHeader from '~/layouts/OnlyHeader';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
import ListDoc from '~/pages/ListDoc';
import Login from '~/pages/Login';
import Logout from '~/pages/Logout/Logout';
import Register from '~/pages/Register';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/list', component: ListDoc },
    { path: '/upload', component: Upload, layout: OnlyHeader },
    { path: '/detail/:id', component: Detail, layout: OnlyHeader },
    { path: '/login', component: Login, layout: OnlyHeader },
    { path: '/register', component: Register, layout: OnlyHeader },
    { path: '/logout', component: Logout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
