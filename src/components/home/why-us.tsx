import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { MdCarRepair } from 'react-icons/md';

import PaintSpray from '@/assets/icons/paint-spray.svg';

const WhyUs = () => (
  <section className='bg-lochmara-900 text-white'>
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='max-w-xl'>
        <h2 className='text-3xl font-bold sm:text-4xl'>Dlaczego my?</h2>

        <p className='mt-4 text-gray-300'>
          Jesteśmy warsztatem posiadającym ogromny staż w swoim fachu,
          podejmujemy się każdej pracy i wykonujemy ją sumiennie, każde auto,
          które do nas trafia jest traktowane jak nasze własne podczas
          wykonywanych usług zabezpieczamy środek auta przed jakimikolwiek
          zabrudzeniami, dodatkowo przed oddaniem pojazdu sprzątamy go dokładnie
          wewnątrz i zewnątrz jesteśmy zaufanym warsztatem, który współpracuje z
          dużą ilością ubezpieczalni, dla dwóch z nich jesteśmy zakładem
          partnerskim w tym rejonie, staramy się, aby każdy klient był
          usatysfakcjonowany z naszej pracy.
        </p>
      </div>

      <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
        <div className='flex items-start'>
          <span className='shrink-0 rounded-lg bg-lochmara-800 p-4'>
            <PaintSpray className='h-5 w-5' />
          </span>

          <div className='ml-4'>
            <h3 className='text-lg font-bold'>
              Lakiernictwo pojazdowe (kabina bezpyłowa)
            </h3>

            <p className='mt-1 text-sm text-gray-300'>
              Nowoczesna kabina lakiernicza, najwyższej klasy pistolety
              lakiernicze oraz nowoczesna wysoko wydajna sprężarka, dają
              gwarancję doskonałej jakości.
            </p>
          </div>
        </div>

        <div className='flex items-start'>
          <span className='shrink-0 rounded-lg bg-lochmara-800 p-4'>
            <GiAutoRepair className='h-5 w-5' />
          </span>

          <div className='ml-4'>
            <h3 className='text-lg font-bold'>Naprawy bezgotówkowe</h3>

            <p className='mt-1 text-sm text-gray-300'>
              Oferujemy rozliczenia bezgotówkowe. Naszym klientom służymy pomocą
              przy załatwianiu formalności związanych z likwidacją szkód.
            </p>
          </div>
        </div>

        <div className='flex items-start'>
          <span className='shrink-0 rounded-lg bg-lochmara-800 p-4'>
            <MdCarRepair className='h-5 w-5' />
          </span>

          <div className='ml-4'>
            <h3 className='text-lg font-bold'>Blacharstwo samochodowe</h3>

            <p className='mt-1 text-sm text-gray-300'>
              Wieloletnie doświadczenie i jakość wykonywanych usług potwierdza,
              że jesteśmy w stanie zrealizować nawet najbardziej skomplikowane
              zlecenie zgodne z potrzebą klienta.
            </p>
          </div>
        </div>

        <div className='flex items-start'>
          <span className='shrink-0 rounded-lg bg-lochmara-800 p-4'>
            <FaCarSide className='h-5 w-5' />
          </span>

          <div className='ml-4'>
            <h3 className='text-lg font-bold'>
              Samochód zastępczy na czas naprawy GRATIS!
            </h3>

            <p className='mt-1 text-sm text-gray-300'>
              Dla osób, których pojazd znalazł się w serwisie i wymaga naprawy,
              przygotowaliśmy specjalną ofertę – samochód zastępczy.
            </p>
          </div>
        </div>

        <div className='flex items-start'>
          <span className='shrink-0 rounded-lg bg-lochmara-800 p-4'>
            <svg
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
          </span>

          <div className='ml-4'>
            <h3 className='text-lg font-bold'>Lorem, ipsum dolor.</h3>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              cumque tempore est ab possimus quisquam reiciendis tempora animi!
              Quaerat, saepe?
            </p>
          </div>
        </div>

        <div className='flex items-start'>
          <span className='shrink-0 rounded-lg bg-lochmara-800 p-4'>
            <svg
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
          </span>

          <div className='ml-4'>
            <h3 className='text-lg font-bold'>Lorem, ipsum dolor.</h3>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              cumque tempore est ab possimus quisquam reiciendis tempora animi!
              Quaerat, saepe?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
