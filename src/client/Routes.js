
import App from './App';
import Homepage from './pages/Homepage';



export default [{

    ...App,
    routes: [{
        ...Homepage,
        path: "/",
        exact: true
    }]
}]