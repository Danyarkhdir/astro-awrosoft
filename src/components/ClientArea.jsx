import Clients from "./Clients";
export default function ClientArea() {
  const clients = [
    {
      title: "KRG Department of IT",
      imagePath: "src/assets/images/clients/dit-logo.png",
    },
    {
      title: "Ministry of Finance & Economy",
      imagePath: "src/assets/images/clients/ministry-finance.png",
    },
    {
      title: "DuCircle",
      imagePath: "src/assets/images/clients/ducircle-logo.png",
    },
    {
      title: "NassWallet",
      imagePath: "src/assets/images/clients/nasswallet-logo2.png",
    },
    {
      title: "Rwanga",
      imagePath: "src/assets/images/clients/rwanga-logo1.png",
    },
    {
      title: "InvestMyIdea",
      imagePath: "src/assets/images/clients/investmyidea-logo1.png",
    },
    {
      title: "Kurdistan TV",
      imagePath: "src/assets/images/clients/kurdistantv-logo.png",
    },
    {
      title: "Kurdistan24",
      imagePath: "src/assets/images/clients/k24-logo.png",
    },
    {
      title: "Zagros TV",
      imagePath: "src/assets/images/clients/zagrostv-logo.png",
    },
    {
      title: "GEG Reklam",
      imagePath: "src/assets/images/clients/gegreklam-logo2.png",
    },
    {
      title: "GEG Staffing",
      imagePath: "src/assets/images/clients/gegstaffing-logo1.png",
    },
    {
      title: "Erbil International Airport ",
      imagePath: "src/assets/images/clients/eia-logo.png",
    },
    {
      title: "Ministry of Higher Education",
      imagePath: "src/assets/images/clients/ministry-high-education.png",
    },
    {
      title: "LFU",
      imagePath: "src/assets/images/clients/lfu-logo1.png",
    },
    {
      title: "UoD",
      imagePath: "src/assets/images/clients/uod-logo11.png",
    },
    {
      title: "SUE",
      imagePath: "src/assets/images/clients/sue-logo.png",
    },
    {
      title: "Technical University of Ostrave / Erbil Campus",
      imagePath: "src/assets/images/clients/ostrava.png",
    },
    {
      title: "The Independent High Elections and Referendum Commission",
      imagePath: "src/assets/images/clients/khec.png",
    },
    {
      title: "Ministry of Planning",
      imagePath: "src/assets/images/clients/ministry-planning.png",
    },
    {
      title: "Next Generation Communication",
      imagePath: "src/assets/images/clients/ngc-logo.png",
    },
    {
      title: "Erbil Training Center",
      imagePath: "src/assets/images/clients/etc-logo.png",
    },
    {
      title: "Alhayat - Pepsi",
      imagePath: "src/assets/images/clients/alhayat-logo.png",
    },
    {
      title: "Kar Group",
      imagePath: "src/assets/images/clients/kargroup-logo.png",
    },
    {
      title: "XOR",
      imagePath: "src/assets/images/clients/xor-logo.png",
    },
    {
      title: "Shafaaq",
      imagePath: "src/assets/images/clients/shafaaq-logo.png",
    },
    {
      title: "Barzani National Memorial",
      imagePath: "src/assets/images/clients/bnm-logo.png",
    },
    {
      title: "Institute of Research & Development - Kurdistan",
      imagePath: "src/assets/images/clients/InstituteofReasearch-logo.png",
    },
    {
      title: "Gulan Media",
      imagePath: "src/assets/images/clients/gulan-media-logo.png",
    },
    {
      title: "IRDK",
      imagePath: "src/assets/images/clients/irdk-logo.png",
    },
    {
      title: "Aqua Tarin",
      imagePath: "src/assets/images/clients/aquatarin-logo.png",
    },
    {
      title: "Jisr Al-Furat",
      imagePath: "src/assets/images/clients/Jisr-Al-furat-logo.png",
    },
    {
      title: "Sadaf Group",
      imagePath: "src/assets/images/clients/sadaf-logo.png",
    },
    {
      title: "Hemen Car",
      imagePath: "src/assets/images/clients/hemencar-logo.png",
    },
    {
      title: "Shamel App",
      imagePath: "src/assets/images/clients/shamel-logo1.png",
    },
    {
      title: "Chroo Group",
      imagePath: "src/assets/images/clients/chroogroup-logo3.png",
    },
    {
      title: "Awronore",
      imagePath: "src/assets/images/clients/awronore-logo3.png",
    },
  ];
  return (
    <div className="infetech-sponser-area infetech-sponser-area-2">
      <div className="container">
        <Clients clients={clients} />
      </div>
    </div>
  );
}
