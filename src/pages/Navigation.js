import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation=()=>{

    return(
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' />
                    <Nav>
                        <Nav.Link href='./'>Home</Nav.Link>
                        <Nav.Link href='./usestate'>Usestate</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;