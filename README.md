# ShopSphere E-Ticaret Projesi

ShopSphere, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir e-ticaret uygulamasıdır.

## Kullanılan Teknolojiler

### Backend
- .NET 9.0
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server

### Frontend
- React.js 18
- TypeScript
- Material-UI (MUI) v6
- Vite
- React Router v7
- Axios

## Proje Yapısı

Proje iki ana bölümden oluşmaktadır:

1. **ShopSphere.API**: RESTful API servisleri
2. **ShopSphereUI**: React tabanlı kullanıcı arayüzü
   - `/src/components`: Yeniden kullanılabilir UI bileşenleri
   - `/src/pages`: Sayfa bileşenleri
   - `/src/api`: API entegrasyon katmanı
   - `/src/router`: Rota yapılandırmaları
   - `/src/model`: TypeScript tip tanımlamaları

## Kurulum

1. Backend için:
```bash
cd ShopSphere.API
dotnet restore
dotnet run
```

2. Frontend için:
```bash
cd ShopSphereUI
npm install
npm run dev
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE.txt` dosyasına bakınız. 