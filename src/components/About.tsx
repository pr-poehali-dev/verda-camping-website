import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 font-montserrat">
              О базе отдыха Verda
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              База отдыха "Verda" расположена в живописном уголке природы, где
              сливаются воедино красота леса и гладь чистого озера. Мы создали
              это место для тех, кто ценит качественный отдых в гармонии с
              природой.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша команда профессионалов заботится о каждом госте, предоставляя
              высококлассный сервис и незабываемые впечатления. Здесь вы найдете
              всё необходимое для идеального отпуска.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800">Локация</h4>
                  <p className="text-gray-600">У озера в лесу</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon
                    name="Calendar"
                    className="text-emerald-600"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800">Работаем</h4>
                  <p className="text-gray-600">Круглый год</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800">
                    Вместимость
                  </h4>
                  <p className="text-gray-600">До 200 гостей</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800">Опыт</h4>
                  <p className="text-gray-600">Более 10 лет</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="База отдыха Verda"
              className="rounded-xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600 rounded-xl flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm">Рейтинг</div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className="text-yellow-300 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
