import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

const FAQSection = () => {

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqItems = [
    {
      id: 1,
      question: 'Kapan masa berlangganan di Seakun aktif?',
      answer: 'Masa berlangganan terhitung ketika Admin Whatsapp memberikan akun sharing, link invitation, atau mengundang kamu ke grup premium.',
    },
    {
      id: 2,
      question: 'Bagaimana cara melakukan pembayaran?',
      answer: 'Pembayaran bisa dilakukan melalui transfer bank atau e-wallet yang tersedia di platform kami.',
    },
    {
      id: 3,
      question: 'Apakah bisa melakukan refund?',
      answer: 'Kami tidak menyediakan opsi refund setelah masa berlangganan dimulai.',
    },
    {
      id: 4,
      question: 'Berapa lama masa berlangganan?',
      answer: 'Masa berlangganan umumnya adalah 30 hari sejak tanggal mulai langganan.',
    },
  ];

  return (
    <div id="faq" className="max-w-screen py-12 md:py-20 px-8 md:px-32 text-[#455A64] scroll-mt-[60px] md:scroll-mt-[100px]">
      <section className="bg-white">
        <div className="w-full mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">FAQ</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqItems.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className={`border ${openItems[item.id] ? 'border-yellow-200' : 'border-gray-200'} rounded-md`}>
                  <button
                    className="w-full text-left p-4 md:p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="text-sm md:text-base">
                      {item.question}
                    </span>
                    <span className="text-lg">
                      {openItems[item.id] ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </button>
                  {openItems[item.id] && (
                    <div className="bg-yellow-50 p-4 md:p-5 text-sm md:text-base">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
