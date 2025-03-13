import AddButton from "../../components/AddButton";
import ContactList from "../../containers/ContactList";
import SideBar from "../../containers/SideBar";

const Home = () => {
    return (
        <>
            <SideBar showFilters />
            <ContactList />
            <AddButton />
        </>
    );
};

export default Home;
