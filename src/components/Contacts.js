import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
      contacts: [    
      { 
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '777-777-7777' 
      },
      { 
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        phone: '111-111-1111' 
      },
      { 
        id: 3,
        name: 'Joe Blowe',
        email: 'jblowe@gmail.com',
        phone: '222-222-2222' 
      }
    ]
   }; 
  
  
 render() {
    const { contacts } = this.state;
    
    return (
      <div>
        {contacts.map(contact => (
           <Contact 
             key={contact.id}
             contact={contact} 
           />
        ))}
      </div>
    )
  }
}

export default Contacts;