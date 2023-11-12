//// 1 with refresh

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebaseConfig";
// import { useState, useEffect } from 'react';

// export function useCollection(c) {
//     const [documents, setDocumens] = useState(null)
//     const [error, setError] = useState(null)

//     const ref = collection(db, c)

//     useEffect(() => {
//         getDocs(ref)
//             .then((snapshot) => {
//                 const results = []
//                 snapshot.docs.forEach((doc) => {
//                     results.push({ id: doc.id, ...doc.data() })
//                 })
//                 setDocumens(results)
//             })
//             .catch((error) => {
//                 setError(error)
//                 console.log(error)
//             })


//     }, [c])

//     return { documents, error }
// }


//// 2 no refresh

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState, useEffect } from 'react';

export function useCollection(c) {
    const [documents, setDocumens] = useState(null)
    const [error, setError] = useState(null)

    const ref = collection(db, c)

    useEffect(() => {
        const unsup = onSnapshot(ref, (snapshot) => {
            const results = []
            snapshot.docs.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setDocumens(results)
        })

        return () => unsup()

    }, [c])

    return { documents, error }
}