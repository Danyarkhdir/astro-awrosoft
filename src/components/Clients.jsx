export default function Clients({ clients }) {
  return (
    <div className="row infetech-sponser-slide">
      {clients.map((client) => {
        return (
          <div className="col-lg-3">
            <div className="infetech-sponser-item">
              <img src={`${client.imagePath}`} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
