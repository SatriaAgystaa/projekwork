import { Card } from 'react-bootstrap';


const cardData = [
  {
    imgSrc: 'dashboardbarenganaja/testimonisection/user.svg',
    number: '25.000+',
    text: 'Pengguna'
  },
  {
    imgSrc: 'dashboardbarenganaja/testimonisection/transaksi.svg',
    number: '84.000+',
    text: 'Transaksi'
  },
  {
    imgSrc: 'dashboardbarenganaja/testimonisection/layanan.svg',
    number: '26+',
    text: 'Layanan'
  },
  {
    imgSrc: 'dashboardbarenganaja/testimonisection/kepuasan.svg',
    number: '4/5+',
    text: 'Kepuasan'
  }
];

const SummaryCards = () => {
  return (
    <div id="summary" className="bg-[#FAFAFA] py-12 md:py-16 px-8 md:px-32 scroll-mt-[60px] md:scroll-mt-[100px]">
      <div className="grid grid-cols-2 gap-5 w-full md:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} className="bg-[#FAFAFA] flex flex-row md:justify-center justify-start gap-2 items-center">
            <div className="flex justify-center mb-0 md:mb-4">
              <img src={card.imgSrc} alt={card.text} className="md:h-20 h-12" />
            </div>
            <div className="text-center text-[#455A64]">
              <div className="text-2xl md:text-5xl font-semibold">
                {card.number}
              </div>
              <div className="text-[8px] md:text-lg">{card.text}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
