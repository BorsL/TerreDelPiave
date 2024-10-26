import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          I nostri <span className='text-green-600'> Prodotti </span> Piu richiesti
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Scopri l'eccellenza della qualità e la genuinità con i nostri prodotti d'eccellenza. Entra in un mondo di freschezza, tradizione e valore autentico.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-10 '>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
