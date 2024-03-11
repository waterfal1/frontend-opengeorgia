import { IExcursion } from './IExcursion';

export interface IDirection {
    cost: string,
    excursions: IExcursion[],
    id: number,
    img: string,
    main_img: string,
    name: string,
    text: string,
}
