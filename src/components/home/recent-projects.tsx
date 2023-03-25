import React from 'react';

import { Typography } from '@/components/commons';
import { RecentProjectCard } from '@/components/home/recent-project-card';
import { ButtonLink } from '@/components/links';

export const RecentProjects = ({
  recentProjects,
}: Pick<
  Queries.HomePageQuery['allContentfulSingleProjectPage'],
  'recentProjects'
>) => (
  <section className='bg-gray-100'>
    <div className='mx-auto max-w-screen-xl px-4 py-20'>
      <Typography as='h2' variant='heading2' className='text-lochmara-900'>
        Ostatnie realizacje
      </Typography>

      {recentProjects?.length ? (
        <ul className='mt-8 grid grid-cols-1 gap-4 md:mt-12 lg:grid-cols-3'>
          {recentProjects.map((project) => (
            <li
              key={project?.slug}
              className='last:lg:col-start-0 last:lg:col-span-2 last:lg:row-span-2 last:lg:row-start-1'
            >
              <RecentProjectCard {...project} />
            </li>
          ))}
        </ul>
      ) : null}

      <ButtonLink href='#' variant='outline' className='mx-auto mt-8 flex'>
        Więcej realizacji
      </ButtonLink>
    </div>
  </section>
);
