const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  // Se debe de poner .name, para que se aplique el selector. 
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  try {
    $n.textContent = 'cargando...';  // Se indica que se está procesando la información.
    const response = await fetch(`${usersEndpoint}/${username}`);  // Se realiza una indicación formada por el `usersEndpoint` y el `username` 
        if (!response.ok) {
      throw new Error('Network response was not ok');  //se anexó el if para identificar si se marca un error    }
    }
    const data = await response.json();  // la respuesta se transforma en JSON
    console.log(data);
    // Se modifica el contenido del DOM con los datos que tuvieron en la API, empleando diferentes valores preestablecidos si no están libres. 
    $n.textContent = data.name || 'No name provided';
    $b.textContent = data.blog || 'No blog provided';
    $l.textContent = data.location || 'No location provided';
  catch (err) {
    handleError(err);  // Se manda a llamar a la función de los errores, para saber si existe uno en la instrucción.
  } 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`;  // se anexa un message message para ver la instrucción que se ha dado(mensaje)
}

// Se manda a llamar la función displayUser 'stolinski', para saber cuál es el error que se marca. 
displayUser('stolinski').catch(handleError);
}