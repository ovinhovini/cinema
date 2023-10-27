const movies = [
  {
      name: 'Film 1',
      image: '',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
  {
      name: 'Film 1',
      image: 'image-link-1',
      releaseDate: '2022-01-01',
      price: 10,
      quantity: 100,
  },
];

const movieList = document.getElementById('movie-list');

movies.forEach((movie) => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const movieImage = document.createElement('img');
  movieImage.src = movie.image;

  const movieTitle = document.createElement('h2');
  movieTitle.textContent = movie.name;

  const movieReleaseDate = document.createElement('p');
  movieReleaseDate.classList.add('date');
  movieReleaseDate.textContent = movie.releaseDate;

  const moviePrice = document.createElement('p');
  moviePrice.classList.add('price');
  moviePrice.textContent = `$${movie.price}`;

  const movieQuantity = document.createElement('p');
  movieQuantity.classList.add('quantity');
  movieQuantity.textContent = `$${movie.quantity}`;


  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieReleaseDate);
  movieCard.appendChild(moviePrice);
  movieCard.appendChild(movieQuantity);

  movieList.appendChild(movieCard);
});
