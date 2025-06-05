const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Домики у озера",
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Ресторан",
    },
    {
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d0c96f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Лесные тропы",
    },
    {
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Чистое озеро",
    },
    {
      url: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Уютные номера",
    },
    {
      url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Природа вокруг",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-emerald-50 to-green-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 font-montserrat">
            Галерея
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите, как прекрасно выглядит наша база отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
