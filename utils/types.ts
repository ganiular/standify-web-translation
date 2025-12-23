import en from "../en";

export type Translations = typeof en;
type FAQItem = {
  question: string;
  answer: string;
};

export type FAQData = {
  title: string;
  items: FAQItem[];
};
