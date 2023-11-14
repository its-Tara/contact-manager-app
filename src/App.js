import { useState, useEffect } from 'react';
import './App.css';
import { AddContact, EditContact, ViewContact, Contacts, Navbar, } from './Components';
import { Routes, Route, useNavigate, Navigate, useParams } from 'react-router-dom';

import { getAllContacts , getAllGroups, createContact, deleteContact } from './Services/contactService';
import { confirmAlert } from "react-confirm-alert";
import {
  CURRENTLINE,
  FOREGROUND,
  PURPLE,
  YELLOW,
  COMMENT,
} from "./Helpers/Colors";

const App = () => {
  const [getContacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getGroups, setGroups] = useState([]);
  const navigate = useNavigate();
  const [ getContact , setContact] = useState({
    fullname :"",
    photo : "",
    mobile :"",
    email :"",
    job :"",
    group :"",
  });

  const [query, setQuery] = useState({ text: "" });
  const [getFilteredContacts, setFilteredContacts] = useState([]);
 
 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("http://localhost:9000/contacts");
        // console.log(response);

        const { data: contactsData } = await getAllContacts();
        
        const { data: groupsData } = await getAllGroups();
        
        setContacts(contactsData);
        setFilteredContacts(contactsData);
        setGroups(groupsData);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createContact(getContact);

      if (status === 201) {
        setContact({});
        navigate ("/contacts");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const setContactInfo = (event) => {
    setContact({
      ...getContact,
      [event.target.name]: event.target.value,
    });
  };

  const confirm = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: CURRENTLINE,
              border: `1px solid ${PURPLE}`,
              borderRadius: "1em",
            }}
            className="p-4"
          >
            <h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
            <p style={{ color: FOREGROUND }}>
              مطمئنی که میخوای مخاطب {contactFullname} رو پاک کنی ؟
            </p>
            <button
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
              className="btn mx-2"
              style={{ backgroundColor: PURPLE }}
            >
              مطمئن هستم
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: COMMENT }}
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };

  const removeContact = async (contactId) => {
    try {
      setLoading(true);
      const response = await deleteContact(contactId);
      if (response) {
        const { data: contactsData } = await getAllContacts();
        setContacts(contactsData);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  const contactSearch = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allContacts = getContacts.filter((contact) => {
      return contact.fullname
        
        .includes(event.target.value);
    });

    setFilteredContacts(allContacts);
  };

  
  
  
  return (
    <div className="App">

      <header className="App-header">
        <Navbar query={query} search={contactSearch}/>
        <Routes>
          <Route path='/' element={<Navigate to="/contacts" />} />
          <Route path='/contacts' element={<Contacts 
          contacts={getFilteredContacts}
           loading={loading} 
           confirmDelete={confirm} />} />
          <Route path="/contacts/add" element={<AddContact
           loading={loading}
           setContactInfo={setContactInfo}
           contact={getContact}
           groups={getGroups}
           createContactForm={createContactForm} />} />
          <Route path='/contacts/:contactId' element={<ViewContact  loading={loading} />} />
          <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        </Routes>



      </header>
    </div>
  );
}

export default App;
