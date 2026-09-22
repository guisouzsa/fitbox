/**
 * Single source of truth for every editable claim on the page — copy,
 * counts, prices, categories. Nothing commercial should be hardcoded
 * inside a component; it should be read from here instead.
 */

export const brand = {
  name: "Fitbox",
  tagline: "Editora digital de receitas",
};

export const hero = {
  eyebrow: "Fitbox",
  title: "Comida que cabe na sua rotina.",
  subtitle:
    "Receitas práticas, proteicas e cheias de sabor para transformar a forma como você come todos os dias.",
  cta: "Conhecer as receitas",
  meta: "+100 receitas · acesso digital · feito para a rotina real",
};

export const productStats = [
  { value: "100+", label: "receitas" },
  { value: "15 min", label: "preparos rápidos" },
  { value: "06", label: "categorias" },
] as const;

export type DayMoment = {
  time: string;
  label: string;
  recipe: string;
  meta: string;
};

export const dayInRecipes: DayMoment[] = [
  { time: "06:40", label: "Café da manhã", recipe: "Panqueca de banana + pasta de amendoim", meta: "10 min · fácil" },
  { time: "12:30", label: "Almoço", recipe: "Frango crocante + legumes assados", meta: "35 min · médio" },
  { time: "16:20", label: "Lanche", recipe: "Cookie proteico de aveia", meta: "15 min · fácil" },
  { time: "20:10", label: "Jantar", recipe: "Salmão grelhado + salada morna", meta: "25 min · fácil" },
];

export type Category = {
  name: string;
  count: string;
};

export const categories: Category[] = [
  { name: "Café da manhã", count: "18 receitas" },
  { name: "Almoço", count: "24 receitas" },
  { name: "Jantar", count: "20 receitas" },
  { name: "Lanches", count: "16 receitas" },
  { name: "Air Fryer", count: "14 receitas" },
  { name: "Sobremesas", count: "12 receitas" },
];

export const airFryerRecipes = [
  "Frango empanado",
  "Batata rústica",
  "Legumes temperados",
  "Coxinha de forno",
  "Brownie de caneca",
];

export const weeklyMenu = [
  { day: "Segunda", meals: ["Omelete de espinafre", "Frango xadrez", "Sopa de legumes"] },
  { day: "Terça", meals: ["Panqueca proteica", "Salmão grelhado", "Wrap de frango"] },
  { day: "Quarta", meals: ["Vitamina de banana", "Carne moída com abóbora", "Salada morna"] },
  { day: "Quinta", meals: ["Ovos mexidos + aveia", "Frango ao curry", "Omelete de forno"] },
  { day: "Sexta", meals: ["Tapioca proteica", "Air fryer de legumes", "Salada caprese"] },
] as const;

export const shoppingList = [
  "ovos",
  "banana",
  "aveia",
  "frango",
  "iogurte",
  "batata",
  "legumes",
  "azeite",
];

export type EbookCover = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  recipes: string;
};

export const collection: EbookCover[] = [
  {
    slug: "receitas-proteicas",
    title: "Receitas Proteicas",
    subtitle: "O volume principal",
    description: "O ponto de partida da coleção: refeições completas para o dia a dia.",
    recipes: "100+ receitas",
  },
  {
    slug: "air-fryer",
    title: "Air Fryer",
    subtitle: "Crocante, sem complicação",
    description: "Receitas pensadas para quem cozinha rápido, sem abrir mão do sabor.",
    recipes: "40+ receitas",
  },
  {
    slug: "doces-sobremesas",
    title: "Doces & Sobremesas",
    subtitle: "Para a vontade de doce",
    description: "Sobremesas mais leves, com o mesmo cuidado das refeições principais.",
    recipes: "30+ receitas",
  },
  {
    slug: "cafe-da-manha",
    title: "Café da Manhã",
    subtitle: "Para começar bem",
    description: "Receitas rápidas para os dias em que o tempo é curto.",
    recipes: "25+ receitas",
  },
];

export type PricingPlan = {
  name: string;
  description: string;
  /** Left unset on purpose — no real price defined yet. Fill in before launch. */
  price?: string;
  installments?: string;
  includes: string[];
  featured?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Livro",
    description: "O ebook principal da coleção.",
    includes: ["Ebook Receitas Proteicas", "100+ receitas", "Acesso digital imediato"],
    cta: "Quero o livro",
  },
  {
    name: "Coleção",
    description: "Todos os volumes da Fitbox em um só lugar.",
    includes: [
      "Ebook Receitas Proteicas",
      "Ebook Air Fryer",
      "Ebook Doces & Sobremesas",
      "Ebook Café da Manhã",
      "Cardápio semanal + lista de compras",
    ],
    featured: true,
    cta: "Quero a coleção",
  },
];

export type PurchaseStep = {
  title: string;
  description: string;
};

export const purchaseSteps: PurchaseStep[] = [
  {
    title: "Escolha seu livro",
    description: "Selecione o Livro ou a Coleção completa e confirme os dados da compra.",
  },
  {
    title: "Pagamento seguro",
    description: "O pagamento é processado por uma plataforma segura, direto no navegador.",
  },
  {
    title: "Receba por e-mail",
    description: "O link de acesso chega automaticamente na sua caixa de entrada, pronto para abrir.",
  },
];

export const faq = [
  {
    question: "O ebook é físico ou digital?",
    answer: "É totalmente digital. Você recebe um arquivo em PDF para ler no celular, tablet ou computador.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim. O material foi formatado para leitura confortável em qualquer tela, incluindo o celular.",
  },
  {
    question: "Preciso ter Air Fryer?",
    answer: "Não. Apenas o ebook Air Fryer é dedicado ao equipamento — os demais usam frigideira, forno ou panela comuns.",
  },
  {
    question: "Como recebo o ebook?",
    answer: "Após a confirmação da compra, o link de acesso chega automaticamente no seu e-mail.",
  },
  {
    question: "Posso imprimir?",
    answer: "Sim, o arquivo é seu e pode ser impresso para uso pessoal quando quiser.",
  },
  {
    question: "As receitas são fáceis de fazer?",
    answer: "Sim. Priorizamos ingredientes comuns e modos de preparo objetivos, sem técnicas complicadas.",
  },
];
