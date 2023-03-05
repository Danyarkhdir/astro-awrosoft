import Solution from "./Solution";

export default function SolutionArea() {
  const solutions = [
    {
      title: "Cloud Computing",
      imageUrl: "src/assets/images/solutions/cloud-computing2.jpg",
      description:
        "To transform your business with Microsoft Azure, the ultimate cloud platform for creating a scalable, flexible, and connected enterprise environment, partner with Awrosoft, a trusted Microsoft Azure CSP partner for various cloud services, including Office 365, Dynamics 365, and Azure. We offer end-to-end support to ensure your success, including sales, billing, technical support, and a self-service portal for easy subscription management. Let's get started today and take advantage of all that Azure CSP has to offer!",
    },
    {
      title: "Automation Systems (PLC/SCADA Design & Programming)",
      imageUrl: "src/assets/images/solutions/automation.jpg",
      description:
        "We provide reliable PLC controls for lean manufacturing and modern industrial automation systems. Our expertise in multiple automation platforms allows us to support your needs, regardless of your PLC platform. Additionally, we specialize in SCADA programming with a focus on intuitive controls and clear navigation. Whether you're implementing your first SCADA system or updating an existing one, we can help you improve operational efficiency and performance.      ",
    },
    {
      title: "Network Solutions",
      imageUrl: "src/assets/images/solutions/network.jpg",
      description:
        "Our sister company provides high-quality network components and solutions for businesses of all sizes. We partner with industry leaders like Cisco, HP, EMC2, VmWare, and others to deliver efficient network solutions for any problem. We offer a comprehensive set of products and services to help national and international organizations build reliable, scalable, and secure enterprise networks that support business growth and meet unique requirements.",
    },
  ];
  return (
    <div className="solution-area">
      <h1 className="infetech-offer-category-title">
        <span>AWRO</span> SOLUTIONS
      </h1>
      {solutions.map((solution) => (
        <Solution
          title={solution.title}
          imageUrl={solution.imageUrl}
          description={solution.description}
        />
      ))}
    </div>
  );
}
