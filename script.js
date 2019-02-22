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
    poster: './images/kl.jpg'
}];
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (React.createElement('h2', {}, this.props.title))
    }
})
var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return (React.createElement('p', {}, this.props.desc))
    }
})
var MovieDirector = React.createClass({
    propTypes: {
        director: React.PropTypes.string.isRequired
    },
    render: function() {
        return (React.createElement('p', {}, ('Directed by: ' + this.props.director)))
    }
})
var MoviePremiere = React.createClass({
    propTypes: {
        premiere: React.PropTypes.number.isRequired
    },
    render: function() {
        return (React.createElement('p', {}, ('Premiere: ' + this.props.premiere)))
    }
})
var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },
    render: function() {
        return (React.createElement('img', {
            src: this.props.poster
        }, ))
    }
})

var Movie = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    render: function() {
        var moviesElements = this.props.items.map(function(movie) {
            return React.createElement('li', {key: movie.id},
             React.createElement(MovieTitle, {title: movie.title}),
             React.createElement(MovieDesc, {desc: movie.desc}),
             React.createElement(MovieDirector, {director: movie.director}),
             React.createElement(MoviePremiere, {premiere: movie.premiere}),
             React.createElement(MoviePoster, {poster: movie.poster}));
        });
        return (React.createElement('ul', {}, moviesElements));
    }
})
var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(Movie, {items: movies}));
ReactDOM.render(element, document.getElementById('app'));