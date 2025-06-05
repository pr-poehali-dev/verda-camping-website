import Icon from "@/components/ui/icon";

const Accommodation = () => {
  const standardRoom = {
    title: "Стандартный домик",
    capacity: "2 человека",
    area: "24 м²",
    features: [
      "Спальня (12 м²) с кроватью queen-size",
      "Гостиная с диваном и кухня (5,5 м²)",
      "Компактный санузел с душевой (3,5 м²)",
      "Крытая терраса с панорамным остеклением (8 м²)",
    ],
  };

  const familyRoom = {
    title: "Семейный домик",
    capacity: "4 человека",
    area: "36 м²",
    features: [
      "Спальня с раздельными кроватями (16 м²)",
      "Гостиная с раскладным диваном (8 м²)",
      "Полноценная ванная комната (5 м²)",
      "Кухня с базовой техникой (3 м²)",
      "Крытая терраса с панорамным остеклением (12 м²)",
    ],
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 font-montserrat">
            Размещение
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            9 современных домиков в лесу Варникен для комфортного отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Стандартный домик */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Icon name="Home" className="text-emerald-600 mr-4" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-emerald-800">
                  {standardRoom.title}
                </h3>
                <p className="text-gray-600">
                  {standardRoom.capacity} • {standardRoom.area}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                6 домиков в наличии
              </span>
            </div>

            <ul className="space-y-3">
              {standardRoom.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Icon
                    name="Check"
                    className="text-emerald-600 mr-3 mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Семейный домик */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Icon name="Users" className="text-emerald-600 mr-4" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-emerald-800">
                  {familyRoom.title}
                </h3>
                <p className="text-gray-600">
                  {familyRoom.capacity} • {familyRoom.area}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                3 домика в наличии
              </span>
            </div>

            <ul className="space-y-3">
              {familyRoom.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Icon
                    name="Check"
                    className="text-emerald-600 mr-3 mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
