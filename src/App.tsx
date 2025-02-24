import SideBar from "./containers/SideBar";
import ContactList from "./containers/ContactList";
import EstiloGlobal, { Container } from "./styles";

function App() {
    return (
        <>
            <EstiloGlobal />
            <Container>
                <SideBar />
                <ContactList />
            </Container>
        </>
    );
}

export default App;
