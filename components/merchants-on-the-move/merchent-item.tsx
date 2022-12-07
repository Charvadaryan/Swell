import { FC } from "react";

type MerchantItemProps = {
  isReverse: boolean;
  picture: string;
  bgColor: string;
  text: string;
  ps: string;
  logo: string;
}

const MerchantItem: FC<MerchantItemProps> = ({
  isReverse, 
  picture,
  bgColor,
  text,
  ps,
  logo
}) => {
  return (
    <div className={`${bgColor} px-8 flex ${isReverse ? "flex-col-reverse" : "flex-col" }`}>
      <img src={picture} alt="cover" className={` w-full aspect-square`} />
      <div>
        <div  className="flex justify-center mt-24"><img src={logo}/></div>
        <div className="flex justify-center"><p className="text-center mt-10 w-5/12">{text}</p></div>
        <p className="text-center mt-10 mb-10">{ps}</p>
      </div>
    </div>
  )
}

export default MerchantItem;