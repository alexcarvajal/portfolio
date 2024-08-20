import { Nav, NavLink, Bars, NavMenu, NavBtn} from "./HeaderElements";
const Header = ({ toggle }) => {
    return (
        <div className="Container" style={{ padding: 0 }}>
            <Nav>
                <NavMenu>
                    <NavLink className="menu-item" to="projects" >
                        Projects
                    </NavLink>
                    <NavLink className="menu-item" to="about"  >
                        About
                    </NavLink>
                    <NavLink className="menu-item" to="contact"  >
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <a
                        className="btn PrimaryBtn"
                        href="/AlexFabianCarvajalFigueroa.pdf"
                        target="_blank"
                        rel="noopener noreferrer" 
                        download={true}
                    >
                        Download CV
                    </a>
                </NavBtn>
                <Bars onClick={toggle} />
            </Nav>
        </div>
    )
}
export default Header;