import {Link} from "react-router-dom";

const Homepage=()=>{
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link to="/usestate">
                            Usestate hook
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Homepage;