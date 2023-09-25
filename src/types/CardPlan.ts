import { Card } from './Card';

export type CardPlan = Card & {
    subtitle?: string;
    list_advantages?: string[];
    name_button?: string;
    indicator_use?: string;
    color?: string | number;
};