export const WhatsAppNumber = "5511970438358";
export const LogoURL = "https://i.imgur.com/C5sqdvC.png";

export interface Cake {
  id: string;
  name: string;
  desc: string;
  price: string;
  msg: string;
  icon: string;
  color: string;
  tag?: string;
}

export const MenuCakes: Cake[] = [
  { 
    id: "cenoura",
    name: "Cenoura e Brigadeiro", 
    desc: "Massa fofinha feita com cenouras frescas e uma cobertura generosa de brigadeiro cremoso.", 
    price: "55,00",
    msg: "Olá, gostaria de encomendar o Cenoura e Brigadeiro.", 
    icon: "https://i.imgur.com/vsSR4he.png",
    color: "bg-orange-400",
    tag: "Mais Pedido"
  },
  { 
    id: "chocolatudo",
    name: "Chocolatudo", 
    desc: "Intenso sabor de chocolate, com massa úmida e cobertura de Brigadeiro com granulado gourmet irresistível.", 
    price: "60,00",
    msg: "Olá, gostaria de encomendar o Chocolatudo.", 
    icon: "https://i.imgur.com/uCFA2nQ.png",
    color: "bg-amber-900",
    tag: "Chocolate Intenso"
  },
  { 
    id: "churros",
    name: "Churros", 
    desc: "Massa amanteigada irresistível, com recheio e cobertura de doce de leite premium.", 
    price: "60,00",
    msg: "Olá, gostaria de encomendar o Churros.", 
    icon: "https://i.imgur.com/E7Q82ft.png",
    color: "bg-amber-700",
    tag: "Favorito da Casa"
  },
  { 
    id: "laranja",
    name: "Laranja Caseiro", 
    desc: "O clássico bolo da vovó, leve, fofinho e com aroma de laranjas colhidas no pé.", 
    price: "40,00",
    msg: "Olá, gostaria de encomendar o Laranja Caseiro.", 
    icon: "https://i.imgur.com/HK1GIne.png",
    color: "bg-orange-300",
    tag: "Receita de Vó"
  },
  { 
    id: "limao",
    name: "Limão Verdinho", 
    desc: "Toque cítrico e refrescante em uma massa suave com cobertura cremosa.", 
    price: "40,00",
    msg: "Olá, gostaria de encomendar o Limão Verdinho.", 
    icon: "https://i.imgur.com/6AUCYGV.png",
    color: "bg-lime-400",
    tag: "Leve e Refrescante"
  }
];
