import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Комфортное проживание",
      description:
        "Уютные домики и номера с современными удобствами для идеального отдыха",
    },
    {
      icon: "Utensils",
      title: "Ресторан",
      description:
        "Изысканная кухня из местных продуктов в атмосферном ресторане",
    },
    {
      icon: "Waves",
      title: "Водные развлечения",
      description:
        "Катание на лодках, рыбалка и водные виды спорта на чистом озере",
    },
    {
      icon: "TreePine",
      title: "Лесные прогулки",
      description: "Пешие маршруты и экскурсии по живописным лесным тропам",
    },
    {
      icon: "Dumbbell",
      title: "Спорт и активности",
      description:
        "Спортивные площадки, тренажерный зал и активные развлечения",
    },
    {
      icon: "Sparkles",
      title: "SPA и релакс",
      description:
        "Расслабляющие процедуры и массаж для полного восстановления сил",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Всё необходимое для незабываемого отдыха в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6 mx-auto">
                <Icon
                  name={service.icon as any}
                  className="text-white"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-semibold text-emerald-800 mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
