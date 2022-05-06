import img11 from "../images/img11.gif";
import img12 from "../images/img12.gif";
import img13 from "../images/img13.gif";
import img14 from "../images/img14.gif";
import img15 from "../images/img15.gif";
import img16 from "../images/img16.gif";
import FeatureCard from "./FeatureCard";

const Component6 = () => {
  return <div className="bg-peach px-36 py-20">
    <div className="flex items-center justify-center gap-x-20 gap-y-16 flex-wrap">
      <FeatureCard img={img11} heading="Works everywhere!" content="Use SlayPay Visa Platinum card on all card machines, websites & ATMs." />
      <FeatureCard img={img12} heading="Numberless Card." content="No number on the card. Access card details securely inside SlayPay app." />
      <FeatureCard img={img13} heading="No Fees. Promise." content="No annual fees, No interests, No late fees. Start slaying, without paying" />
      <FeatureCard img={img14} heading="Alerts & Insights" content="Get detailed insights on your spends and instant alerts with SlayPay app." />
      <FeatureCard img={img15} heading="Control your spends" content="Set monthly limits on how much you want to spend to reduce over expenditure." />
      <FeatureCard img={img16} heading="Get Priority Support" content="Connect with humans and not bots! Get any query resolved within 24 hours." />
    </div>
  </div>;
};

export default Component6;
