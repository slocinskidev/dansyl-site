/* eslint-disable react/no-unstable-nested-components */
import { graphql, HeadProps, PageProps } from 'gatsby';
import prettyBytes from 'pretty-bytes';
import React from 'react';
import { PiFilePdf } from 'react-icons/pi';

import {
  ContentContainer,
  Image,
  PageBanner,
  Typography,
} from '@/components/commons';
import { Seo } from '@/components/commons/seo';
import { Layout } from '@/components/layouts';
import {
  ReportDamageStepDescription,
  ReportDamageStepHeading,
  ReportDamageStepIndicator,
  ReportDamageStepLine,
} from '@/components/report-damage';

const ReportDamagePage = ({
  data: { contentfulReportDamagePage },
}: PageProps<Queries.ReportDamagePageQuery>) => (
  <Layout>
    <PageBanner
      heading={contentfulReportDamagePage?.banner?.heading ?? null}
      description={contentfulReportDamagePage?.banner?.description ?? null}
    />

    <ContentContainer>
      <div className='relative flex pb-24'>
        <ReportDamageStepLine />
        <ReportDamageStepIndicator>
          <Typography as='h3'>1</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.firstStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.firstStepHeading}
            />
          )}
          {contentfulReportDamagePage?.firstStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.firstStepDescription}
              className='mb-6'
            />
          )}
          {contentfulReportDamagePage?.firstStepImages && (
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
              {contentfulReportDamagePage.firstStepImages.map(
                (image, index) =>
                  image && (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${index}-${image.description}`}
                      className='relative'
                    >
                      <Image
                        className='rounded-lg md:h-[600px] lg:order-1'
                        {...image}
                      />
                      <div className='absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-lochmara-900'>
                        <Typography as='p' className='font-bold text-white'>
                          {index + 1}
                        </Typography>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <div className='relative flex pb-24'>
        <ReportDamageStepLine />
        <ReportDamageStepIndicator>
          <Typography as='h3'>2</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.secondStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.secondStepHeading}
            />
          )}
          {contentfulReportDamagePage?.secondStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.secondStepDescription}
            />
          )}
        </div>
      </div>

      <div className='relative flex pb-24'>
        <ReportDamageStepLine />
        <ReportDamageStepIndicator>
          <Typography as='h3'>3</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.thirdStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.thirdStepHeading}
            />
          )}
          {contentfulReportDamagePage?.thirdStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.thirdStepDescription}
              className='mb-6'
            />
          )}
          {contentfulReportDamagePage?.thirdStepImages && (
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
              {contentfulReportDamagePage.thirdStepImages.map(
                (image, index) =>
                  image && (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${index}-${image.description}`}
                      className='relative'
                    >
                      <Image
                        className='max-h-[400px] max-w-[600px] rounded-lg lg:order-1'
                        {...image}
                      />
                      <div className='absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-lochmara-900'>
                        <Typography as='p' className='font-bold text-white'>
                          {index + 1}
                        </Typography>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <div className='relative flex pb-24'>
        <ReportDamageStepLine />
        <ReportDamageStepIndicator>
          <Typography as='h3'>4</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.fourthStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.fourthStepHeading}
            />
          )}
          {contentfulReportDamagePage?.fourthStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.fourthStepDescription}
            />
          )}
          {contentfulReportDamagePage?.fourthStepImages && (
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
              {contentfulReportDamagePage.fourthStepImages.map(
                (image, index) =>
                  image && (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${index}-${image.description}`}
                      className='relative'
                    >
                      <Image
                        className='max-h-[400px] max-w-[600px] rounded-lg lg:order-1'
                        {...image}
                      />
                      <div className='absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-lochmara-900'>
                        <Typography as='p' className='font-bold text-white'>
                          {index + 1}
                        </Typography>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <div className='relative flex pb-24'>
        <ReportDamageStepLine />
        <ReportDamageStepIndicator>
          <Typography as='h3'>5</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.fifthStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.fifthStepHeading}
            />
          )}
          {contentfulReportDamagePage?.fifthStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.fifthStepDescription}
            />
          )}
          {contentfulReportDamagePage?.fifthStepImages && (
            <div className='grid grid-cols-1 gap-4'>
              {contentfulReportDamagePage.fifthStepImages.map(
                (image, index) =>
                  image && (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${index}-${image.description}`}
                      className='relative'
                    >
                      <Image
                        className='rounded-lg md:h-[300px] lg:order-1'
                        objectFit='contain'
                        objectPosition='left'
                        {...image}
                      />
                      <div className='absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-lochmara-900'>
                        <Typography as='p' className='font-bold text-white'>
                          {index + 1}
                        </Typography>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <div className='relative flex pb-24'>
        <ReportDamageStepLine />
        <ReportDamageStepIndicator>
          <Typography as='h3'>6</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.sixthStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.sixthStepHeading}
            />
          )}
          {contentfulReportDamagePage?.sixthStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.sixthStepDescription}
              className='mb-6'
            />
          )}
          {contentfulReportDamagePage?.sixthStepDocuments && (
            <div className='flex flex-wrap gap-4'>
              {contentfulReportDamagePage.sixthStepDocuments.map(
                (document) =>
                  document?.title &&
                  document?.publicUrl && (
                    <a
                      key={document.title}
                      href={document.publicUrl}
                      download
                      className='flex w-fit gap-4 rounded-lg border border-gray-200 bg-gray-100 px-4 py-3'
                    >
                      {document.mimeType.includes('pdf') && (
                        <div className='grid h-10 w-10 place-items-center rounded-lg bg-white'>
                          <PiFilePdf className='h-8 w-8 text-lochmara-900' />
                        </div>
                      )}
                      <div className='flex flex-col'>
                        <Typography
                          as='p'
                          className='text-sm font-semibold text-lochmara-900'
                        >
                          {document.title}
                        </Typography>
                        {document.size && (
                          <Typography className='text-xs font-semibold text-gray-600'>
                            {prettyBytes(document.size)}
                          </Typography>
                        )}
                      </div>
                    </a>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <div className='relative flex pb-24'>
        <ReportDamageStepLine />
        <ReportDamageStepIndicator>
          <Typography as='h3'>7</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.seventhStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.seventhStepHeading}
            />
          )}
          {contentfulReportDamagePage?.seventhStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.seventhStepDescription}
            />
          )}
        </div>
      </div>

      <div className='relative flex'>
        <ReportDamageStepIndicator>
          <Typography as='h3'>8</Typography>
        </ReportDamageStepIndicator>
        <div className='grow pl-4'>
          {contentfulReportDamagePage?.eighthStepHeading && (
            <ReportDamageStepHeading
              heading={contentfulReportDamagePage.eighthStepHeading}
            />
          )}
          {contentfulReportDamagePage?.eighthStepDescription && (
            <ReportDamageStepDescription
              description={contentfulReportDamagePage.eighthStepDescription}
            />
          )}
        </div>
      </div>
    </ContentContainer>
  </Layout>
);

export default ReportDamagePage;

export const query = graphql`
  query ReportDamagePage {
    contentfulReportDamagePage {
      pageName
      banner {
        ...ContentfulPageBanner
      }
      firstStepHeading
      firstStepDescription {
        raw
      }
      firstStepImages {
        ...Image
      }
      secondStepHeading
      secondStepDescription {
        raw
      }
      thirdStepHeading
      thirdStepDescription {
        raw
      }
      thirdStepImages {
        ...Image
      }
      fourthStepHeading
      fourthStepDescription {
        raw
      }
      fourthStepImages {
        ...Image
      }
      fifthStepHeading
      fifthStepDescription {
        raw
      }
      fifthStepImages {
        ...Image
      }
      sixthStepHeading
      sixthStepDescription {
        raw
      }
      # sixthStepDocuments {
      #   size
      #   publicUrl
      #   title
      #   mimeType
      # }
      seventhStepHeading
      seventhStepDescription {
        raw
      }
      eighthStepHeading
      eighthStepDescription {
        raw
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.ReportDamagePageQuery>) => (
  <Seo title={data.contentfulReportDamagePage?.pageName ?? undefined} />
);
