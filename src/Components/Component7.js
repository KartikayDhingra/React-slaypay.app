import img17 from "../images/img17.webp";
import img18 from "../images/img18.webp";
import img19 from "../images/img19.webp";

const Component7 = () => {
    return <div className="bg-peach border-t border-pink px-36 py-16">
        <div className="flex justify-between">
            <div className="flex flex-col gap-y-4 w-2/5">
                <a href="/"><img src={img17} alt="logo" className="w-1/3"></img></a>
                <p className="leading-5">SlayPay is India’s coolest payment card that you can customize the way you want. Use the SlayPay app to design your card with images, quotes, characters and more. Get revolutionary banking features with evolutionary security mechanisms.</p>
                <h2 className="text-2xl font-bold">Reach us</h2>
                <div className="w-1/2 flex flex-col gap-y-2">
                    <div className="flex">
                        <img src={img18} alt="mail" className="w-8 h-8"></img>
                        <h4 className="text-gray ml-2">care@slaypay.app</h4>
                    </div>
                    <div className="flex">
                        <img src={img19} alt="location" className="w-10 h-10"></img>
                        <h4 className="text-gray ml-2">SlayPay Corporate Office 3rd Floor, Magnum Towers 2, Gurgaon - 122011</h4>
                    </div>
                    <h2 className="text-2xl font-bold mt-4">Legal</h2>
                    <ul>
                        <li><a href="/" className="text-gray">Terms & Conditions</a></li>
                        <li><a href="/" className="text-gray">Privacy Policies</a></li>
                        <li><a href="/" className="text-gray">Return & Refund</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-2/5 px-10" >
                <h1 className="text-3xl font-semibold text-center mx-auto">Contact Us</h1>
                <div className="mt-4">
                    <form className="flex flex-col gap-y-6">
                        <input type="text" placeholder="First Name" className="px-8 py-2 border-2 border-gray rounded-full focus:outline-black" />
                        <input type="text" placeholder="Email" className="px-8 py-2 border-2 border-gray rounded-full focus:outline-black" />
                        <textarea type="text" placeholder="Type your message here..." rows="4" className="px-8 py-2 border-2 border-gray rounded-2xl resize-none focus:outline-black"></textarea>
                        <button type="submit" className="text-center py-2 w-full text-white bg-black rounded-full font-bold">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Component7;