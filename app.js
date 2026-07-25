const servicesData = [
    { id: 1, title: "Buzdolabı ve Beyaz Eşya", desc: "Buzdolabınızdaki soğutmama, su akıtma veya gürültülü çalışma gibi can sıkıcı arızalar için aynı gün, garantili ve yerinde tamir hizmeti sunuyoruz." },
    { id: 2, title: "Klima Tamiri ve Bakımı", desc: "Klimanız yeterince ısıtmıyor veya soğutmuyorsa, gaz dolumu, filtre temizliği ve detaylı bakım işlemlerini yaparak cihazınızı ilk günkü performansına kavuşturuyoruz." },
    { id: 3, title: "Soğuk Hava Deposu", desc: "İşletmenizdeki soğuk odalarda yaşanan arızalara, içerideki ürünleriniz zarar görmeden en kısa sürede müdahale ediyor ve kalıcı onarım sağlıyoruz." },
    { id: 4, title: "Market ve Şarküteri Dolabı", desc: "Dükkanınızdaki sütlük, meşrubat ve şarküteri reyon dolaplarının soğutma problemlerini, ticari işleyişinizi aksatmadan hızlı ve güvenilir bir şekilde çözüyoruz." }
];

document.addEventListener("DOMContentLoaded", () => {
    const servicesGrid = document.getElementById("services-grid");
    
    // Eğer hizmetler sayfasıdaysak kartları doldurur
    if (servicesGrid) {
        servicesData.forEach(service => {
            const card = document.createElement("div");
            card.className = "service-card";
            card.innerHTML = `
                <h4>${service.title}</h4>
                <p>${service.desc}</p>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // Footer telif yılını otomatik günceller
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright-year");
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Yedigün Teknik Servis. Tüm Hakları Saklıdır.`;
    }
});
