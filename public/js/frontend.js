const characterList = document.getElementById('charactersContainer');

// Fetch characters from the server and display them
async function fetchCharacters() {
    const response = await fetch('/characters');  // Ensure this matches your GET route
    const characters = await response.json();
    characterList.innerHTML = '';  // Clear the existing list

    characters.forEach((character, index) => {
        const characterItem = document.createElement('div');
        characterItem.classList.add('character-item');
        characterItem.innerHTML = `
            <strong>${character.name}:</strong> ${character.description}
            <button onclick="deleteCharacter(${index})">Delete</button>
            <button onclick="editCharacter(${index}, '${character.name}', '${character.description}')">Edit</button>
        `;
        characterList.appendChild(characterItem);
    });
}

// Add a new character
document.getElementById('addCharacterForm').addEventListener('submit', async (event) => {
    event.preventDefault();  // Prevent default form submission

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    const response = await fetch('/submitCharacter', {  // Ensure this points to the correct route
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
    });

    if (response.ok) {  // Check if response is successful
        await fetchCharacters();  // Refresh character list
        document.getElementById('addCharacterForm').reset();  // Clear form
    } else {
        const errorData = await response.json();
        console.error('Error:', errorData);  // Log error response
    }
});

// Delete a character
async function deleteCharacter(index) {
    const response = await fetch(`/characters/${index}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        await fetchCharacters();  // Refresh character list
    }
}


async function editCharacter(index, currentName, currentDescription) {
    const newName = prompt('Enter new name:', currentName);
    const newDescription = prompt('Enter new description:', currentDescription);

    if (newName || newDescription) {
        const response = await fetch(`/characters/${index}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName, description: newDescription }),
        });

        if (response.ok) {
            await fetchCharacters();  // Refresh character list
        } else {
            console.error('Error updating character:', await response.json());
        }
    }
}

// Load characters on page load
window.onload = fetchCharacters;
