import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px] rounded-full' />
      <div className='mt-8 flex justify-start gap-2.5'>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-green-600 text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
