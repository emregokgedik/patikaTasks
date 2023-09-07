1. **Commit Nedir?**

Bir dağıtım içerisinde yapılan tüm değişikliklere commit denilir. Bir örnekle bunu açıklamak ve kavramı somutlaştırmak faydalı olacaktır.

Diyelim ki kaba inşaat bir binanız var. Bu bina henüz boyasız, penceresiz, kapısız durumda. Bu inşaatı eğer bir versiyon kontrol sistemine uyarlamak isteseydik aşağıdaki gibi bir commit geçmişi olacaktı.

- Bina kırmızı renge boyandı(Emre Usta - 07.09.2023 00:50)
- Binanın kapıları monte edildi(Hasan Usta - 08.09.2023 12:50)
- Binanın pencereleri monte edildi(Mehmet Usta - 08.09.2023 12:50)

Bu commit geçmişini incelediğimizde, aynı proje içerisinde 3 farklı kişi çalışmış görünüyor. Hatta gerçekleştirilen commitlerden ikisi aynı anda yapılmış. Fakat birbirlerinden bağımsız olduklarından bu durum olumsuz bir sonuç yaratmamış. 

Örneğin, binanın proje yöneticisi eğer binayı boyasız hale çevirmek isterse ilk commiti geri alır. Böylelikle pencere ve kapıları sökmek zorunda kalmadan boya işlemini geriye alarak bu isteğini gerçekleştirebilir. Aynı zamanda sadece kapıları sökmek isterse kapıları monte etme işlemini yani commitini geri alarak bunu yapabilir.

İşte bir yazılım projesi de bundan çok farklı değildir.

Diyelim ki bir hesap makinesi projeniz var. Bu hesap makinesi projesinin tasarımı hazır fakat fonksiyonları henüz kodlama aşamasında olsaydı, commit geçmişi muhtemelen aşağıdaki gibi olacaktı.

- Çarpma fonksiyonu geliştirildi(Emre Gökgedik - 07.09.2023 00:50)
- Toplama fonksiyonu geliştirildi(John Doe - 08.09.2023 12:50)
- Bölme fonksiyonu geliştirildi(Jane Doe - 08.09.2023 12:50)

Yine birlikte çalışan 3 farklı yazılımcı, hatta aynı anda yapılan iki farklı commiti burada da görmek mümkün. Projeyi yöneten kişi, dilediği değişikliği geri alabilir. Ya da farklı bir yazılımcı bölme fonksiyonu üzerinde bir hata olduğunu tespit ederse bu commiti inceleyebilir. Böylelikle, bir proje üzerinde sürdürülebilir geliştirme mümkün hale gelmiş olacaktır.

2. **Commit Nasıl Yapılır**

Bir klasörümüz olsun.

Klasörümüzün ismi Hesap Makinesi olsun.

Komut istemi(cmd)’yi açıp bu klasörü cd komutu ile açalım(cd Desktop > cd Hesap Makinesi)

Bu dizin içerisindeyken git -init komutuyla bu klasörü artık versiyon kontrol altında kullanacağımızı söylemiş olalım.(init=initialize, ilk adım, başlangıç gibi bir anlama gelir)

Klasör içerisinde sağ tıklayıp yeni bir metin dosyası(txt) oluşturalım fakat bunu “index.html” olarak kaydedelim.

Bu dosyayı tracked(takip edilecek) hale getirmek için cmd üzerinden “git add index.html” komutunu yazalım ve bu dosyayı da versiyon kontrole dahil edelim.

Şimdi bu değişiklikleri commit etmek için “git commit -m “Index olusturuldu” yazalım.

Böylelikle commit işlemini gerçekleştirdik.

3. **Birden fazla dosya üzerinde yapılan değişiklik nasıl tek bir committe toparlanabilir?**

Diyelim ki index.html dosyamız üzerinde bir değişiklik yapmakla birlikte login.html diye bir dosya da oluşturduk. Bu iki dosyayı tek bir commit olarak “git add index.html login.html” yazarak öncelikle Git’e ekler ve sonrasında “git commit -m “Index ve login sayfaları oluşturuldu” yazarak bu iki değişikliği tek bir committe toparlamak mümkün.

4. **Commit Mesajlarının Önemi**

Commit mesajları deyimi yerindeyse bir projenin tarihçesi niteliğini taşırlar. Dolayısıyla, proje üzerinde çalışan diğer yazılımcılar için spesifik olarak bir alanda yaşanacak gelecekteki sorunları daha hızlı saptamak ve çözüm üretmek için çok önemlidir. 

Özellikle yazılımcıların ortalama 2-3 yılda bir iş değiştirdiğini(chat gpt verisi) düşünürsek, işten ayrılmış bir yazılımcının geçmişte attığı commiti, işe yeni girmiş bir yazılımcının da anlaması gerekmektedir. Bu yüzden commit mesajları projenin verimli biçimde geliştirme sürecine sahip olması adına kritik bir öneme sahiptir.

Commit mesajlarını başlık ve açıklama olarak ikiye ayırmak örnek bir kullanımdır. İlk olarak başlık kısmını ele almak gerekirse, başlık kısmı 50 karakterden uzun olmamalıdır. Örnek bir başlık: “Kullanıcı oturum kapama işlemi eklendi - Güvenlik Güncellemesi”. Sonrasında açıklama kısmı yazılmalıdır. Bu açıklama kısmında yapılan değişikliğin neyi etkilediği, neden ve nasıl yapıldığı açıklanmalıdır. Tüm bu mesajlar yazılırken imla ve yazım kurallarına özen gösterilmelidir. Ayrıca  bu mesajlarda “eklendi, kaldırıldı, güncellendi, düzeltildi” gibi anahtar kelimeler kullanmak da önem arz etmektedir.

5. **Commit Geçmişi**

Commit geçmişine ulaşmak için komut satırında “git log” yazarak ulaşmak mümkün. Böylelikle yapılan değişiklikleri, değişikliği yapan kullanıcıyı, tarihi vb. bilgileri görüntüleyebilirsiniz.

eski bir commit'e nasıl dönebileceğinizi açıklayın.

Eski bir commit’e dönmek için söz konusu commit’in kimliğine ihtiyacınız vardır. Bunu da zaten commit geçmişinde görmeniz mümkündür. “git checkout <commit_kimliği>” komutuyla bu commite dönebilirsiniz. Tekrardan “git checkout master” yazarak mevcut sürüme dönebilirsiniz.

6. **Commit İptali**

Diyelim ki bir değişiklik yaptınız fakat bu değişikliği geri almak istiyorsunuz. Bunun için “git revert <commit_kimliği>” komutunu kullanmanız yeterlidir.
