 const data = [
    {
        id: 1,
        name: 'Alan Walker',
        country: 'England',
        job: 'Norway Compositor',
        image:
          'data:image/jpeg;base64,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',
        text:
          "Alan Walker is a Norwegian music producer and DJ, primarily known for his single 'Faded' (2015), which was certified platinum in 14 countries.",
      },
      {
        id: 2,
        name: 'Justin Bieber',
        country:'Canada',
        job: 'Canadian Singer',
        image:
          'https://p6.focus.de/img/incoming/id_3417022/musik-justin-bieber-sorgt-fuer-negativschlagzeilen.jpg?im=Resize%3D%28800%2C600%29&impolicy=perceptual&quality=mediumHigh&hash=8a1d0854cffff0184150eb02b46eda69fd0c3e6f919dab96ea5236f4e50d8b14',
        text:
          'Justin Drew Bieber is a Canadian singer. He is recognized for his genre-melding musicianship and global influence in modern-day popular music.',
      },
      {
        id: 3,
        name: 'Billie Eilish',
        country:'America',
        job: 'American Singer',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F05%2Fbillie-eilish.jpg&q=60',
        text:
          'Billie Eilish is an American singer and songwriter. She first gained public attention in 2015 with her debut single `Ocean Eyes`',
      },
      {
        id: 4,
        name: 'Ummon',
        country:'Uzbekistan',
        job: 'Uzbek musician group',
        image:
          'https://navolar.com/uploads/icons/xummon-guruhi.webp.pagespeed.ic.aB3qTaK-Az.webp',
        text:
          'Ummon — Zohid Rixsiyev tomonidan tuzilgan musiqiy guruh. Guruh 2007—2008-yillarda Sokin tun qo`shig`i bilan shuhrat qozondi. ',
      },
      {
          id: 5,
          name: 'Jony',
          country:'Azerbaijan',
          job: 'Russian singer',
          image:
            'https://i.scdn.co/image/ab6761610000e5ebfaca175ff553179f6b3bed6a',
          text:
            'Jahid Afrail oglu Huseynli (Azerbaijani: Cahid Əfrail oğlu Hüseynli), known professionally as JONY (born February 29, 1996) is a Russian singer-songwriter. ',
        },
        {
          id: 6,
          name: 'Jisoo',
          country:'South Korea',
          job: 'Korean singer',
          image:
            'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/06/08/4b0bdfc6-a639-11ea-8ea0-d7434be00753_image_hires_121748.jpg?itok=zq4iUnBF&v=1591589877',
          text:
            'Kim Ji-soo, known mononymously as Jisoo, is a South Korean singer and actress, popular with song—`Flower`. She is a member of the Korean girl group Blackpink',
  
        },
        {
          id: 7,
          name: 'Enrique Iglesias',
          country:'Spain',
          job: 'Spanish singer',
          image:
            'https://showbi.ru/upload/2013/03/15/20130315102209-a5552789.jpg',
          text:
            'Enrique Iglesias is a Spanish singer. He started his recording career in the mid-1990s and became the bestselling Spanish-language act of the decade.',
        },
 ]

 export default  data