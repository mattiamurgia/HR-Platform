import { Card } from './Card';

export type CardReview = Card & {
    rules?: string;
    logo?: string;
    star?: string | number;
    arrayCardDB?: CardReview[];
};