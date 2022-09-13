import { Link } from "react-router-dom"

export const BookCard = ({ bookData }) => {
    return(
        <div className='card'>
            <div className='row no-gutter'>
                <div className='col-4'>
                    <img className='card-img' src={bookData.image} alt={`${bookData.image}.jpg`} />
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className="card-title">{bookData.title}</h5>
                        <h3 className="card-text">{bookData.author}</h3>
                    </div>
                    <button className='btn btn-outline-warning'>
                        <Link to={`${bookData._id}`} >Mas...</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}