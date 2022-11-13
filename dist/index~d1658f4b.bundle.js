"use strict";(self.webpackChunkapps_restauran_pwa=self.webpackChunkapps_restauran_pwa||[]).push([[127],{756:(n,A,r)=>{r.d(A,{Z:()=>a});var t=r(537),e=r.n(t),i=r(645),o=r.n(i)()(e());o.push([n.id,"* {\n  box-sizing: border-box;\n}\n \nbody {\n  font-family:'Times New Roman', Times, serif;\n  /* background-color: #B73E3E; */\n  position: block;\n  margin: 0 0 70px 0;\n}\n\n/* menerapkan next content */\n\n.skip_link{\n  position: absolute;\n  top: -50px;\n  left: 0;\n  padding: 10px;\n  background-color: #A7FFE4;\n  color: #333;\n  z-index: 11;\n  text-decoration: none;\n}\n\n.skip_link:focus{\n  top: 0;\n}\n\nhtml {\n  font-size: 16px;\n  position: relative;\n  min-height: 100%;\n}\n\n\n\nmain{\n  height: 5000px;\n}\n\nheader{\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  min-height: 50px;\n}\n\n\n\nheader .logo_restauran{\n  display: flex;\n  justify-content: center;\n  width: 50%;\n  font-size: 16px;\n}\n\nheader .menu_button_style{\n  font-size: 2rem;\n  font-weight: 900;\n  min-width: 44px;\n  min-height: 44px;\n  color: antiquewhite;\n}\n\nheader,nav{\n  background-color: #B73E3E;\n}\n\nnav {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 20px;\n  \n}\n\nnav ul {\n  /* width: 100%; */\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n  justify-content:space-evenly;\n  background-color: #EEEEEE;\n  /* border-radius: 120px 90px 60px 30px/30px 60px 90px 120px; */\n  padding: 10px;\n}\n\nnav ul li {\n  text-align: center;\n  box-sizing: border-box;\n}\n\nnav ul li a:hover{\n  color: #AC4425;\n}\n\n\n#drawer_element ul li .button_navbar{\n  padding: 20px;\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n  position: relative;\n  z-index: 400;\n}\n\n#drawer_element ul li .button_navbar:hover{\n  background-color: #AC4425;\n  color: #EEEEEE;\n  border-radius: 10px;\n  transition: 5s;\n}\n\nbutton{\n  background-color: #EEEEEE;\n}\n\nbutton span{\n  color: #AC4425;\n}\n\n#drawer_element ul li .button_navbar::-moz-focus-outer{\n  background-color: #AC4425;\n  color: #EEEEEE;\n  border-radius: 10px;\n  transition: 5s;\n}\n\n\n\n\n/* Akhir Navbar */\n\n\n/* Hero */\n\n.hero{\n  position: relative;\n  z-index: 100;\n}\n\n.hero picture {\n  margin: 0 auto;\n  width: 600px;\n}\n\n.hero picture img{\n  width: 100%;\n}\n\n.head_title {\n  text-align:center;\n  position: absolute;\n  font-size: 18px;\n  max-width: 900px;\n  left: 0;\n  right: 0;\n  color: white;\n  margin: 0 auto;\n  bottom: 50%;\n}\n\n.hero_title, .hero__tagline {\n  border: 4px solid white;\n  padding: 10px 50px;\n  position: relative;\n  left: 0;\n  right: 0;\n  border-radius: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.hero_title:hover {\n  background: -webkit-linear-gradient( #FDFF00, rgb(130, 139, 42));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n\n/* akhir Hero */\n\n\n\n/* resto content */\n\n\n.content_resto{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 200px;\n}\n\n\n.resto_explor{\n  max-width: 800px;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n}\n\n.resto_explor .title_explor{\n  margin: 0 auto;\n  display: block;\n}\n\n\n.list_resto{\n  display: flex;\n  align-items: center;\n  max-width: 1200px;\n  min-height: 400px;\n}\n\n\n.restaurant figure img{\n  width: 100%;\n  margin: 0 auto;\n}\n\n.restaurant{\n  max-width: 300px;\n  min-height: 56px;\n  text-align: justify;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #F8C4B4;\n}\n\n.city{\n  max-width: 100%;\n  height: 100px;\n  background-color: #DD5353;\n  border: #AC4425;\n  border-radius: 5px;\n  text-align: center;\n  margin-bottom: 1em;\n  line-height: 100px;\n}\n\n.detail-view{\n  background-color: aliceblue;\n  border: 1px solid #A7FFE4;\n  border-radius: 5px;\n  text-align: center;\n  margin-bottom: 1em;\n  box-sizing: border-box;\n  line-height: 44px;\n}\n\n.detail-view:hover {\n  background-color: #EEEEEE;\n  transition: 0.5s;\n}\n\n/* .city h4{\n  display: block;\n  margin: 0 auto;\n} */\n\n\nfooter{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 5px solid #EEEEEE;\n  background-color: #3E6D9C;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 200px;\n}\n/* Detail Style */\n\ndetail-content{\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n  top: -400px;\n}\n\n\n.restaurant_detail{\n  max-width: 800px;\n  min-height: 56px;\n  text-align: justify;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #F8C4B4;\n  position: relative;\n}\n\n.restaurant_detail figure img{\n  width: 100%;\n  margin: 0 auto;\n}\n\n.menu_title{\n  text-align: center;\n}\n\n\n\n\n.menu_foods {\n  margin: 0 auto;\n  width: 500px;\n  padding: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  border-top-right-radius: 15px;\n  border-top-left-radius: 15px;\n}\n\n\n.menu_drinks {\n  margin: 0 auto;\n  width: 500px;\n  padding: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n\n.drinks_title{\n  text-align: center;\n}\n\n.foods_title{\n  text-align: center;\n}\n\ntable{\n  text-align: center;\n  margin: 0 auto;\n}\n\n\n.content_review{\n  padding: 50px;\n}\n\n\n.review_content_list{\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 10px;\n  padding: 30px;\n  background-color: #EEEEEE;\n  margin-top: 10px;\n}\n\n\n.button-content{\n  background-color: #AC4425;\n  /* position: absolute;\n  bottom: 500px; */\n  position: absolute;\n  transform: translate(200%, 500%);\n  bottom: 2000px;\n  padding: 50px;\n}\n\n\na[href*=\"#/detail\"]{\n  min-width: 44px;\n  min-height: 44px;\n  display: block;\n}\n\n.like_button{\n  /* color:#AC4425; */\n  padding: 10px;\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n#likeButtonContainer{\n  position: fixed;\n  right: 100px;\n  max-width: 200px;\n  top: 30%;\n}\n\n.constnetAllmenu{\n  display: flex;\n}\n\n.button-content{\n  background-color: #333;\n}\n\n\n.review_content_list .tag_name {\n  margin-bottom: 5px;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.review_content_list .review {\n  padding: 5px;\n  border-radius: 10px;\n}\n\n\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  box-sizing: border-box;\n}\n \nbody {\n  font-family:'Times New Roman', Times, serif;\n  /* background-color: #B73E3E; */\n  position: block;\n  margin: 0 0 70px 0;\n}\n\n/* menerapkan next content */\n\n.skip_link{\n  position: absolute;\n  top: -50px;\n  left: 0;\n  padding: 10px;\n  background-color: #A7FFE4;\n  color: #333;\n  z-index: 11;\n  text-decoration: none;\n}\n\n.skip_link:focus{\n  top: 0;\n}\n\nhtml {\n  font-size: 16px;\n  position: relative;\n  min-height: 100%;\n}\n\n\n\nmain{\n  height: 5000px;\n}\n\nheader{\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  min-height: 50px;\n}\n\n\n\nheader .logo_restauran{\n  display: flex;\n  justify-content: center;\n  width: 50%;\n  font-size: 16px;\n}\n\nheader .menu_button_style{\n  font-size: 2rem;\n  font-weight: 900;\n  min-width: 44px;\n  min-height: 44px;\n  color: antiquewhite;\n}\n\nheader,nav{\n  background-color: #B73E3E;\n}\n\nnav {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 20px;\n  \n}\n\nnav ul {\n  /* width: 100%; */\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n  justify-content:space-evenly;\n  background-color: #EEEEEE;\n  /* border-radius: 120px 90px 60px 30px/30px 60px 90px 120px; */\n  padding: 10px;\n}\n\nnav ul li {\n  text-align: center;\n  box-sizing: border-box;\n}\n\nnav ul li a:hover{\n  color: #AC4425;\n}\n\n\n#drawer_element ul li .button_navbar{\n  padding: 20px;\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n  position: relative;\n  z-index: 400;\n}\n\n#drawer_element ul li .button_navbar:hover{\n  background-color: #AC4425;\n  color: #EEEEEE;\n  border-radius: 10px;\n  transition: 5s;\n}\n\nbutton{\n  background-color: #EEEEEE;\n}\n\nbutton span{\n  color: #AC4425;\n}\n\n#drawer_element ul li .button_navbar::-moz-focus-outer{\n  background-color: #AC4425;\n  color: #EEEEEE;\n  border-radius: 10px;\n  transition: 5s;\n}\n\n\n\n\n/* Akhir Navbar */\n\n\n/* Hero */\n\n.hero{\n  position: relative;\n  z-index: 100;\n}\n\n.hero picture {\n  margin: 0 auto;\n  width: 600px;\n}\n\n.hero picture img{\n  width: 100%;\n}\n\n.head_title {\n  text-align:center;\n  position: absolute;\n  font-size: 18px;\n  max-width: 900px;\n  left: 0;\n  right: 0;\n  color: white;\n  margin: 0 auto;\n  bottom: 50%;\n}\n\n.hero_title, .hero__tagline {\n  border: 4px solid white;\n  padding: 10px 50px;\n  position: relative;\n  left: 0;\n  right: 0;\n  border-radius: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.hero_title:hover {\n  background: -webkit-linear-gradient( #FDFF00, rgb(130, 139, 42));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n\n/* akhir Hero */\n\n\n\n/* resto content */\n\n\n.content_resto{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 200px;\n}\n\n\n.resto_explor{\n  max-width: 800px;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n}\n\n.resto_explor .title_explor{\n  margin: 0 auto;\n  display: block;\n}\n\n\n.list_resto{\n  display: flex;\n  align-items: center;\n  max-width: 1200px;\n  min-height: 400px;\n}\n\n\n.restaurant figure img{\n  width: 100%;\n  margin: 0 auto;\n}\n\n.restaurant{\n  max-width: 300px;\n  min-height: 56px;\n  text-align: justify;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #F8C4B4;\n}\n\n.city{\n  max-width: 100%;\n  height: 100px;\n  background-color: #DD5353;\n  border: #AC4425;\n  border-radius: 5px;\n  text-align: center;\n  margin-bottom: 1em;\n  line-height: 100px;\n}\n\n.detail-view{\n  background-color: aliceblue;\n  border: 1px solid #A7FFE4;\n  border-radius: 5px;\n  text-align: center;\n  margin-bottom: 1em;\n  box-sizing: border-box;\n  line-height: 44px;\n}\n\n.detail-view:hover {\n  background-color: #EEEEEE;\n  transition: 0.5s;\n}\n\n/* .city h4{\n  display: block;\n  margin: 0 auto;\n} */\n\n\nfooter{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 5px solid #EEEEEE;\n  background-color: #3E6D9C;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 200px;\n}\n/* Detail Style */\n\ndetail-content{\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n  top: -400px;\n}\n\n\n.restaurant_detail{\n  max-width: 800px;\n  min-height: 56px;\n  text-align: justify;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #F8C4B4;\n  position: relative;\n}\n\n.restaurant_detail figure img{\n  width: 100%;\n  margin: 0 auto;\n}\n\n.menu_title{\n  text-align: center;\n}\n\n\n\n\n.menu_foods {\n  margin: 0 auto;\n  width: 500px;\n  padding: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  border-top-right-radius: 15px;\n  border-top-left-radius: 15px;\n}\n\n\n.menu_drinks {\n  margin: 0 auto;\n  width: 500px;\n  padding: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n\n.drinks_title{\n  text-align: center;\n}\n\n.foods_title{\n  text-align: center;\n}\n\ntable{\n  text-align: center;\n  margin: 0 auto;\n}\n\n\n.content_review{\n  padding: 50px;\n}\n\n\n.review_content_list{\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 10px;\n  padding: 30px;\n  background-color: #EEEEEE;\n  margin-top: 10px;\n}\n\n\n.button-content{\n  background-color: #AC4425;\n  /* position: absolute;\n  bottom: 500px; */\n  position: absolute;\n  transform: translate(200%, 500%);\n  bottom: 2000px;\n  padding: 50px;\n}\n\n\na[href*=\"#/detail\"]{\n  min-width: 44px;\n  min-height: 44px;\n  display: block;\n}\n\n.like_button{\n  /* color:#AC4425; */\n  padding: 10px;\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n#likeButtonContainer{\n  position: fixed;\n  right: 100px;\n  max-width: 200px;\n  top: 30%;\n}\n\n.constnetAllmenu{\n  display: flex;\n}\n\n.button-content{\n  background-color: #333;\n}\n\n\n.review_content_list .tag_name {\n  margin-bottom: 5px;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.review_content_list .review {\n  padding: 5px;\n  border-radius: 10px;\n}\n\n\n"],sourceRoot:""}]);const a=o},948:(n,A,r)=>{r.d(A,{Z:()=>a});var t=r(537),e=r.n(t),i=r(645),o=r.n(i)()(e());o.push([n.id,"\r\n\r\n \r\n  @media screen and (min-width: 600px) {\r\n    .list_item_resto {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-column-gap: 10px;\r\n      grid-row-gap: 16px;\r\n    }\r\n\r\n    .menu_button_style{\r\n      display: none;\r\n    }\r\n\r\n    header{\r\n      width: 100%;\r\n    }\r\n\r\n    .hero__inline{\r\n      border-radius: 0px;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      position: fixed;\r\n      right: 100px;\r\n      max-width: 200px;\r\n      top: 80%;\r\n    }\r\n    .hero{\r\n      width: 100%;\r\n    }\r\n\r\n    .head_title {\r\n      text-align:center;\r\n      position: absolute;\r\n      left: 0;\r\n      right: 0;\r\n      color: white;\r\n      margin: 0 auto;\r\n      bottom: 20%;\r\n    }\r\n    \r\n  }\r\n \r\n  @media screen and (min-width: 768px) {\r\n    .list_item_resto{\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n      row-gap: 30px;\r\n      column-gap: 15px;\r\n    }\r\n\r\n  .menu_button_style{\r\n      display: none;\r\n    }\r\n\r\n    .head_title {\r\n      text-align:center;\r\n      position: absolute;\r\n      left: 0;\r\n      right: 0;\r\n      color: white;\r\n      margin: 0 auto;\r\n      bottom: 20%;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      position: fixed;\r\n      right: 100px;\r\n      max-width: 200px;\r\n      top: 80%;\r\n    }\r\n    \r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n    .list_item_resto{\r\n      display: grid;\r\n      row-gap: 15px;\r\n    }\r\n\r\n    nav{\r\n      z-index: 200;\r\n      background-color: white;\r\n      width: 100%;\r\n      position: absolute;\r\n\r\n      -webkit-transform: translate(0, -500px);\r\n      transform: translate(0, -500px);\r\n\r\n      transition: transform 0.3s ease;\r\n    }\r\n\r\n    .navbar-content ul{\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n\r\n\r\n    .open{\r\n      -webkit-transform: translate(0, 0);\r\n      transform: translate(0, 0);\r\n    }\r\n\r\n\r\n\r\n    .menu_button_style{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-decoration: none;\r\n      width: 100%;\r\n      font-size: 30px;\r\n    }\r\n\r\n    .hero__inline{\r\n      border-radius: 0px;\r\n    }\r\n\r\n    detail-content{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n\r\n    home-content{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n    favorite-content{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n    .menu_foods{\r\n      width: 100%;\r\n    }\r\n\r\n    .menu_drinks{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n\r\n    .title-explor{\r\n      text-align: center;\r\n      font-size: 0.1rem;\r\n    }\r\n\r\n    .hero{\r\n      margin-top: 20px;\r\n      margin-bottom: 50px;\r\n    }\r\n\r\n    .detail-view{\r\n      width: 100%;\r\n    }\r\n\r\n    .restaurant_detail{\r\n      width: 100%;\r\n    }\r\n\r\n    .content_review{\r\n      width: 100%;\r\n    }\r\n\r\n    .like_button{\r\n      width: 100%;\r\n      background-color: transparent;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      width: 100%;\r\n    }\r\n\r\n    .content_review{\r\n      padding: 5px;\r\n    }\r\n    \r\n    \r\n    .review_content_list{\r\n      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n      border-radius: 10px;\r\n      padding: 5px;\r\n      background-color: #EEEEEE;\r\n      margin-top: 5px;\r\n      font-size: small;\r\n    }\r\n\r\n    .review_content_list .tag_name {\r\n      padding: 5px;\r\n    }\r\n\r\n    .review_content_list .review {\r\n      padding: 5px;\r\n    }\r\n\r\n    main{\r\n      height: 9000px;\r\n    }\r\n\r\n    footer{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      border: 5px solid red;\r\n      background-color: cadetblue;\r\n      position: absolute;\r\n      bottom: 0;\r\n      width: 100%;\r\n      height: 300px;\r\n    }\r\n\r\n    .hero_title, .hero__tagline {\r\n      border: 4px solid white;\r\n      padding: 5px 5px;\r\n      position: relative;\r\n      font-family: 'Times New Roman', Times, serif;\r\n    }\r\n\r\n    .head_title {\r\n      text-align:center;\r\n      position: absolute;\r\n      font-size: 10px;\r\n      color: white;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 21%;\r\n    }\r\n    \r\n\r\n    .like_button{\r\n      padding: 5px;\r\n      width: 100%;\r\n      border-radius: 10px;\r\n      cursor: pointer;\r\n      background-color: transparent;\r\n      width: 100%;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      position: static;\r\n      width: 100%;\r\n      margin: 0 auto;\r\n    }\r\n\r\n      button{\r\n        background-color: transparent;\r\n        opacity: 1;\r\n        width: 100%;\r\n      }\r\n  }","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:";;;EAGE;IACE;MACE,aAAa;MACb,8BAA8B;MAC9B,qBAAqB;MACrB,kBAAkB;IACpB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,WAAW;IACb;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,eAAe;MACf,YAAY;MACZ,gBAAgB;MAChB,QAAQ;IACV;IACA;MACE,WAAW;IACb;;IAEA;MACE,iBAAiB;MACjB,kBAAkB;MAClB,OAAO;MACP,QAAQ;MACR,YAAY;MACZ,cAAc;MACd,WAAW;IACb;;EAEF;;EAEA;IACE;MACE,aAAa;MACb,kCAAkC;MAClC,aAAa;MACb,gBAAgB;IAClB;;EAEF;MACI,aAAa;IACf;;IAEA;MACE,iBAAiB;MACjB,kBAAkB;MAClB,OAAO;MACP,QAAQ;MACR,YAAY;MACZ,cAAc;MACd,WAAW;IACb;;IAEA;MACE,eAAe;MACf,YAAY;MACZ,gBAAgB;MAChB,QAAQ;IACV;;EAEF;;EAEA;IACE;MACE,aAAa;MACb,aAAa;IACf;;IAEA;MACE,YAAY;MACZ,uBAAuB;MACvB,WAAW;MACX,kBAAkB;;MAElB,uCAAuC;MACvC,+BAA+B;;MAE/B,+BAA+B;IACjC;;IAEA;MACE,aAAa;MACb,sBAAsB;IACxB;;;IAGA;MACE,kCAAkC;MAClC,0BAA0B;IAC5B;;;;IAIA;MACE,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,qBAAqB;MACrB,WAAW;MACX,eAAe;IACjB;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,WAAW;MACX,gBAAgB;IAClB;;IAEA;MACE,WAAW;MACX,gBAAgB;IAClB;IACA;MACE,WAAW;MACX,gBAAgB;IAClB;IACA;MACE,WAAW;IACb;;IAEA;MACE,WAAW;MACX,gBAAgB;IAClB;;IAEA;MACE,kBAAkB;MAClB,iBAAiB;IACnB;;IAEA;MACE,gBAAgB;MAChB,mBAAmB;IACrB;;IAEA;MACE,WAAW;IACb;;IAEA;MACE,WAAW;IACb;;IAEA;MACE,WAAW;IACb;;IAEA;MACE,WAAW;MACX,6BAA6B;IAC/B;;IAEA;MACE,WAAW;IACb;;IAEA;MACE,YAAY;IACd;;;IAGA;MACE,qDAAqD;MACrD,mBAAmB;MACnB,YAAY;MACZ,yBAAyB;MACzB,eAAe;MACf,gBAAgB;IAClB;;IAEA;MACE,YAAY;IACd;;IAEA;MACE,YAAY;IACd;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,qBAAqB;MACrB,2BAA2B;MAC3B,kBAAkB;MAClB,SAAS;MACT,WAAW;MACX,aAAa;IACf;;IAEA;MACE,uBAAuB;MACvB,gBAAgB;MAChB,kBAAkB;MAClB,4CAA4C;IAC9C;;IAEA;MACE,iBAAiB;MACjB,kBAAkB;MAClB,eAAe;MACf,YAAY;MACZ,OAAO;MACP,QAAQ;MACR,WAAW;IACb;;;IAGA;MACE,YAAY;MACZ,WAAW;MACX,mBAAmB;MACnB,eAAe;MACf,6BAA6B;MAC7B,WAAW;IACb;;IAEA;MACE,gBAAgB;MAChB,WAAW;MACX,cAAc;IAChB;;MAEE;QACE,6BAA6B;QAC7B,UAAU;QACV,WAAW;MACb;EACJ",sourcesContent:["\r\n\r\n \r\n  @media screen and (min-width: 600px) {\r\n    .list_item_resto {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-column-gap: 10px;\r\n      grid-row-gap: 16px;\r\n    }\r\n\r\n    .menu_button_style{\r\n      display: none;\r\n    }\r\n\r\n    header{\r\n      width: 100%;\r\n    }\r\n\r\n    .hero__inline{\r\n      border-radius: 0px;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      position: fixed;\r\n      right: 100px;\r\n      max-width: 200px;\r\n      top: 80%;\r\n    }\r\n    .hero{\r\n      width: 100%;\r\n    }\r\n\r\n    .head_title {\r\n      text-align:center;\r\n      position: absolute;\r\n      left: 0;\r\n      right: 0;\r\n      color: white;\r\n      margin: 0 auto;\r\n      bottom: 20%;\r\n    }\r\n    \r\n  }\r\n \r\n  @media screen and (min-width: 768px) {\r\n    .list_item_resto{\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n      row-gap: 30px;\r\n      column-gap: 15px;\r\n    }\r\n\r\n  .menu_button_style{\r\n      display: none;\r\n    }\r\n\r\n    .head_title {\r\n      text-align:center;\r\n      position: absolute;\r\n      left: 0;\r\n      right: 0;\r\n      color: white;\r\n      margin: 0 auto;\r\n      bottom: 20%;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      position: fixed;\r\n      right: 100px;\r\n      max-width: 200px;\r\n      top: 80%;\r\n    }\r\n    \r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n    .list_item_resto{\r\n      display: grid;\r\n      row-gap: 15px;\r\n    }\r\n\r\n    nav{\r\n      z-index: 200;\r\n      background-color: white;\r\n      width: 100%;\r\n      position: absolute;\r\n\r\n      -webkit-transform: translate(0, -500px);\r\n      transform: translate(0, -500px);\r\n\r\n      transition: transform 0.3s ease;\r\n    }\r\n\r\n    .navbar-content ul{\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n\r\n\r\n    .open{\r\n      -webkit-transform: translate(0, 0);\r\n      transform: translate(0, 0);\r\n    }\r\n\r\n\r\n\r\n    .menu_button_style{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-decoration: none;\r\n      width: 100%;\r\n      font-size: 30px;\r\n    }\r\n\r\n    .hero__inline{\r\n      border-radius: 0px;\r\n    }\r\n\r\n    detail-content{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n\r\n    home-content{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n    favorite-content{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n    .menu_foods{\r\n      width: 100%;\r\n    }\r\n\r\n    .menu_drinks{\r\n      width: 100%;\r\n      font-size: small;\r\n    }\r\n\r\n    .title-explor{\r\n      text-align: center;\r\n      font-size: 0.1rem;\r\n    }\r\n\r\n    .hero{\r\n      margin-top: 20px;\r\n      margin-bottom: 50px;\r\n    }\r\n\r\n    .detail-view{\r\n      width: 100%;\r\n    }\r\n\r\n    .restaurant_detail{\r\n      width: 100%;\r\n    }\r\n\r\n    .content_review{\r\n      width: 100%;\r\n    }\r\n\r\n    .like_button{\r\n      width: 100%;\r\n      background-color: transparent;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      width: 100%;\r\n    }\r\n\r\n    .content_review{\r\n      padding: 5px;\r\n    }\r\n    \r\n    \r\n    .review_content_list{\r\n      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n      border-radius: 10px;\r\n      padding: 5px;\r\n      background-color: #EEEEEE;\r\n      margin-top: 5px;\r\n      font-size: small;\r\n    }\r\n\r\n    .review_content_list .tag_name {\r\n      padding: 5px;\r\n    }\r\n\r\n    .review_content_list .review {\r\n      padding: 5px;\r\n    }\r\n\r\n    main{\r\n      height: 9000px;\r\n    }\r\n\r\n    footer{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      border: 5px solid red;\r\n      background-color: cadetblue;\r\n      position: absolute;\r\n      bottom: 0;\r\n      width: 100%;\r\n      height: 300px;\r\n    }\r\n\r\n    .hero_title, .hero__tagline {\r\n      border: 4px solid white;\r\n      padding: 5px 5px;\r\n      position: relative;\r\n      font-family: 'Times New Roman', Times, serif;\r\n    }\r\n\r\n    .head_title {\r\n      text-align:center;\r\n      position: absolute;\r\n      font-size: 10px;\r\n      color: white;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 21%;\r\n    }\r\n    \r\n\r\n    .like_button{\r\n      padding: 5px;\r\n      width: 100%;\r\n      border-radius: 10px;\r\n      cursor: pointer;\r\n      background-color: transparent;\r\n      width: 100%;\r\n    }\r\n\r\n    #likeButtonContainer{\r\n      position: static;\r\n      width: 100%;\r\n      margin: 0 auto;\r\n    }\r\n\r\n      button{\r\n        background-color: transparent;\r\n        opacity: 1;\r\n        width: 100%;\r\n      }\r\n  }"],sourceRoot:""}]);const a=o},46:(n,A,r)=>{var t=r(379),e=r.n(t),i=r(795),o=r.n(i),a=r(569),l=r.n(a),d=r(565),B=r.n(d),p=r(216),E=r.n(p),C=r(589),s=r.n(C),x=r(756),g={};g.styleTagTransform=s(),g.setAttributes=B(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=E(),e()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals},362:(n,A,r)=>{var t=r(379),e=r.n(t),i=r(795),o=r.n(i),a=r(569),l=r.n(a),d=r(565),B=r.n(d),p=r(216),E=r.n(p),C=r(589),s=r.n(C),x=r(948),g={};g.styleTagTransform=s(),g.setAttributes=B(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=E(),e()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals}},n=>{n.O(0,[946,2,69,894,896,459,486],(()=>(253,n(n.s=253)))),n.O()}]);
//# sourceMappingURL=index~d1658f4b.bundle.js.map