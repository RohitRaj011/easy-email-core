import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IText } from '@core/blocks/Text';
import MjmlBlock from '@core/components/MjmlBlock';

export type TextProps = RecursivePartial<IText['data']> &
  RecursivePartial<IText['attributes']> & {
    children?: JSX.Element | JSX.Element[] | string;
  };

export function Text(props: TextProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children'])}
      value={props.value}
      type={BasicType.TEXT}
    >
      {props.children}
    </MjmlBlock>
  );
}
