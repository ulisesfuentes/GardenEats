import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    const [ description, setDescription ] = useState('')
    const [ stock, setStock ] = useState(0)

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "products", id)
        const data = {description: description, stock: stock}
        await updateDoc(product, data)
        navigate('/')
    }
    const getProductById = async (id) => {
        const product = await getDoc( doc(db, "products", id) )
        if(product.exists()) {
            //console.log(product.data())
            setDescription(product.data().description)    
            setStock(product.data().stock)
        }else{
            console.log('El producto no existe')
        }
    }
    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])
}