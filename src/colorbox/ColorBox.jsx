import { useState } from 'react'
import styles from './style.css'


function ColorBox() {
    const [name, setName] = useState("");
    const [colors, setColors] = useState([
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400']);
    const [newColors, setNewColors] = useState([
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400'])
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewColors(newColors.concat(colors));

    }
    const handelDelete = (index) => {
        var array = [...newColors]; 
        if (index !== -1) {
            array.splice(index, 1);
            setNewColors(array);
        }
    }

    return (
        <div className={styles.wrap}>
            <h1> JS DOM</h1>
            <button id="btn" onClick={handleSubmit}>More boxes</button>
            <h4 id="score"> Total box:<span className="points">{newColors.length}</span></h4>

            <div >
                {newColors.map((item, index) =>
                    <div
                        style={{
                            backgroundColor: item,
                            width: "100px",
                            height: "100px",
                            borderRadius: "10px",
                            float: "left",
                            margin: "5px",
                        }}
                        key={index}
                        onClick={() => handelDelete(index)}
                    ></div>

                )}
            </div>
        </div>

    )
}

export default ColorBox
