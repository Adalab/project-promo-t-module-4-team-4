const Pagination = ({ currentPage, prevPage, nextPage, projectList }) => {

console.log(projectList);

    const handlePrev = (ev) => {
        ev.preventDefault();
        return prevPage();
    };

    const handleNext = (ev) => {
        ev.preventDefault();
        if (projectList.length > 0) {
        return nextPage();}
    };

    return (
      <>
      <form action="back" className="pagination">
        <button className="pagination__button" onClick={handlePrev}>← Anterior</button>
        <span className='pagination_text'>Página {currentPage}</span>
        <button className="pagination__button" onClick={handleNext}>Siguiente →</button>
      </form>
      </>
    );
  };
  
  export default Pagination;