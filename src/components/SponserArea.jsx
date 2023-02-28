import Clients from "./Clients";
export default function SponserArea() {
  const sponsers = [
    {
      title: "HP",
      imagePath: "src/assets/images/sponsers/hp.png",
    },
    {
      title: "Dermalog",
      imagePath: "src/assets/images/sponsers/dermalog.png",
    },
    {
      title: "EMC",
      imagePath: "src/assets/images/sponsers/emc.png",
    },
    {
      title: "VMware",
      imagePath: "src/assets/images/sponsers/vmware.png",
    },
    {
      title: "Lenovo",
      imagePath: "src/assets/images/sponsers/lenovo.png",
    },
    {
      title: "Microsoft ",
      imagePath: "src/assets/images/sponsers/microsoft.png",
    },
    {
      title: "Cisco",
      imagePath: "src/assets/images/sponsers/cisco.png",
    },
  ];
  return (
    <div className="infetech-sponser-area infetech-sponser-area-2 sponsers">
      <div className="container">
        <Clients clients={sponsers} />
      </div>
    </div>
  );
}
