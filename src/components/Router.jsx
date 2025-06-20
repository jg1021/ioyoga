import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import About from './About';
import Programs from './Programs';
import Teachers from './Teachers';
import Pricing from './Pricing';


/*
const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false  );
    return(
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path='/' element={ <Home userObj={userObj} /> } />
                        <Route exact path='/profile' element={ <Profile userObj={userObj} refreshUser={refreshUser} /> } />                     
                    </>                    
                ) : (
                    <Route exact path='/' element={ <Auth /> } />
                )}
                
            </Routes>
        </Router>
    );
};*/

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ioyoga" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/pricing" element={<Pricing />} />
        </Routes>
    )

}


export default AppRouter;