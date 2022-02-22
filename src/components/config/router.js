import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "../navbar/navbar";
import Signup from "../../views/signup/signup";
import Login from "../../views/login/login";

function router() {
    return (
        <div>
            <BrowserRouter BrowserRouter >
                <Routes>
                    <Route path="/signUp" element={<Signup />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Navbar />} />
                </Routes>
            </BrowserRouter  >
        </div>
    )
}
export default router