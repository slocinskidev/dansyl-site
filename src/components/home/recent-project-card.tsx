import React from 'react';

import { Image, Typography } from '@/components/commons';
import { UnstyledLink } from '@/components/links';
import { DEFAULT_PATH } from '@/constants';

interface RecentProjectCardProps
  extends Queries.ContentfulProjectDetailsPageFragment {}

export const RecentProjectCard = ({
  projectName,
  projectContent,
  slug,
}: RecentProjectCardProps) => (
  <UnstyledLink
    href={slug ?? DEFAULT_PATH}
    className='group relative block h-full'
  >
    {projectContent?.gallery?.[0] ? (
      <Image
        {...projectContent.gallery[0]}
        className='h-full transition-opacity duration-500 group-hover:opacity-80'
      />
    ) : null}

    <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
      <Typography as='h3' className='uppercase text-white'>
        {projectName}
      </Typography>

      <span className='mt-1.5 inline-block rounded bg-lochmara-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
        Sprawdź
      </span>
    </div>
  </UnstyledLink>
);
