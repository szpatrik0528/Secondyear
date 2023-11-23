document.addEventListener('DOMContentLoaded', () => {
    const clientList = document.getElementById('clientList');
    const addClientForm = document.getElementById('addClientForm');
    const deleteClientForm = document.getElementById('deleteClientForm');
    const updateClientForm = document.getElementById('updateClientForm');
  
    // Összes ügyfél lekérdezése és megjelenítése
    fetch('http://localhost:3000/clients')
      .then(response => response.json())
      .then(clients => {
        clients.forEach(client => {
          const li = document.createElement('li');
          li.textContent = `ID: ${client.id}, Név: ${client.name}, Tagdíj: ${client.membershipFee}`;
          clientList.appendChild(li);
        });
      });
  
    // Új ügyfél hozzáadása
    addClientForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const membershipFee = document.getElementById('membershipFee').value;
  
      fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, membershipFee }),
      })
        .then(response => response.json())
        .then(newClient => {
          const li = document.createElement('li');
          li.textContent = `ID: ${newClient.id}, Név: ${newClient.name}, Tagdíj: ${newClient.membershipFee}`;
          clientList.appendChild(li);
        });
    });
  
         // Ügyfél törlése
         deleteClientForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const clientIdToDelete = document.getElementById('clientIdToDelete').value;
     
            fetch(`http://localhost:3000/clients/${clientIdToDelete}`, {
              method: 'DELETE',
            })
              .then(response => response.text())
              .then(message => {
                alert(message); // Show a simple alert for the demo, you might want to handle this differently in a real application
                // Refresh the client list after deletion
                location.reload();
              });
          });
     
          // Ügyfél adatainak módosítása
          updateClientForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const clientIdToUpdate = document.getElementById('clientIdToUpdate').value;
            const updatedName = document.getElementById('updatedName').value;
            const updatedMembershipFee = document.getElementById('updatedMembershipFee').value;
     
            fetch(`http://localhost:3000/clients/${clientIdToUpdate}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: updatedName, membershipFee: updatedMembershipFee }),
            })
              .then(response => response.json())
              .then(updatedClient => {
                alert('Ügyfél adatai frissítve'); // Show a simple alert for the demo, you might want to handle this differently in a real application
                // Refresh the client list after updating
                location.reload();
              });
          });
        });
     
  