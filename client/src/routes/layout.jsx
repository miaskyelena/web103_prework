import { Nav, Navbar, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
export default function Layout(){

    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"> Women Tech Content Creators</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
        </>
    )
}