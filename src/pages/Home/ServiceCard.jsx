import service from "../../assets/Service/5.png"
import contuct from "../../assets/Service/2.png"
import quality from "../../assets/Service/3.png"
import warrenty from "../../assets/Service/4.png"


const ServiceCard = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 px-28 gap-6 justify-between bg-slate-200 py-8 mb-6">
            {/* service */}
            <div>
                <img className="w-24" src={service} alt="" />
                <h2 className="text-2xl font-bold">Services</h2>
                <p>AI-driven text generation, answers, and information.</p>
            </div>
            {/* quality */}
            <div>
                <img src={quality} alt="" />
                <h2 className="text-2xl font-bold">Quality</h2>
                <p>AI-driven text generation, answers, and information.</p>
            </div>
            {/* contuct */}
            <div>
                <img src={contuct} alt="" />
                <h2 className="text-2xl font-bold">Contact</h2>
                <p>AI-driven text generation, answers, and information.</p>
            </div>
            {/* warrenty */}
            <div>
                <img src={warrenty} alt="" />
                <h2 className="text-2xl font-bold">Warranty</h2>
                <p>AI-driven text generation, answers, and information.</p>
            </div>
        </div>
    );
};

export default ServiceCard;