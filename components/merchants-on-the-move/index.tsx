import MerchantItem from "./merchent-item";
import styles from './styles.module.scss';


const merchants = [
  {
    id: 1,
    picture: "/picture/women.png",
    text: "A modern and elegant website, designed by BCMH",
    ps: "Soon the Sun",
    logo: "/picture/dressvector.png",
    bgColor: "bg-red-200",
    isReverse: false,
  },
  {
    id: 2,
    picture: "/picture/parfum.png",
    text: "“Swell has been like a spring for Spinn, allowing us to efficiently grow and scale.”",
    ps: "Roderick de Rode Spinn Coffee",
    logo: "/picture/men.png",
    bgColor: "bg-yellow-200",
    isReverse: true,
  },
  {
    id: 3,
    picture: "/picture/womens.png",
    text: "“Magento is expensive. Shopify is limiting. Moltin isn’t there yet. There are a lot of options but none of them are great.”",
    ps: "Ryan Bonifacino Great Heights",
    logo: "/picture/ringvector.png",
    bgColor: "bg-blue-200",
    isReverse: false,
  },
];



function MerchantsOnTheMove() {
    return (
      <>
        <div>
          <div>
            <p className=" md:text-6xl text-3xl text-center my-16">Merchants on the move</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-18 mx-16 h-auto">
            {merchants.map((e) => {
              return (
                <MerchantItem key={e.id} picture={e.picture} bgColor={e.bgColor} isReverse={e.isReverse} ps={e.ps} logo={e.logo} text={e.text}/>
              );
            })}
          </div>
        </div>
      </>
    );
}



export default MerchantsOnTheMove;