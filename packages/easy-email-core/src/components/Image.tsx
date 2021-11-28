import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IImage } from '@core/blocks/Image';
import MjmlBlock from '@core/components/MjmlBlock';

export type ImageProps = RecursivePartial<IImage['data']> &
  RecursivePartial<IImage['attributes']> & {
    children?: JSX.Element | JSX.Element[] | string;
  };

export function Image(props: ImageProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children'])}
      value={props.value}
      type={BasicType.IMAGE}
    >
      {props.children}
    </MjmlBlock>
  );
}
