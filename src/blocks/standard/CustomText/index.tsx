import React from 'react';
import { IBlockData } from '@core/typings';
import { AdvancedType, BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { merge } from 'lodash';
import { Text } from '@core/components/Text';
import { Liquid } from 'liquidjs';
import { getPreviewClassName } from '@core/utils';
import _ from 'lodash';

export type ICustomText = IBlockData<
  {
    color?: string;
    'font-family'?: string;
    'font-size'?: string;
    'font-style'?: string;
    'font-weight'?: string;
    'line-height'?: string;
    'letter-spacing'?: string;
    height?: string;
    'text-decoration'?: string;
    'text-transform'?: string;
    align?: string;
    'container-background-color'?: string;
    width?: string;
    padding?: string;
    mergeTagKey: string;
  },
  {
    content: string;
  }
>;

export const CustomText = createBlock<ICustomText>({
  name: 'Editable Text',
  type: BasicType.CUSTOM_TEXT,
  create: payload => {
    const defaultData: ICustomText = {
      type: BasicType.CUSTOM_TEXT,
      data: {
        value: {
          content: 'Type Something...',
        },
      },
      attributes: {
        mergeTagKey: 'text',
        padding: '0px 0px 0px 0px',
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render: ({ mode, data, idx }) => {
    return (
      <Text
        css-class={mode == 'testing' ? getPreviewClassName(idx || null, data.type) : ''}
        {...data.attributes}
      >
        {data.data.value.content}
      </Text>
    );
  },
});
