import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const {contact , keyword} = useSelector((state) => state)
  const [filterList, setFilterList] = useState([]);

  useEffect((()=>{
    if(keyword !== ''){
      let list = contact.filter((item) => item.name.includes(keyword));
      setFilterList(list);
    }else{
      setFilterList(contact);
    }
  }),[keyword])

  const contactList = useSelector(state => state.contactList)
  return (
    <div>
      <SearchBox />
      num:{filterList.length}
      {filterList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  )
}

export default ContactList