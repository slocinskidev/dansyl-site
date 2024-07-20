/* eslint-disable react/no-unstable-nested-components */
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import React from 'react';

import { Typography } from '@/components/commons';
import { UnderlineLink } from '@/components/links';

interface ReportDamageStepDescriptionProps {
  description: {
    raw?: string | null;
  };
  className?: string;
}

export const ReportDamageStepDescription = ({
  description,
  className,
}: ReportDamageStepDescriptionProps) => (
  <div className={className}>
    {renderRichText(
      description as RenderRichTextData<ContentfulRichTextGatsbyReference>,
      {
        renderNode: {
          [INLINES.HYPERLINK]: (node, children) => {
            // eslint-disable-next-line react/destructuring-assignment
            const { uri } = node.data;
            return <UnderlineLink href={uri}>{children}</UnderlineLink>;
          },
          [BLOCKS.PARAGRAPH]: (_, children) => (
            <Typography as='p' className='mt-2 text-gray-700'>
              {children}
            </Typography>
          ),
        },
      }
    )}
  </div>
);
