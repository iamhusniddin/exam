import React from "react";
import "./post.css";

const NewPosts = () => {
  return (
    <div className="main-post">
      <div className="post-wrapper">
        <img
          className="postImg"
          src="https://media.licdn.com/dms/image/D4D12AQHPNjXVleJ04A/article-cover_image-shrink_600_2000/0/1686202195050?e=2147483647&v=beta&t=hiXqk2nA2nvDMI3nX0ZqhpRRh-LTgIS14yGn0e9Z_zo"
          alt="post img"
        />
        <h1 className="postTitle">
          ChatGPTʼdan foydalanish boʻyicha eng muhim maslahatlar
        </h1>
        <p className="postText">
          ChatGPT biz xohlagan natijalarni chiqarib berishi uchun qanday ishlash
          kerak? Nega yirik kompaniyalar aynan ChatGPT bilan ishlaydigan
          mutaxassislarni jalb qilmoqda? Chatbotning qanday murakkablik
          taraflari bor?
          <br />
          <br />
          <span>
            Quyida ChatGPT koʻrsatmalarini (prompt) yaratish boʻyicha
            maslahatlarni ulashdik. Ular kodlash, marketing materiallarini
            yaratish va dars rejalarini tayyorlash uchun va boshqalarda
            asqatadi.
          </span>
          <br />
          <br />
          <span>
            1.ChatGPTʼga maʼlum bir rolni tayinlang ChatGPT unga shaxs sifatida,
            masalan, maʼlum bir lavozim nomini berganingizda yaxshi ishlaydi —
            dedi Jeyson Gulya, Berkeley kolleji AI boshqaruv kengashi raisi.
          </span>
          <br />
          <br />
          <span>
            2. Aniq boʻling, botga bir vaqtning oʻzida faqat bitta vazifani
            bering ChatGPTʼga rol tayinlaganingizdan soʻng, 300 soʻzdan iborat
            xat yozish yoki proteinli kechki ovqat retseptini yaratish kabi
            muayyan vazifani bajarishi uchun taklif yarating.
          </span>
        </p>
      </div>

      <div className="post-wrapper">
        <img
          className="postImg"
          src="https://cdn.ferrari.com/cms/network/media/img/resize/5d26fdb7c3f9ec0af6475619-01_fb_ppl_intro_lp3lhwq8?width=1080"
          alt="post img"
        />
        <h1 className="postTitle">
          Ferrari avtomobili haqida eng oxirgi yangiliklar
        </h1>
        <p className="postText">
          Mecum auksion uyi ramziy Ferrari F40 superkari uchun auksion
          o'tkazadi. 1990-yildagi ikki eshikli avtomobilning taxminiy narxi 2,35
          dan 2,65 million dollargacha.
          <br />
          <br />
          <span>
            Avtomobil 25 ming kilometrdan ortiq masofani bosib o'tgan. Biroq,
            2015-yildan 2017-yilgacha u ixtisoslashgan ustalar tomonidan keng
            qamrovli restavratsiyadan o'tkazildi. Shu sababli, 2018-yilda
            superkar Amerikaning Ferrari klubining ikkita nufuzli mukofotini
            qo'lga kiritdi va tanlov hakamlar hay'ati raisi avtomobilni o'zi
            baholagan eng zo'r haqiqiy F40lardan biri deb atadi.
          </span>
          <br />
          <br />
          <span>
            Mashina to'plamida 2014-yildagi xizmat ko'rsatish tarixini,
            shuningdek, markali asboblar to'plamini va shinalarni shishiruvchi
            nasosni o'z ichiga oladi.
          </span>
          <br />
          <br />
          <span>
            F40 brend asoschisi Enzo Ferrari hayoti davomida ishlab chiqilgan
            oxirgi model edi. U 1987-yildan 1992-yilgacha ishlab chiqarilgan,
            jami 1315 nusxa dunyo yuzini ko'rgan. Ferrari nihoyatda yengil,
            superkar 478-484 ot kuchiga ega 2,9 litrli turbomotorli V8 bilan
            jihozlangan va besh bosqichli "mexanika".
          </span>
        </p>
      </div>

      <div className="post-wrapper">
        <img
          className="postImg"
          src="https://static.euronews.com/articles/stories/07/89/69/88/1440x810_cmsv2_a6609c97-a394-502b-93c9-b451798a9cdc-7896988.jpg"
          alt="post img"
        />
        <h1 className="postTitle">Futbol yangiliklari</h1>
        <p className="postText">
          “Real” skautlari klub rahbariyatiga Niderlandiya chempionatida
          o‘ynayotgan Santyago Ximenesni olishni tavsiya qilmoqda.
          <br />
          <br />
          <span>
            22 yoshli meksikalik forvard “Feyenoord” tarkibida mavsumni juda
            zo‘r boshladi. U ettita uchrashuvda raqiblar darvozasini o‘n marta
            ishg‘ol qildi va jamoadoshlariga bir juft golli pas uzatdi.
          </span>
          <br />
          <br />
          <span>
            Ximenesning Niderlandiya chempionatidagi golli seriyasi oltita
            o‘yindan beri davom etib kelmoqda
          </span>
          <br />
          <br />
          <span>
            Manbalarning ma’lum qilishicha, “Qirollik klubi” iste’dodli
            futbolchini yanvarda ijaraga olib, mavsum oxirida to‘liq transfer
            qilmoqchi. Garchi Ximenes 25 million evroga baholanayotgan
            bo‘lsa-da, madridliklar bu ishni ikki baravar qimmatiga hal qilishga
            tayyor.
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewPosts;
