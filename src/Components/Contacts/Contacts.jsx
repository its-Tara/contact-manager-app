import { PINK , CURRENTLINE , ORANGE } from "../../Helpers/Colors"
import { Fragment } from "react";
import Contact from "./Contact";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
const Contacts = ({contacts , loading, confirmDelete}) => {
    return (
        <>
            <section className="container">
                <section className="grid">
                    <section className="row">
                        <section className="col">
                            <p className="h3">
                                <Link to={"/contacts/add"} className="btn mx-2" style={{ backgroundColor: PINK }}> ایجاد مخاطب جدید
                                    <i className="fa fa-plus-circle mx-2"></i> </Link>
                            </p>
                        </section>
                    </section>
                </section>
            </section>
            {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {contacts.length > 0 ? (
              contacts.map((c) => <Contact key={c.id} 
              confirmDelete={() => confirmDelete(c.id, c.fullname)}
              contact={c} />)
            ) : (
                <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  مخاطب یافت نشد ...
                </p>
                <img src={require("../../Assets/error.gif")} alt=" پیدا نشد" className="w-25 rounded"/>
                    
                
                
              </div>
            )}
                   
                </div>
            </section>)
            }
            
        </>
    );
};
export default Contacts;