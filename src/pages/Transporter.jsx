import React, { useEffect, useState } from 'react';
import { getAds } from '../api';
import '../styles/Transporter.css';
import headercamion from '../assets/images/Header/header-camion.png';
import '../styles/main.css';
import AddCargoModal from '../components/AddCargoModal';

const Transporter = () => {
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCargo = () => {
    // Логіка для додавання вантажу до особистого кабінету
    console.log('Cargo added to the account!');
    handleCloseModal();
  };

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const data = await getAds();
        setAds(data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };
    fetchAds();
  }, []);

  const totalPages = Math.ceil(ads.length / adsPerPage);

  const getCurrentAds = () => {
    const indexOfLastAd = currentPage * adsPerPage;
    const indexOfFirstAd = indexOfLastAd - adsPerPage;
    return ads.slice(indexOfFirstAd, indexOfLastAd);
  };

  return (
    <div className="div__cont">
      <div className="main__item main__item_1">
        <img className="header-camion" src={headercamion} alt="header-camion" />
        <div className="camion-info __wrapper_1">
          <p className="p__camion__info">
            Вантажоперевезення по Україні, СНД та Європі{' '}
            <span className="span_text_camion">від 50 кг до 100 тонн</span>
          </p>
        </div>
      </div>
      <div className="transporter__container">
        <button onClick={handleOpenModal} className="open-modal-button">
          Додати вантаж
        </button>

        <AddCargoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAdd={handleAddCargo}
        />
        {/* Header section */}
        {/* Ads section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h1 className="text-3xl text-white mb-6">Оголошення</h1>

          {/* Ads list */}
          <div className="space-y-4">
            {getCurrentAds().map((ad) => (
              <div
                key={ad.id}
                className="bg-gray-700 rounded-lg p-4 flex gap-4"
              >
                {/* Ad image */}
                <img
                  src={ad.image || '/api/placeholder/200/200'}
                  alt="Вантаж"
                  className="w-48 h-48 object-cover rounded"
                />

                {/* Ad information */}
                <div className="flex-1 text-white">
                  <div className="mb-2">
                    <span className="font-bold">Опис:</span>
                    <p>{ad.description || 'Опис відсутній'}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <span>
                        📍 {ad.origin} - {ad.destination}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-red-400">
                        {ad.price_per_km} грн/км
                      </span>
                      <div className="text-sm">
                        Відстань: {ad.distance || 'Не вказано'}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span>🚛 Тип: {ad.cargo_type || 'Не вказано'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📦 Вантаж: {ad.weight} кг</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>⏰ Актуальність: {ad.actuality || '1 день'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>
                          📅 Кінцевий термін: {ad.deadline || '5 днів'}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg">
                        Загалом:{' '}
                        <span className="text-red-400">
                          {ad.total_price} грн
                        </span>
                      </div>
                      <button
                        className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded mt-4"
                        onClick={() => console.log('Додано оголошення:', ad.id)}
                      >
                        Додати
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    currentPage === index + 1
                      ? 'bg-red-700 text-white'
                      : 'bg-gray-600 text-white hover:bg-gray-500'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transporter;
