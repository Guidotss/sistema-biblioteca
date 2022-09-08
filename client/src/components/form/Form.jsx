import { useForm } from "../../hooks/barrel"
import "./form.css"

export const Form = () => {

  const { input,onInputChange,reset } = useForm({
    title:"",
  })

  const { title } = input; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
    }
    reset(); 
  }

  return (
    <form onSubmit={ handleSubmit }>
        <input className="input" type="text" placeholder="Buscar" name="title" onChange={ onInputChange } value={ title }/>
        <button className="btn btn-primary">Search</button>
    </form>
  )
}