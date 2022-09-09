import { useContext,useState } from "react"
import { useForm,useFetch } from "../../hooks/barrel"
import { BooksContext } from "../../context/BooksContext"
import "./form.css"

export const Form = () => {

  const { input,onInputChange,reset } = useForm({
    title:"",
  });

  const { title } = input; 

  const { setBookAuthor,setIsFormSend } = useFetch();

  const handleSubmit = (e) => {

    e.preventDefault();
    setBookAuthor(input.title);
    setIsFormSend(true);
    reset();
  }
  return (
    <form onSubmit={ handleSubmit }>
        <input className="input" type="text" placeholder="Buscar" name="title" onChange={ onInputChange } value={ title }/>
        <button className="btn btn-primary">Search</button>
    </form>
  )
}