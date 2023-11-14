import Search from "./Contacts/Search";
import { PINK, BACKGROUND } from "../Helpers/Colors";
const Navbar = ({query, search}) => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm w-100 shadow" style={{ backgroundColor: BACKGROUND }}>
            <div className="navbar-nav container">
                <div className="navbar-brand">
                    <i className="fa fa-id-badge" style={{ fontSize: "larger", color: PINK }}> اپلیکیشن مدیریت مخاطبان </i>
                </div>
                <Search query={query} search={search}/>
            </div>
        </nav>

    )
}

export default Navbar;