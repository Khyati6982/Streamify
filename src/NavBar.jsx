import React from 'react'; 

const Navbar = ({ searchQuery, setSearchQuery, selectedGenre, setSelectedGenre, genres, setSelectedRating }) => { 
    return ( 
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#343a40", position: "fixed", top: 0, width: "100%", zIndex: 1000 }}> 
            <div className="d-flex justify-content-between align-items-center" style={{ width: "100%" }}> 
                <span className="navbar-brand text-white fw-bold fs-3" style={{ margin: 0, padding: 0 }}>Streamify</span> 
                <form className="d-flex align-items-center" style={{ gap: "10px", flexGrow: 1, justifyContent: "flex-end", margin: 0 }}> 
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Search by Title" 
                      value={searchQuery} 
                      onChange={(e) => setSearchQuery(e.target.value)} 
                      style={{ maxWidth: "200px" }} 
                    /> 
                    <select 
                      className="form-select" 
                      value={selectedGenre} 
                      onChange={(e) => setSelectedGenre(e.target.value)} 
                      style={{ maxWidth: "150px" }} 
                    > 
                        <option value="">All Genres</option> 
                        {genres.map((genre, index) => ( 
                            <option key={index} value={genre}> 
                                {genre} 
                            </option> 
                        ))} 
                    </select> 
                    <select 
                      className="form-select" 
                      onChange={(e) => setSelectedRating(e.target.value)} 
                      style={{ maxWidth: "150px" }} 
                    > 
                      <option value="">All Ratings</option> 
                      <option value="5">5 Stars</option> 
                      <option value="4">4 Stars</option> 
                      <option value="3">3 Stars</option> 
                      <option value="2">2 Stars</option> 
                      <option value="1">1 Star</option> 
                    </select> 
                </form> 
            </div> 
        </nav> 
    ); 
}; 

export default Navbar;