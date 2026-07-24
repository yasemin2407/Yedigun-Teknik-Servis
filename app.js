const servicesData = [
    { id: 1, title: "Buzdolabı ve Beyaz Eşya", desc: "Buzdolabınızdaki soğutmama, su akıtma veya gürültülü çalışma gibi can sıkıcı arızalar için aynı gün, garantili ve yerinde tamir hizmeti sunuyoruz." },
    { id: 2, title: "Klima Tamiri ve Bakımı", desc: "Klimanız yeterince ısıtmıyor veya soğutmuyorsa, gaz dolumu, filtre temizliği ve detaylı bakım işlemlerini yaparak cihazınızı ilk günkü performansına kavuşturuyoruz." },
    { id: 3, title: "Soğuk Hava Deposu", desc: "İşletmenizdeki soğuk odalarda yaşanan arızalara, içerideki ürünleriniz zarar görmeden en kısa sürede müdahale ediyor ve kalıcı onarım sağlıyoruz." },
    { id: 4, title: "Market ve Şarküteri Dolabı", desc: "Dükkanınızdaki sütlük, meşrubat ve şarküteri reyon dolaplarının soğutma problemlerini, ticari işleyişinizi aksatmadan hızlı ve güvenilir bir şekilde çözüyoruz." }
];

document.addEventListener("DOMContentLoaded", () => {
    const servicesGrid = document.getElementById("services-grid");
    
    servicesData.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
            <h4>${service.title}</h4>
            <p>${service.desc}</p>
        `;
        servicesGrid.appendChild(card);
    });

    const currentYear = new Date().getFullYear();
    document.getElementById("copyright-year").textContent = `© ${currentYear} Yedigün Teknik Servis. Tüm hakları saklıdır.`;
});

// Sağ alttaki yuvarlak arama butonuna tıklandığında çalışır
function openSearchPrompt() {
    const keyword = prompt("Hangi hizmeti veya sayfayı aramak istiyorsunuz? (Örn: Galeri, Hakkımızda, Hizmetler, İletişim, Klima, Buzdolabı)");
    
    if (keyword) {
        const query = keyword.toLowerCase().trim();
        if (query.includes('galeri') || query.includes('foto') || query.includes('resim')) {
            window.location.href = 'galeri.html';
        } else if (query.includes('hakkı') || query.includes('biz') || query.includes('servis')) {
            window.location.href = 'hakkimizda.html';
        } else if (query.includes('hizmet') || query.includes('tamir') || query.includes('klima') || query.includes('buzdolabı')) {
            window.location.href = 'hizmetler.html';
        } else if (query.includes('iletişim') || query.includes('telefon') || query.includes('adres')) {
            window.location.href = 'iletisim.html';
        } else {
            alert('Aradığınız kriterlere uygun sonuç bulunamadı.');
        }
    }
}
