import EstiloGlobal, { Container } from "./styles";
import store from "./store";
import Home from "./pages/Home";
import Add from "./pages/AddContact";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <EstiloGlobal />
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="add" element={<Add />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </Provider>
    );
}

export default App;
