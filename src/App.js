import './App.css';
import {useState} from "react";
import {AiOutlineClose, AiTwotoneEdit, GrCompliance, RiTempColdFill} from "react-icons/all";

function App() {

    const INITIAL_DATA = [
        {id: 0,name: "Domates Al", completed: false},
        {id: 1,name: "30 sayfa kitap okumayı unutma", completed: true}
    ];

    const [list,setList] = useState(INITIAL_DATA);
    const [input,setInput] = useState('');
    const [edit,setEdit] = useState();
    const [inputItemData,setInputItemData] = useState('')

    const inputData = (item) => {
        if(item.target.value === ' ') {
            return false;
        } else {
            setInput(item.target.value)
        }
    };
    const handleItemAdd = () => {
        if(input === '') {
            alert("Hacım lütfen bişiler yazar mısın? Bak içerisi bomboş..")
        } else {
            setList([...list, {id: Date.now(),name: input,complete: false}]);
            setInput('');
        }
    };
    const handleItemMuted = (listItem) => {
        setList(list.map(item => item.id === listItem.id ? {...item, completed: !item.completed} : item))
    };
    const handleCompletedClear = () => {setList(list.filter(item => !item.completed))};
    const handleAllClear = () => {setList([])};

    const handleItemComplete = (item) => {
        setEdit(item.id);
    };
    const inputDataItem = (item) => {
        if(item.target.value === '') {
            return false
        } else {
            setInputItemData(item.target.value)
        }
    };
    const handleItemAddItem = (item) => {
        if(inputItemData === '') {
            alert("Reis bak ikidir aynı şeyi yapıyorsun şunun içini doldur.")
        } else {
            setList(list.map( listItem => listItem.id === item.id ? {...item, name: inputItemData} : listItem));
            setInputItemData('');
        }
    };
    const handleCloseChangeItemName = () => {
        setEdit(-1);
        setInputItemData('');

    };

  return (

    <div className="App">
        <h1 className="todo-list-title">TODO LIST - <small>Complete</small></h1>
        <div className="todo-add">
          <input value={input} onChange={inputData} type="text"/>
          <button onClick={handleItemAdd} >Ekle</button>
      </div>
        <div className="todo-list">
            {list.map( item => {
                return <div  key={item.id} className={item.completed ? 'todo-item complete' : 'todo-item' }>
                    <span>{item.name}</span>
                    <div className="todo-item-actions">
                        <span onClick={() => handleItemComplete(item)} className="todo-item-edit"> <AiTwotoneEdit /> </span>
                        <span onClick={() => handleItemMuted(item)} className="todo-item-muted" ><GrCompliance /></span>
                    </div>
                    {edit === item.id && <div className="todo-add-item">
                        <input value={inputItemData} onChange={inputDataItem} type="text"/>
                        <button onClick={ () => handleItemAddItem(item)}>Değiştir</button>
                        <span onClick={handleCloseChangeItemName} className="todo-add-item-close">
                            <AiOutlineClose />
                        </span>
                    </div>}
                </div>
            })}
        </div>

       <div className="form-buttons">
           <button onClick={handleCompletedClear} className="todo-clear">
               Tamamlanaları Temizle
           </button>
           <button onClick={handleAllClear} className="todo-all-clear">
               Tüm Listeyi Temizle
           </button>
       </div>
    </div>

  );
}

export default App;
