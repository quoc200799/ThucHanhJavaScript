import { useState } from 'react'

function TodoList() {
    const [name, setName] = useState("");
    const [list, setList] = useState(["Item 1","Item 2","Item 3"]);
   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() == "") {
            alert("Phai nhap gia tri input")
        } else {
            setList([...list, name]);
            setName("");
        }

    }
    const handelDelete = () => {
        setList(list => list.slice(0, list.length - 1));
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="lname" value={name}
                    onChange={e =>
                        setName(e.target.value)
                    } />
                <input type="submit" value="Submit" />
            </form>
            <input type="submit" value="Delete" onClick={handelDelete} />
            <ul id="list">            
                {list.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </>

    )
}

export default TodoList;
