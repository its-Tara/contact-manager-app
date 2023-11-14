import { PINK } from "../../Helpers/Colors";
const Search = ({ query, search }) => {
    return (
        <form className="navbar-form navbar-left d-flex " dir="ltr">
            <div class="form-group">
                <input
                 className="form-control w-100" 
                 type="text" 
                 placeholder="جستجو" 
                 style={{textAlign:'right'}} 
                 value={query.text}
                 onChange={search}/>
            </div>
            <button className="btn btn-outline-light"><i className="fa fa-search" style={{color:PINK}}></i></button>

        </form>

    )
}

export default Search;