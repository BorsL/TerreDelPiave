import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        Ti offriamo prodotti
          <span className='text-green-600'> Agricoli </span> di
          <span className='text-green-600'> Qualità </span> Superiore
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        La nostra attenzione nella coltivazione e lavorazione garantisce freschezza e autenticità, portando sulla tua tavola sapori genuini e un’esperienza unica, con un tocco di tradizione e innovazione.


        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        La cura per ogni dettaglio e l'impegno verso l’eccellenza assicurano la tua soddisfazione.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
