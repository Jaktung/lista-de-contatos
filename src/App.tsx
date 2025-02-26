import SideBar from "./containers/SideBar";
import ContactList from "./containers/ContactList";
import EstiloGlobal, { Container } from "./styles";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <EstiloGlobal />
            <Container>
                <SideBar />
                <ContactList />
            </Container>
        </Provider>
    );
}

export default App;
