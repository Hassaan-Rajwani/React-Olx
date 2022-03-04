import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "../navbar/navbar";
import Signup from "../../views/signup/signup";
import Login from "../../views/login/login";
import Sell from "../sell/sell";
import AddDetail from "../addDetail/addDetail";
import Profile from "../profile/profile";

function router() {
    return (
        <div>
            <BrowserRouter BrowserRouter >
                <Routes>
                    <Route path="/signUp" element={<Signup />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Navbar />} />
                    <Route path="/sellpage" element={<Sell />} />
                    <Route path="/adDetail/:adId" element={<AddDetail />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter  >
        </div>
    )
}
export default router