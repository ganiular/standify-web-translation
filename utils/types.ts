import en from "../en";

export type Translations = typeof en;
type FAQItem = {
  question: string;
  answer: string;
};

export type FAQDatum = {
  title: string;
  items: FAQItem[];
};

export type HomePageType = typeof en.HomePage;
export type FAQsType = typeof en.FAQs;
