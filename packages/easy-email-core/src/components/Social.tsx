import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { ISocial } from '@core/blocks/Social';
import MjmlBlock from '@core/components/MjmlBlock';

export type SocialProps = RecursivePartial<ISocial['data']> &
  RecursivePartial<ISocial['attributes']> & {
    children?: JSX.Element | JSX.Element[] | string;
  };

export function Social(props: SocialProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children'])}
      value={props.value}
      type={BasicType.SOCIAL}
    >
      {props.children}
    </MjmlBlock>
  );
}
