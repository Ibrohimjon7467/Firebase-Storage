import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/firebaseConfig";

function AddBook() {
    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const docRef = await addDoc(collection(db, 'books'), {
            title
        })

        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Add Book</span>
                </label>
                <input
                    type="text"
                    placeholder="Title..."
                    className="input input-bordered w-full max-w-xs"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <button className="btn btn-secondary my-10">Add</button>
        </form>
    )
}

export default AddBook