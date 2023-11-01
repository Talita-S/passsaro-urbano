import { Offer } from './shared/offer.model';

export class OffersService {
  public offers: Offer[] = [
    {
      id: 1,
      category: 'restaurante',
      title: 'Super Burger',
      offer_description: 'Rodízio de Mini-hambúrger com opção de entrada.',
      advertiser: 'Original Burger',
      value: 29.9,
      emphasis: true,
      images: [
        { url: '/assets/offers/1/img1.jpg' },
        { url: '/assets/offers/1/img2.jpg' },
        { url: '/assets/offers/1/img3.jpg' },
        { url: '/assets/offers/1/img4.jpg' },
      ],
    },
    {
      id: 2,
      category: 'restaurante',
      title: 'Cozinha Mexicana',
      offer_description: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
      advertiser: 'Mexicana',
      value: 32.9,
      emphasis: true,
      images: [
        { url: '/assets/offers/2/img1.jpg' },
        { url: '/assets/offers/2/img2.jpg' },
        { url: '/assets/offers/2/img3.jpg' },
        { url: '/assets/offers/2/img4.jpg' },
      ],
    },
    {
      id: 4,
      category: 'diversao',
      title: 'Estância das águas',
      offer_description:
        'Diversão garantida com piscinas, trilhas e muito mais.',
      advertiser: 'Estância das águas',
      value: 31.9,
      emphasis: true,
      images: [
        { url: '/assets/offers/3/img1.jpg' },
        { url: '/assets/offers/3/img2.jpg' },
        { url: '/assets/offers/3/img3.jpg' },
        { url: '/assets/offers/3/img4.jpg' },
        { url: '/assets/offers/3/img5.jpg' },
        { url: '/assets/offers/3/img6.jpg' },
      ],
    },
  ];

  public getOffers(): Array<any> {
    return this.offers;
  }
}
