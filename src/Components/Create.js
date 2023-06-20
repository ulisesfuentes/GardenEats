import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
  const [ description, setDescription ] = useState('')
  const [ stock, setStock ] = useState(0)
  const navigate = useNavigate()

  const productsCollection = collection(db, "products")
 
  const store = async (e) => {
    e.preventDefault()
    await addDoc( productsCollection, { description: description, stock: stock } )
    navigate('/')
    //console.log(e.target[0].value)
  } 
}