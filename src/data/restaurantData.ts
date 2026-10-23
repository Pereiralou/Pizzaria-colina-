export interface MenuItem {
  id: string;
  name: string;
  category: 'pizzas' | 'pratos' | 'pequeno-almoco' | 'sobremesas' | 'bebidas';
  description: string;
  priceAOA: number;
  familyPriceAOA?: number;
  highlightTag?: string;
  prepInfo?: string;
  badge?: string;
  image: string;
  tags?: string[];
  isSpecialty?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  initial: string;
  date?: string;
}

export const RESTAURANT_INFO = {
  name: 'Restaurante & Pizzaria Colina',
  shortName: 'Pizzaria Colina',
  tagline: 'A autêntica alma da pizza no forno & cozinha acolhedora do Planalto',
  city: 'Huambo',
  country: 'Angola',
  region: 'Planalto Central',
  address: '6PCQ+W5W, Cidade de Huambo, Província do Huambo, Angola',
  plusCode: '6PCQ+W5W',
  phone1: '+244 924 552 222',
  phone1Raw: '+244924552222',
  phone2: '+244 940 794 987',
  phone2Raw: '+244940794987',
  whatsapp: '+244924552222',
  googleMapsUrl: 'https://www.google.com/maps/place/Restaurante+%26+Pizzaria+Colina/@-12.7776336,15.7379647,17z/',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100082672485905',
  averageTicketMin: 9100,
  averageTicketMax: 22800,
  rating: 3.8,
  reviewCount: 154,
  schedules: [
    {
      day: 'Segunda-feira',
      hours: '07:30 – 22:00',
      description: 'Serviço matinal e contínuo',
      status: 'Aberto'
    },
    {
      day: 'Terça-feira a Domingo',
      hours: '08:30 – 22:30',
      description: 'Forno a Lenha a pleno vapor',
      status: 'Aberto com Forno Completo'
    }
  ],
  features: [
    {
      title: 'Esplanada & Salão',
      desc: 'Ambiente familiar ao ar livre e salão climatizado',
      icon: 'deck'
    },
    {
      title: 'Takeaway & Entrega',
      desc: 'Embalagem térmica selada e rápida recolha',
      icon: 'takeout_dining'
    },
    {
      title: 'Estacionamento',
      desc: 'Parque privativo no próprio local do restaurante',
      icon: 'local_parking'
    },
    {
      title: 'Serviço Verificado',
      desc: 'Atendimento Huambo 2025 com TPA e Multicaixa Express',
      icon: 'verified_user'
    }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // PIZZAS DE FORNO A LENHA
  {
    id: 'pizza-colina-especial',
    name: 'Pizza Colina Especial',
    category: 'pizzas',
    description: 'Base de pomodoro artesanal, duplo queijo mozzarella fundido, presunto curado fatiado fino, cogumelos frescos salteados e fio de azeite de ervas do Huambo.',
    priceAOA: 14500,
    familyPriceAOA: 19800,
    highlightTag: 'Clássica da Casa',
    prepInfo: 'Forno a Lenha',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5-yL-1oiq926YKXUAAIHGTf8712DuwbvXcWPKRe5FKc19UPUSlskZp7BmzqmBBRpPsnTSqPKABpRJGNOhPeD_0qFpr3KIsQsblphdQkZhDvOyvF31OZzsoh4Rg_XWzGfCXGhhywWTICcwTpWqMw1SQM32FKeU7WIbsEWRgJ-lM8lJ_9j2LyGjwQImf4V766FHmuYOtoS8AlfwqNb_hyhmOSVLL0VyL1xGKPK-Ea-39URgzaIz9MRlpg',
    tags: ['Massa fina estaladiça', 'Forno tradicional', 'Favorito'],
    isSpecialty: true
  },
  {
    id: 'pizza-quatro-queijos',
    name: 'Quatro Queijos Selecionados',
    category: 'pizzas',
    description: 'Harmonia rica de Mozzarella derretida, Gorgonzola aromático, Parmesão ralado na hora e Ricota cremosa sobre molho de tomate suave e manjericão fresco.',
    priceAOA: 13200,
    familyPriceAOA: 18500,
    highlightTag: 'Mais Pedida',
    prepInfo: 'Massa Fina & Estaladiça',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSG_bUS6ddA2o_6UKfgGW8OGDXTHZVoXQJ7Wtq0YaU8YioBZF_FagNin00mvkprA_hXqJFzx6cEmBOh2rwVmznIK1eo6hlExRlh9XoP8AKeV0t0c4_iTabo6klmOkxmaM5OomoBoXpkSBTdUgZU04tPext_4aKYcFnbD4us5la_POIzE2BYjGOMW0W0HA2WwVGzZKW1QRZxGaqcD4lie2tLWqSytivK_tYGPP4bgAxkIrDTFQeKS1BeQ',
    tags: ['Vegetariano', 'Queijos nobres', '48h Fermentação'],
    isSpecialty: true
  },
  {
    id: 'calzone-rustico',
    name: 'Calzone Rústico Recheado',
    category: 'pizzas',
    description: 'Pizza dobrada e selada com recheio abundante de fiambre de peru, mozzarella, espinafres salteados, azeitonas pretas e toque de orégãos colhidos à mão.',
    priceAOA: 15000,
    familyPriceAOA: 21000,
    highlightTag: 'Recheio Generoso',
    prepInfo: '15 min no Forno',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcQMbwuKs-S8VxftcrKNM0gfoqs9ks3sdNnsI0s5xGAYrYkHyymNFRD9syVCwUXQ1FkD4YTVD7p38s2ca1R70jYQky97fthUs_VkzLWsjE48buT1RxrHIrIWs0kI4wjBiFuRS40XWSzpkKg5zCLM1PwwHHgt6iTMm7vOSEVqmjwgyHtErRtFTTG_cePoR6bXQb54hFyUre98P6zO292nawab0kDhsJD6vALp2sSUfojqk42hpg-4353w',
    tags: ['Calzone fechado', 'Dose dupla generosa'],
    isSpecialty: true
  },

  // PRATOS DE RESTAURANTE (GRELHADOS & COZINHA)
  {
    id: 'bife-casa-colina',
    name: 'Bife à Casa Colina com Molho Especial',
    category: 'pratos',
    description: 'Corte nobre de novilho grelhado no ponto da sua preferência, selado na brasa e coberto com redução cremosa de pimentas e alho-francês. Acompanha batata rústica.',
    priceAOA: 17800,
    highlightTag: 'Almoço & Jantar',
    prepInfo: 'Grelhado no Carvão Natural • Dose Individual Generosa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFXwm21mU_PT7GuxNp0bFhmn2h5wVdyussA_dxmaVuvjpLvTvbPc3rNR4OAaJoR2aABwHkVAYZ8HsfXUxTLmaOBU1EDu95anZrIdpuD5Q8Gr7H3eJo4UuoKWaLYgHl_PlLqu06YTFfYHSjG-5fHvhF6f-XcHGPxfqJyiMKwreqiClkdRsk8Wf5dADe2OwDrY0brwfeyq2uHIvQWopw41q9h75ZKaBEb9zFu5h5TJoQihjVVZds0UJ7Uw',
    tags: ['Novilho', 'Grelha a carvão', 'Batata rústica']
  },
  {
    id: 'frango-churrasco-planalto',
    name: 'Frango no Churrasco à Moda do Planalto',
    category: 'pratos',
    description: 'Frango inteiro marinado em vinho branco, louro, limão e jindungo suave, assado lentamente na grelha até a pele dourar uniformemente. Acompanha arroz e salada.',
    priceAOA: 11500,
    highlightTag: 'Ideal p/ Partilhar',
    prepInfo: 'Molho Piri-Piri à Parte',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMYDV5HmmcN8xq6-L8npbL5vx4Yf_RGP3o8fnYU1seBe9CdGnUslfmKT0wwDLcgukDOqVdFy3NR8VdEjXjLjTew0ye8vQ5Yq6Lllt1oXOH5gV6L5TnwblvoFof7HIoWiwvLWKRSePBamWVhbQIDPsb60rtl2g9UOXzXl21T-eFsSkQn81XuxUbWW5nagBK5xV7hsNgUOoZ9RJjZfxv-9WNMe6ctK8h4yaNDNQjEwLRFgAe8OYn0Uohxw',
    tags: ['Churrasco', 'Familiar', 'Tradicional']
  },
  {
    id: 'massa-fresca-camarao',
    name: 'Massa Fresca Salteada com Camarão',
    category: 'pratos',
    description: 'Fettuccine artesanal envolto em molho aveludado de azeite extra virgem, alho dourado, camarões tenros, tomate cereja confitado e raspas de queijo seco.',
    priceAOA: 16200,
    highlightTag: 'Massa do Dia',
    prepInfo: 'Massa de Fabrico Diário',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3-w6-tgBcospljT67TZop1gK68YW31lunFp4Fl177mYJ0JN21n9gXQtKb5i_kUUn32t51u0FwTJaOWKiULz4Zl30UFmK3pnrgMIEyy3Byy-PgW7eUe5F3JYiTV4eBScKLE-lhAJZC3XNN8itRiLRny6_cut97MwOI1_m3KDdSRFIrZWFuBZhW_vCS_bhVinOFA87TZEmQSX0XGIe-npEbK7xfSrLiSCESIP7BnOeUnaCPjcPf-IaD7w',
    tags: ['Frutos do Mar', 'Massa artesanal']
  },
  {
    id: 'costeletas-porco-ervas',
    name: 'Costeletas de Porco Grelhadas com Ervas',
    category: 'pratos',
    description: 'Costeletas tenras maturadas com alecrim selvagem e flor de sal, preparadas ao momento na brasa com crosta crocante e miolo tenro e suculento.',
    priceAOA: 13900,
    highlightTag: 'Sugestão Executiva',
    prepInfo: 'Sugestão de Almoço de Negócios e Família',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGhUqd6TaxaMQ0xpyeKKGVhPh3HJ7pUp2urHPwlKGaDDDmtWMeYqR3x0ONfJGpyomVSktMrM-l9V1BDC3wa8CIcmmjr-ZaGRUzRpe1dB5pSpCIKZpUyN4T53PeTM86ASvVoYPbLtFpVcP24nEPdY8a-7nrbE1f9arYkNWASJaMcMK55yj5xS3_BAtWh585pqVSphAoLtDC9wNlYz7_PRZlIwatvc7P-Ei6SeNcKS0uFarYIgJWe4tVw',
    tags: ['Brasa', 'Ervas aromáticas']
  },

  // PEQUENO-ALMOÇO & CAFETARIA
  {
    id: 'omelete-completa-colina',
    name: 'Omelete Completa da Colina',
    category: 'pequeno-almoco',
    description: 'Ovos frescos batidos, queijo mozzarella, fiambre, cebola doce caramelizada e salsa fresca, servida com duas fatias de pão rústico.',
    priceAOA: 4800,
    highlightTag: 'Manhãs no Huambo',
    prepInfo: 'Café Expresso Incluído',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHIhxmHVjl4NziMcdBjXPxzy5YbPpdIdElWzhmKBxqJnZE0dBPCXZ1BlnSt2ZwKzfV9i9ENHEzDHGK6yB2IC2Brq3H34afNRz8T6GunnRO9XENe7eCj6Nh4qMeLzytUbDg7asDfxAMkp1A2Gl0WRVwOv09NmofidXO7qd9q0VFit7-MH1UR_EOmyDKY5ZFMVeoQF_JyYkmkNiLhjNy9Eo3_Wm_cz9t9xN08LHsSt0HW905bdJzO3IE6g',
    tags: ['Matinal', 'Ovos frescos']
  },
  {
    id: 'tosta-mista-pao-caseiro',
    name: 'Tosta Mista em Pão Caseiro',
    category: 'pequeno-almoco',
    description: 'Pão de forno de fermentação natural, manteiga dos planaltos, queijo derretido abundante e fiambre prensado na chapa quente.',
    priceAOA: 3500,
    highlightTag: 'Preparo Rápido',
    prepInfo: 'Pão artesanal do dia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsjYzs7L-nRm2DyRRW3hLcRSgMzIDxMjra4objmfJh7SptjUIbp6wrfq3KYz_KaY6spKJ4nauADGH2vQH68hWvQ9VMmroz_gksvhcfQ5v6sqvpfQun3Aw8UR7Vipy8bSpOf-BSW-ZvrHLzxwlmN57NbtnCN04I86ZWZDxZQaRUXeKAT7isKsUhhOMmKlAx-_2QCT98WLz1Z92hTEKTP9C6eVhzGEzfoiLA7xKGy2lBNhf9vE-9b8WPxw',
    tags: ['Lanche', 'Pão quente']
  },
  {
    id: 'sumos-naturais-fruta',
    name: 'Sumos Naturais de Fruta Local',
    category: 'pequeno-almoco',
    description: 'Laranja doce, Maracujá do Huambo, Manga ou Abacaxi natural exprimidos na hora sem adição de corantes nem açúcares artificiais.',
    priceAOA: 2600,
    highlightTag: '100% Vitamina Natural',
    prepInfo: 'Feito no momento',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9B9q-XbiiMOXK9TJXfgS2QcdF-4PaBaUEQEitKVo3sEFQdip8tvCVrRg0YZ7MHmirxP9Rv8pTONfKb93dK7VhH7rywDvdr2dGRg0o6vSM6AY4oroXp1aePczRCtCT7xYTx2HuIHhQMb-FwzjiHeGucjx7bEx3DQ72OopjzRT2pvwJfl17V7-UTWSuLL7cd6ns2TRvpHJfEpqxJBywFlMT1WUu2GjoRT0QdLC6HEY5Z-bYBPUVHEAeuQ',
    tags: ['Frutas do Huambo', 'Sem conservantes']
  },
  {
    id: 'cafetaria-galao',
    name: 'Cafetaria & Galão Quente',
    category: 'pequeno-almoco',
    description: 'Grãos de café selecionados de Angola, extraídos em alta pressão com crema espessa. Disponível em expresso, pingado, cappuccino ou meia de leite.',
    priceAOA: 1200,
    highlightTag: 'Lote Especial Angolano',
    prepInfo: 'Expresso / Pingado / Meia de leite',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrLv3WewKpt8LRMwStuCaFS0HSMNJqYED2w0sx6viLMas8w8LzHAMMC_H5Ey1lHlXD-LczkVQGGFjXUUVbluCtKF9lIQe-SN36Yg1b4xBMypRDa4CQAkOX_k93_iaZKC-mloHUK2uOIvWLjWQ23bAOCaW6DZPV3dSO7oVkpztWGzKjmKnSaIio7cuI8pbr22C4lscKK-PNjxzAloM_ZRCuRQv3rDfy-Cupt1QCSy7rNmvNJPxm0SacA',
    tags: ['Café de Angola', 'Crema dourada']
  },

  // SOBREMESAS DA CASA
  {
    id: 'pudim-caramelo',
    name: 'Pudim Caseiro de Caramelo',
    category: 'sobremesas',
    description: 'Textura aveludada com calda dourada e aroma natural de baunilha.',
    priceAOA: 2900,
    highlightTag: 'Fecho Perfeito',
    prepInfo: 'Receita tradicional',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBrV4fb8EjH2J1j5IeVy0Anw9HxR8-_70OTG7Am6Zpd61E5uwV5nFo--5RhXg3iIoE8MKe1pbfJTyjsJ05lTAFOyR9yLyi43K7xFk-JzYtQ45CE7brdzHzGOL1NyTp6VjBFwTDVRJm1-DR4yfyZpOJ0zopWDpw0kLCeVrDDBikMPEyTF8nPcQNKjSXmJ8hXs6edVbqOEK4Fm51oWg703KO6F1ML6rTbNK0YLj0XZdDGd8ieokEdtfQoQ',
    tags: ['Doce de colher', 'Caseiro']
  },
  {
    id: 'mousse-chocolate-puro',
    name: 'Mousse de Chocolate Puro',
    category: 'sobremesas',
    description: 'Cacau intenso e natas frescas batidas, com textura aerada e sabor marcante.',
    priceAOA: 3200,
    highlightTag: 'Cacau Intenso',
    prepInfo: 'Pastelaria artesanal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHYNPI2mJ4kRttXDRiZ748FnqR1AtygQ3SIn1XLvp-9tVOJc9nLwhcuJOtJt2FEqhL6n4eWU4vb5I0uTvLnrU8wwdagZdyOaTZVXZ-gT2RMgZ9Yx4IqaECpxAesiV5nIwXybY1PZ9B88VZIfbcutjynOga62qcZBwhLaZvHEuVT9HTNMz9zoJVwczUZiOjGr7V8kcKIYv2MGN0l8oTLmCMRFEJ9Ksa8dyUxZluAODeT7UYq1VCkwSrww',
    tags: ['Chocolate nobre', 'Textura aveludada']
  },
  {
    id: 'tiramisu-tradicional',
    name: 'Tiramisù Tradicional',
    category: 'sobremesas',
    description: 'Café expresso forte e creme mascarpone italiano, polvilhado com cacau fino.',
    priceAOA: 3600,
    highlightTag: 'Clássico Italiano',
    prepInfo: 'Feito na casa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA17UkFWri6fYsfg0DNUdq8SUGoqXkDhlg-AqSbGVQjT0PuYIPAK-CZX64QiGdm-Xr9Me42eGYDPIrPlVGyze-GDQNDOnMZ8pKwTuh3xA-UcNl_xW8syTdEfnXqKNO-LqgtyJD5dTthJXlUNgZgLYGXS86uFQkifwBLa9U_q7YUM_e6mYeXzlOkEA7i-0mfOLi7aYRhOgRJDWcHi7lhCT97Nl6xDnDtg5r28ECDyUe-imEpb9g9S1DUpg',
    tags: ['Mascarpone', 'Café especial']
  },
  {
    id: 'fruta-tropical-laminada',
    name: 'Fruta Tropical Laminada',
    category: 'sobremesas',
    description: 'Abacaxi doce, meloa aromática e mamão da época cortados finamente.',
    priceAOA: 2400,
    highlightTag: 'Fresco & Leve',
    prepInfo: 'Fruta biológica local',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzgyBwjBfkXFPrK8Q14mv1RL8ma6wFMI6sxdKk-FCQtRXGhC882MdRTWh0BlnTJ42orP90jvoYkk_9eXtUmB4xaSsChN1Z12wA7NUyrFx_NTcne5BXxMkvLk1qLwFKpMUdmA3Lt5peCIQaJK5Vx2XwnyE7rKV63Bnup3n6Qyl7uo_7t-NLoSULCcLRl5q6_oW3i9Gqjn0zCA941ZRhZvqQt7Tgst7vQTaluXnAr0kXuTXOc7PZ3fCvJA',
    tags: ['Natural', 'Sem glúten']
  },

  // BEBIDAS & VINHOS
  {
    id: 'cerveja-cuca-nocal',
    name: 'Cerveja Cuca / Nocal Garrafa 33cl',
    category: 'bebidas',
    description: 'Servida estaladiça e muito gelada, o par tradicional das refeições huambenses.',
    priceAOA: 1100,
    highlightTag: 'Nacional Gelada',
    prepInfo: 'Garrafa 33cl',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjyfYZWbAzFzF05n54Qx427xMaDs0ChuNfrmi16gSrW5depc29WiLQHsIZY5M1UOr36v9KxJ_QW9zHnA377SRh62HbB3PlN1SiKmbWRB3BmaemjCAn5QFsNZi2bRXgi_ejVrsl19k7-htN9c0mbnPfgLzGD3Y2zFICrv824mUET-cyoyU2-qdisEQnWAtfpM_1-DdZseBeiJXmkbnmlwm0bwoFMeZGQ1KG0uPgKLEzXZAZ2vLwx-icEQ',
    tags: ['Cerveja', 'Nacional']
  },
  {
    id: 'vinho-alentejano',
    name: 'Vinho Tinto & Branco Alentejano (Garrafa)',
    category: 'bebidas',
    description: 'Excelente corte de uvas portuguesas ideal para harmonizar com carnes grelhadas e pizzas.',
    priceAOA: 8500,
    highlightTag: 'Garrafeira',
    prepInfo: 'Garrafa 750ml',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaAuk6VnzrudeoGPtIe-zikJb5Mpp6qdTG5I0xMHV2oSc5HtLU8BeM8GeXwpSj3pay3pkpYIondLX7isuZx01MNOoGTM4W4xJY3lx94uoRsv16rdjMgS04sWA-E_gmdBSVZKhju6xLUYXxqvQKUFBo12naAHAQ82hMy2Ol4IFG1iClRMwBfx5A6ORufZ-vNtYNaXVRY5mgYtEwDa5VxlQtNmI9JY8zETwhWk6Vfxr5asL1Fk2jJng8hA',
    tags: ['Vinho', 'Garrafa']
  },
  {
    id: 'agua-mineral-gas',
    name: 'Água Mineral com / sem Gás 0,5L',
    category: 'bebidas',
    description: 'Água pura de nascente de montanha natural, fresca ou natural.',
    priceAOA: 700,
    highlightTag: 'Nascente',
    prepInfo: 'Garrafa 500ml',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9B9q-XbiiMOXK9TJXfgS2QcdF-4PaBaUEQEitKVo3sEFQdip8tvCVrRg0YZ7MHmirxP9Rv8pTONfKb93dK7VhH7rywDvdr2dGRg0o6vSM6AY4oroXp1aePczRCtCT7xYTx2HuIHhQMb-FwzjiHeGucjx7bEx3DQ72OopjzRT2pvwJfl17V7-UTWSuLL7cd6ns2TRvpHJfEpqxJBywFlMT1WUu2GjoRT0QdLC6HEY5Z-bYBPUVHEAeuQ',
    tags: ['Água', 'Fresca']
  },
  {
    id: 'refrigerantes-lata',
    name: 'Refrigerantes em Lata Diversos',
    category: 'bebidas',
    description: 'Coca-Cola tradicional e zero, Fanta Laranja, Sprite limão e Água Tónica bem geladas.',
    priceAOA: 1000,
    highlightTag: 'Gelado',
    prepInfo: 'Lata 330ml',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrLv3WewKpt8LRMwStuCaFS0HSMNJqYED2w0sx6viLMas8w8LzHAMMC_H5Ey1lHlXD-LczkVQGGFjXUUVbluCtKF9lIQe-SN36Yg1b4xBMypRDa4CQAkOX_k93_iaZKC-mloHUK2uOIvWLjWQ23bAOCaW6DZPV3dSO7oVkpztWGzKjmKnSaIio7cuI8pbr22C4lscKK-PNjxzAloM_ZRCuRQv3rDfy-Cupt1QCSy7rNmvNJPxm0SacA',
    tags: ['Refrigerante']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Manuel K.',
    role: 'Cliente Habitual • Huambo',
    rating: 5,
    comment: 'Melhor pizza que comi no Huambo! A massa é fina, estaladiça nas pontas e bem recheada. O espaço exterior na esplanada é muito agradável ao final da tarde.',
    initial: 'M'
  },
  {
    id: 'rev-2',
    author: 'Esperança V.',
    role: 'Avaliação Google Local',
    rating: 4,
    comment: 'Espaço acolhedor e seguro para levar a família com crianças. Pratos de grelhados muito bem servidos e pizza quentinha para levar para casa.',
    initial: 'E'
  },
  {
    id: 'rev-3',
    author: 'Artur D.',
    role: 'Visita em Família',
    rating: 5,
    comment: 'O café da manhã é excelente para reuniões de trabalho e a entrega takeaway foi super rápida com a pizza ainda a fumegar. Recomendo com toda a certeza!',
    initial: 'A'
  },
  {
    id: 'rev-4',
    author: 'Teresa B.',
    role: 'Almoço de Negócios • Huambo',
    rating: 4,
    comment: 'Ambiente tranquilo no salão com ar condicionado. O Bife à Casa Colina e as batatas rústicas estavam no ponto exato. Atendimento educado e atencioso.',
    initial: 'T'
  }
];
