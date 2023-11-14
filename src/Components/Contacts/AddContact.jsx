import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { GREEN, COMMENT, PINK } from "../../Helpers/Colors";
import { useState } from 'react';
import Contact from "./Contact";


const AddContact = ({
    loading,
    contact,
    setContactInfo,
    groups,
    createContactForm,
  }) => {
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <img src={require("../../Assets/girl-coding (1).png")}
                            height="500px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                left: "100px",
                                opacity: "80%",
                            }} />
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 fw-bold text-center" style={{ color: GREEN }}> ساخت مخاطب جدید </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: GREEN }} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form onSubmit={createContactForm}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                value={contact.fullname}
                                                onChange={setContactInfo}
                                                type="text"
                                                required={true}
                                                className="form-control"
                                                placeholder="نام و نام خانوادگی" />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                value={contact.photo}
                                                onChange={setContactInfo}
                                                type="text"
                                                required={true}
                                                className="form-control"
                                                placeholder="آدرس تصویر" />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                value={contact.mobile}
                                                onChange={setContactInfo}
                                                type="number"
                                                required={true}
                                                className="form-control"
                                                placeholder="شماره موبایل" />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="email"
                                                value={contact.email}
                                                onChange={setContactInfo}
                                                type="email"
                                                required={true}
                                                className="form-control"
                                                placeholder="آدرس ایمیل" />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="job"
                                                value={contact.job}
                                                onChange={setContactInfo}
                                                type="text"
                                                required={true}
                                                className="form-control"
                                                placeholder="شغل" />
                                        </div>
                                        <div className="mb-2">


                                        <select
                                                name="group"
                                                value={contact.group}
                                                onChange={setContactInfo}
                                                required={true}
                                                className="form-control">
                                                <option value="">انتخاب گروه</option>

                                                {groups?.length > 0 &&
                                                
                                                    groups.map((group) => (
                                                        (<option key={group.id} value={group.id} >
                                                            {group.name}

                                                        </option>)
                                                        
                                                    )
                                                    )
                                                    }
                                            </select>
                                        </div>
                                        <div className="mx-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{ backgroundColor: PINK }}
                                                value=" ساخت مخاطب" />
                                            <Link to={"/contacts"}
                                                className="btn mx-2"
                                                style={{ backgroundColor: COMMENT }}> انصراف </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AddContact;