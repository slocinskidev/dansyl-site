import React from 'react';

import { Accordion, ContentContainer } from '@/components/commons';

export const FaqList = ({ list }: { list: Queries.AccordionFragment[] }) => (
  <ContentContainer>
    {list?.length ? (
      <ul className='mx-auto grid w-full max-w-4xl gap-4'>
        {list.map((item) => (
          <li key={item?.header}>
            <Accordion
              header={item?.header || null}
              body={item?.body || null}
            />
          </li>
        ))}
      </ul>
    ) : null}
  </ContentContainer>
);
