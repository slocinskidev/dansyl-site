import React from 'react';

import { Typography } from '@/components/commons';
import { RecentProjectCard } from '@/components/home/recent-project-card';
import { ButtonLink } from '@/components/links';

export const RecentProjects = ({
  heading,
  button,
  realizations,
}: Queries.ContentfulChosenRealizationsFragment) => (
  <section className='bg-gray-100 px-4'>
    <div className='mx-auto max-w-screen-xl py-20'>
      {heading ? (
        <Typography as='h2' variant='heading2' className='text-lochmara-900'>
          {heading}
        </Typography>
      ) : null}

      {realizations?.length ? (
        <ul className='mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3'>
          {realizations.map(
            (project) =>
              project && (
                <li
                  key={project?.slug}
                  className='last:lg:col-start-0 last:lg:col-span-2 last:lg:row-span-2 last:lg:row-start-1'
                >
                  <RecentProjectCard {...project} />
                </li>
              )
          )}
        </ul>
      ) : null}

      {button?.link?.contentfulinternal?.slug && button?.label ? (
        <ButtonLink
          href={button.link.contentfulinternal.slug}
          variant='outline'
          className='mx-auto mt-8 flex'
        >
          {button.label}
        </ButtonLink>
      ) : null}
    </div>
  </section>
);
