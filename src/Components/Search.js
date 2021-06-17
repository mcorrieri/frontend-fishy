function Search({ searchTerm, onUpdatedSearch }) {
  return (
    <div className="ui search">
      <form className="ui icon input">
        <input
          type="text"
          placeholder="Search Posts"
          className="search-icon"
          value={searchTerm}
          onChange={(e) => onUpdatedSearch(e.target.value)}
        />
        <i className="search icon"></i>
      </form>
    </div>
  );
}
export default Search;
