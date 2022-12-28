import type { HTMLMotionProps } from 'framer-motion';

export const TABS = {
  COINS: 'coins',
  EXCHANGES: 'exchanges'
};

export const M_PROPS: HTMLMotionProps<'div'> = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const COINS_TABLE_HEADERS = [
  'Coin',
  'Price',
  '24h',
  '30d',
  'Market Capitalization',
  'Volume (24h)',
  'Circulating Supply',
  'Last 7 Days'
];

export const BASE_DIVISOR = 10000;

export const SMALL_VW = 720;

export const TOTAL_ITEMS_PER_PAGE = 50;

export const REFETCH_INTERVAL_MS = 1000 * 60;

export const UNKNOWN_VALUE_CHAR = '-';

export const DEFAULT_SPARKLINE_DATA = [1, 1];
