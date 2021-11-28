import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IAccordionTitle } from '@core/blocks/AccordionTitle';
import MjmlBlock from '@core/components/MjmlBlock';

export type AccordionTitleProps = RecursivePartial<IAccordionTitle['data']> &
  RecursivePartial<IAccordionTitle['attributes']> & {
    children?: JSX.Element | JSX.Element[] | string;
  };

export function AccordionTitle(props: AccordionTitleProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children'])}
      value={props.value}
      type={BasicType.ACCORDION_TITLE}
    >
      {props.children}
    </MjmlBlock>
  );
}
