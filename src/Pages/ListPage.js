import { useState, createContext } from 'react';

import Header from '../Components/Header';
import Input from '../Components/Input';
import List from '../Components/List';

import styles from '../Styles/App.module.css';
import '../App.css';

const DataProvider = createContext()

//const                                                                                                                                                = createContext()
function ListPage() {

    const [item, setItem] = useState({
        id: "",
        task_description: "",
        task_name: "",
        isChecked: false
    });
    const [list, setList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.container}`}>
            <Header></Header>
            <br></br>
            <DataProvider.Provider
                value={{ item, setItem, list, setList, isOpen, setIsOpen }}
            >
                <Input item={item} setItem={setItem} />
                <List />
            </DataProvider.Provider>
            <br></br>
        </div>
    )
}

export default ListPage;
export { DataProvider }