import { appearance } from '@module/order/group/appearance';
import { boxModel } from '@module/order/group/box_model';
import { interaction } from '@module/order/group/interaction';
import { layout } from '@module/order/group/layout';
import { positioning } from '@module/order/group/positioning';
import { svg } from '@module/order/group/svg';
import { transition } from '@module/order/group/transition';
import { typography } from '@module/order/group/typography';

const propertyGroups = [
  ['composes'],
  ['all'],
  interaction,
  positioning,
  layout,
  boxModel,
  typography,
  appearance,
  svg,
  transition,
  ['include']
];

const propertiesOrder = propertyGroups.map((properties) => {
  return {
    emptyLineBefore: 'never',
    noEmptyLineBetween: true,
    properties
  };
});

const order = {
  plugins: ['stylelint-order'],
  rules:
  {
    'order/order': [[
      {
        name: 'import',
        type: 'at-rule'
      },
      {
        name: 'forward',
        type: 'at-rule'
      },
      {
        name: 'use',
        type: 'at-rule'
      },
      'dollar-variables',
      'at-variables',
      'custom-properties',
      'declarations',
      {
        name: 'custom-media',
        type: 'at-rule'
      },
      {
        name: 'function',
        type: 'at-rule'
      },

      {
        hasBlock: true,
        selector: /^&::[\w-]+/u,
        type: 'rule'
      },
      {
        hasBlock: true,
        name: 'media',
        type: 'at-rule'
      },
      {
        name: 'mixin',
        type: 'at-rule'
      },
      {
        name: 'extend',
        type: 'at-rule'
      },
      {
        name: 'include',
        type: 'at-rule'
      },
      'rules',
      'at-rules'
    ], {
      severity: 'warning'
    }],
    'order/properties-order': [propertiesOrder, {
      emptyLineBeforeUnspecified: 'never',
      emptyLineMinimumPropertyThreshold: 5,
      severity: 'warning',
      unspecified: 'bottomAlphabetical'
    }]
  }
};

export { order };