import React from 'react';

const MovieList = ({ movies }) => {
    return (
        <div className="container-fluid movie-container text-center">
            {movies.length === 0 ? ( // Check if the movie list is empty
                <h3 style={{ margin: "20px", color: "#555" }}>No Movie Found</h3> // Display message
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    {movies.map((movie) => (
                        <div key={movie.id} className="col">
                            <div className="card h-100">
                                <img 
                                    src={movie.poster}
                                    className="card-img-top"
                                    alt={movie.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">
                                        Genre: {movie.genre}
                                        <br />
                                        Rating: {movie.rating}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieList;
