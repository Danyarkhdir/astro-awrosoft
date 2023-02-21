export default function SearchPopup() {
  return (
    <div className="search-popup">
      <button className="close-search style-two">
        <span className="fal fa-times"></span>
      </button>
      <button className="close-search">
        <span className="fal fa-long-arrow-up"></span>
      </button>
      <form method="post" action="https://themexriver.com/wp/aginco/">
        <div className="form-group">
          <input
            type="search"
            name="search-field"
            value=""
            placeholder="Search Here"
            required=""
          />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
