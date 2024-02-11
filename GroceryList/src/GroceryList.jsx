import { useState, useEffect } from "react";
import "./GroceryList.css";
function GroceryList(idx){
    const [EditElem, setEditElem] = useState("");
    const [Items, setItems] = useState([]);
    const [Remove, setRemove] = useState(false);
    const [Add, setAdd] = useState(false);
    const [Edit, setEdit] = useState(false);
    const [Empty, setEmpty] = useState(false);
    const [AllClear, setClear] = useState(false);
    function CreateItem(){
        if (document.getElementById("AddBtn").textContent == "Add Item"){
            const SearchBar = document.getElementById('SearchBar').value;
            if (SearchBar.length > 0){
                setItems(prevItems => [...prevItems, SearchBar]);
                setAdd(true);
            }
            else{
                setEmpty(true);
            }
        }
        else{
            const SearchBar = document.getElementById('SearchBar').value;
            if (SearchBar.length > 0){
                setItems(()=>{
                    const updatedElements = [...Items];
                    updatedElements[EditElem] = SearchBar;
                    return updatedElements;
                });
                document.getElementById('AddBtn').textContent = "Add Item";
                setEdit(true);
            }
            else{
                setEmpty(true);
            }
        }    
        document.getElementById('SearchBar').value = "";
    }
    function ClearAll(){
        setItems([]);
        setClear(true);
    }
    function deleteItem(Elem){
        setItems(prevItem => prevItem.filter(Item => Item != Elem));
        setRemove(true);
    }
    function EditNow(idx, Item){
        document.getElementById('SearchBar').value = Item;
        document.getElementById("AddBtn").textContent = "Edit Item";
        setEditElem(idx);
    }
    useEffect(()=>{
        setTimeout(()=>{
            Add ? setAdd(!Add) : setAdd(Add);
            Remove ? setRemove(!Remove) : setRemove(Remove);
            Edit ? setEdit(!Edit) : setEdit(Edit);
            AllClear ? setClear(!AllClear) : setClear(AllClear);
            Empty ? setEmpty(!Empty) : setEmpty(Empty);
        }, 2000);
    }, [Add, Remove, Edit, AllClear, Empty]);
    return(
        <>
            <div className="parent-div">
                {Remove && <div className="alert" id="Danger"><i class="fa-solid fa-circle-xmark"></i> Item Removed!</div>}
                {Add && <div className="alert" id="Success"><i class="fa-solid fa-circle-check"></i> Item Added!</div>}
                {Empty && <div className="alert" id="empty"><i class="fa-solid fa-circle-xmark"></i> Please provide Value!</div>}
                {Edit && <div className="alert" id="Edit"><i class="fa-solid fa-circle-check"></i> Item Edited!</div>}
                {AllClear && <div className="alert" id="clear"><i class="fa-solid fa-circle-xmark"></i> Items Removed!</div>}
                <div className="Heading">Grocery Bud</div>
                <div className="Enter">
                    <input type="text" className="InputArea" id="SearchBar" placeholder="Your Itenary!"/>
                    <button className="AddBtn" onClick={CreateItem} id="AddBtn">Add Item</button>
                </div>
                <div className="List-of-Items" id="ListofItems">
                    {Items.map((Item, idx) => (<div className="Item" id={idx}>{Item} <div className="options"><i class="fa-solid fa-trash" onClick={()=>deleteItem(Item)}></i><i class="fa-solid fa-pen-to-square" onClick={() => EditNow(idx, Item)}></i></div></div>))}
                </div>
                {Items.length > 0 && <button className="clearAll" id="clear" onClick={ClearAll}>CLEAR ALL</button>}
            </div>
        </>
    );
}
export default GroceryList;