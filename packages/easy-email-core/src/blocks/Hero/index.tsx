import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { merge } from 'lodash';
import { createBlock } from '@core/utils/createBlock';
export type IHero = IBlockData<
  {
    'background-color'?: string;
    'background-height'?: string;
    'background-position'?: string;
    'background-url'?: string;
    'background-width'?: string;
    'vertical-align'?: string;
    'border-radius'?: string;
    width?: string;
    height?: string;
    mode: 'fluid-height' | 'fixed-height';
    padding?: string;
  },
  {}
>;

export const Hero = createBlock<IHero>({
  name: 'Hero',
  type: BasicType.HERO,
  create: (payload) => {
    const defaultData: IHero = {
      type: BasicType.HERO,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fluid-height',
        padding: '100px 0px 100px 0px',
        'vertical-align': 'top',
        'background-url':
          'https://easy-email-m-ryan.vercel.app/images/dd1584fb-cb60-42c9-80c7-5545e16130ca-226ba72b-ce9e-4948-ad0d-347381fb96c5.png',
      },
      children: [
        {
          type: 'text',
          data: {
            value: {
              content: 'We Serve Healthy &amp; Delicious Foods',
            },
          },
          attributes: {
            padding: '10px 25px 10px 25px',
            align: 'center',
            color: '#ffffff',
            'font-size': '45px',
            'line-height': '45px',
          },
          children: [],
        },
        {
          type: 'text',
          data: {
            value: {
              content:
                'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br>',
            },
          },
          attributes: {
            align: 'center',
            'background-color': '#414141',
            color: '#ffffff',
            'font-weight': 'normal',
            'border-radius': '3px',
            padding: '10px 25px 10px 25px',
            'inner-padding': '10px 25px 10px 25px',
            'line-height': '1.5',
            target: '_blank',
            'vertical-align': 'middle',
            border: 'none',
            'text-align': 'center',
            href: '#',
            'font-size': '14px',
          },
          children: [],
        },
        {
          type: 'button',
          data: {
            value: {
              content: 'Get Your Order Here!',
            },
          },
          attributes: {
            align: 'center',
            'background-color': '#f3a333',
            color: '#ffffff',
            'font-size': '13px',
            'font-weight': 'normal',
            'border-radius': '30px',
            padding: '10px 25px 10px 25px',
            'inner-padding': '10px 25px 10px 25px',
            'line-height': '120%',
            target: '_blank',
            'vertical-align': 'middle',
            border: 'none',
            'text-align': 'center',
            href: '#',
          },
          children: [],
        },
      ],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
});
