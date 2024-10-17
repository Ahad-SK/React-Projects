function Footer(props) {
    const { showModal, data} = props; // No ShowModal needed here
    return (
      <footer>
        <div className="bggradient">
          <h2>{data?.title}</h2>
          <h1>APOD. © Ahad-Sk</h1>
          <button onClick={showModal}>
            <i className="fa-solid fa-circle-info"></i>
          </button>
        </div>
      </footer>
    );
  }
  export default Footer;
  