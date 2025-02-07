export interface ICard {
  title: string;
  description: string;
  date: string | Date;
  time: string | Date;
  photo: string;
  id: number;
}

export interface ICardBlock {
  label: string;
  text: string;
}
