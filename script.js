/*var element = 
React.createElement('div', {},
React.createElement('h1', {}, 'lista filmów'),
	React.createElement('ul', {},
		React.createElement('li', {},
			React.createElement('h2', {}, 'Harry Potter'),
				React.createElement('p', {}, )
		),

		React.createElement('li', {},
			React.createElement('h2', {}, 'Król lew'),
				React.createElement('p', {}, 'film o lwie')
		),
	)

);

*/
var movies = [{
	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    director: 'David Yates',
    premiere: 2007,
    poster: './images/hp.jpg'
}, {
	id: 2,
    title: 'Król lew',
    desc: 'film o lwie',
    director: 'Rob Minkoff',
    premiere: 1994,
    poster:'./images/kl.jpg'
}];



var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
     React.createElement('h2', {}, movie.title),
     React.createElement('p', {}, movie.desc),
     React.createElement('p', {}, ('Directed by: ' + movie.director)),
     	React.createElement('p', {}, ('Premiere: ' + movie.premiere)),
     	React.createElement('img', {src:movie.poster},)
     );
});

var element = React.createElement('div', {},
 React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements)
  );



ReactDOM.render(element, document.getElementById('app'));