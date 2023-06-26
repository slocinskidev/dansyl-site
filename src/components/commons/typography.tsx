import React from 'react';

import { clsxm } from '@/lib';

type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body1'
  | 'custom';

type TypographyElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'strong';

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, { variant?: TypographyVariant | 'body1' }>;

type TypographyComponent = <
  C extends React.ElementType = TypographyElementType
>(
  props: TypographyProps<C>
) => React.ReactElement | null;

const typographyVariantClasses = {
  heading1: 'text-3xl leading-tight md:text-5xl md:leading-snug',
  heading2: 'text-2xl md:text-3xl font-bold leading-tight',
  heading3: 'text-xl md:text-2xl font-bold leading-tight',
  body1: 'text-base leading-normal',
  custom: '',
};

const typographyVariantClassesMap: Partial<
  Record<TypographyElementType, string>
> = {
  h1: typographyVariantClasses.heading1,
  h2: typographyVariantClasses.heading2,
  h3: typographyVariantClasses.heading3,
  p: typographyVariantClasses.body1,
  span: typographyVariantClasses.custom,
};

export const Typography: TypographyComponent = React.forwardRef(
  <C extends React.ElementType = TypographyElementType>(
    { as, variant, children, className, ...delegated }: TypographyProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';
    const typographyClasses = variant
      ? typographyVariantClasses[variant]
      : typographyVariantClassesMap[as as TypographyElementType];

    return (
      <Component
        {...delegated}
        className={clsxm(typographyClasses, className)}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);
