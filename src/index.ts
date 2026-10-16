import { ignore } from '@global/constant/ignore';
import { order } from '@module/order/order';
import { disabledRule } from '@module/stylelint/rule/disabled_rule';
import { generalRule } from '@module/stylelint/rule/general_rule';
import { stylistic } from '@module/stylistic/stylistic';

const base = {
  plugins: [...order.plugins, ...stylistic.plugins],
  ignoreFiles: ignore,
  rules: {
    ...disabledRule,
    ...generalRule,
    ...order.rules,
    ...stylistic.rules
  }
};

export default base;