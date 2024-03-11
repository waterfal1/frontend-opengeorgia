import { IPlan } from '../../tourInfoPage/types/IPlan';

export interface IExcursion {
    cost: string,
    full_text: string,
    images: {img: string}[],
    name: string,
    plan: IPlan[],
    text: string,
    directionName: string
}
