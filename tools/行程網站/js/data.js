const itinerary = [
  {
    day: 1,
    date: "2026-07-22",
    dayOfWeek: "週三",
    title: "羅馬",
    subtitle: "初見永恆之城",
    region: "羅馬",
    emoji: "🏙️",
    summary: [
      "抵達羅馬，適應時差",
      "感受永恆之城的氛圍",
      "散步與美食的悠閒第一天"
    ],
    highlights: [
      "西班牙階梯早晨拍照（人潮最少）",
      "特雷維許願池擲硬幣許願",
      "第一杯道地 Gelato 冰淇淋"
    ],
    schedule: [
      { time: "06:25 - 07:45", activity: "抵達 Fiumicino 機場 ➔ 入境領行李", note: "預留 1.5 小時通關" },
      { time: "08:00 - 09:00", activity: "機場快線 ➔ Termini ➔ 住宿點寄放行李", note: "Leonardo Express 直達" },
      { time: "09:00 - 10:00", activity: "義式早餐體驗 @ Bar del Gambero", note: "站著喝 Cappuccino 配可頌" },
      { time: "10:00 - 12:00", activity: "晨間散步：西班牙階梯 & 許願池", note: "趁沒人時盡情拍照！" },
      { time: "12:00 - 13:30", activity: "午餐時光", note: "附近隨意享用輕食或 Pizza" },
      { time: "14:00 - 17:00", activity: "Check-in & 補眠", note: "強烈建議睡個午覺調整時差" },
      { time: "17:00 - 17:30", activity: "天使與殉教者聖母教堂", note: "參拜貝尼尼天使" },
      { time: "17:30 - 18:00", activity: "Gelato 時光 @ La Strega Nocciola", note: "晚餐前的幸福甜點" },
      { time: "18:00 - 19:30", activity: "晚餐 @ Pastificio Guerra", note: "簡單吃，享受羅馬夜晚氛圍" },
      { time: "20:00 - 20:30", activity: "超市採買 & 回飯店", note: "買水、水果、早餐" },
      { time: "21:00 ~", activity: "休息", note: "第一天別太晚睡" }
    ],
    transport: [
      { mode: "✈️ 飛機", detail: "桃園機場 ➔ 羅馬 Fiumicino 機場 (T3)" },
      { mode: "🚆 機場快線", detail: "Leonardo Express：Fiumicino ➔ Termini，€14，32 分鐘直達" },
      { mode: "🚇 地鐵", detail: "Termini 搭乘 Metro A 線 (紅線)往 Battistini，Spagna 站下車" },
      { mode: "🚶 步行", detail: "全程步行，各點之間 5-10 分鐘路程" }
    ],
    attractions: [
      {
        name: "西班牙階梯 (Spanish Steps)",
        description: "羅馬最經典的電影場景之一。早晨 10 點前人潮最少，是最佳拍照時機。走上階梯中段回頭往下拍，可以拍到名牌大街的繁華視角。注意階梯上禁止飲食與坐下。",
        tip: "旁邊有羅馬第一家麥當勞，裝潢華麗，Tiramisu 意外地好吃！",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      },
      {
        name: "特雷維許願池 (Trevi Fountain)",
        description: "羅馬最大、最華麗的巴洛克噴泉。建議走到噴泉右側角落，通常人比較少。若人太多，明天早上 8 點前再來完全沒人！",
        tip: "背對噴泉用右手向左肩後方拋硬幣，保證會再回到羅馬！",
        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800"
      },
      {
        name: "天使與殉教者聖母教堂",
        description: "收藏貝尼尼親手雕刻的天使像，免費入場的藝術寶庫。氣氛神聖寧靜，是避開人潮的好去處。",
        tip: "這兩座天使像原本要放在聖天使橋上，因太美被收藏在此。",
        image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800"
      }
    ],
    food: [
      { name: "Bar del Gambero", type: "早餐", recommend: "Cappuccino + Cornetto", price: "€3-5", address: "Via del Gambero, 30" },
      { name: "La Strega Nocciola", type: "Gelato", recommend: "榛果 (Nocciola) 與開心果口味", price: "€3-5", address: "Via della Vite, 100" },
      { name: "Pastificio Guerra", type: "晚餐", recommend: "每日兩種現煮生麵", price: "約 €5", address: "Via della Croce, 8" },
      { name: "Pinsitaly Trevi", type: "備用晚餐", recommend: "Pinsa 羅馬式橢圓披薩", price: "€8-12", address: "Via della Panetteria, 12" }
    ],
    hotel: {
      name: "西班牙階梯附近住宿",
      address: "Spagna 地鐵站周邊",
      note: "強烈建議住西班牙階梯步行可達範圍，充分利用早晨空檔"
    },
    tips: [
      "穿厚底好走的球鞋，羅馬石板路多",
      "帶空水壺，街頭 Nasone 小噴泉可生飲",
      "後背包請背前面，注意防範扒手",
      "有人靠近要綁幸運繩請堅定說 NO",
      "盡量撐到當地晚上 9 點再睡以調整時差"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Spanish+Steps+Rome+Italy"
  },
    day: 2,
    date: "2026-07-23",
    dayOfWeek: "週四",
    title: "羅馬",
    subtitle: "神鬼戰士與古城巡禮",
    region: "羅馬",
    emoji: "⚔️",
    summary: [
      "穿越時空回到古羅馬帝國",
      "朝聖壯觀的競技場",
      "漫步萬神殿與金杯咖啡"
    ],
    highlights: [
      "羅馬競技場內部參觀",
      "萬神殿的壯麗穹頂",
      "品嚐金杯咖啡"
    ],
    schedule: [
      { time: "08:00 - 09:00", activity: "早餐 @ 住宿附近", note: "簡單吃，早點出發" },
      { time: "09:00 - 12:00", activity: "羅馬競技場 & 古羅馬廣場", note: "建議提前預約門票" },
      { time: "12:00 - 13:30", activity: "午餐 @ 附近餐廳", note: "品嚐地道義大利麵" },
      { time: "14:00 - 16:00", activity: "萬神殿參觀", note: "欣賞古羅馬建築奇蹟" },
      { time: "16:00 - 17:00", activity: "金杯咖啡 (La Casa del Caffè Tazza d'Oro)", note: "羅馬最有名的咖啡店之一" },
      { time: "17:00 - 18:30", activity: "納沃納廣場漫步", note: "欣賞四河噴泉" },
      { time: "19:00 - 20:30", activity: "晚餐", note: "品嚐羅馬經典料理" },
      { time: "21:00 ~", activity: "夜間散步回住宿", note: "體驗羅馬夜晚的浪漫" }
    ],
    transport: [
      { mode: "🚶 步行", detail: "從西班牙階梯步行至競技場約 25 分鐘，沿途可欣賞市區風光" },
      { mode: "🚇 地鐵", detail: "也可搭 Metro B 線至 Colosseo 站" },
      { mode: "🚶 步行", detail: "競技場至萬神殿約 15 分鐘" }
    ],
    attractions: [
      {
        name: "羅馬競技場 (Colosseum)",
        description: "古羅馬帝國最具代表性的建築，曾是角鬥士競技的場所。建議提前在官網預約門票，避免排隊等候。內部可參觀地下層結構與競技場平台。",
        tip: "建議購買聯票（競技場 + 古羅馬廣場 + 帕拉提諾山）",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      },
      {
        name: "萬神殿 (Pantheon)",
        description: "保存最完整的古羅馬建築，其混凝土穹頂至今仍是世界最大的無鋼筋穹頂。內部光線從頂部圓洞灑落，極具神聖感。",
        tip: "免費入場，建議下午前往光線最美",
        image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800"
      }
    ],
    food: [
      { name: "La Casa del Caffè Tazza d'Oro", type: "咖啡", recommend: "Granita al Caffè (咖啡冰沙)", price: "€3-5", address: "Via degli Orfani, 84" },
      { name: "Da Enrico al 29", type: "午餐", recommend: "Carbonara 義大利麵", price: "€12-18", address: "Via della Maddalena, 29" }
    ],
    hotel: { name: "西班牙階梯附近住宿", address: "Spagna 地鐵站周邊", note: "同第一天住宿" },
    tips: [
      "競技場門票務必提前預約",
      "注意防曬，七月羅馬非常炎熱",
      "隨身帶水壺補充水分"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Colosseum+Rome+Italy"
  },
    day: 3,
    date: "2026-07-24",
    dayOfWeek: "週五",
    title: "羅馬",
    subtitle: "梵蒂岡神聖之旅與購物",
    region: "羅馬",
    emoji: "🇻🇦",
    summary: [
      "上午前往梵蒂岡聖彼得大教堂",
      "下午參觀梵蒂岡博物館",
      "傍晚享受羅馬購物街道"
    ],
    highlights: [
      "聖彼得大教堂登頂俯瞰梵蒂岡",
      "梵蒂岡博物館的西斯汀禮拜堂",
      "西班牙廣場購物區漫遊"
    ],
    schedule: [
      { time: "07:30 - 08:00", activity: "早餐", note: "早點出發避開人潮" },
      { time: "08:00 - 10:30", activity: "聖彼得大教堂", note: "登頂看梵蒂岡全景" },
      { time: "10:30 - 11:00", activity: "聖彼得廣場", note: "感受梵蒂岡的莊嚴" },
      { time: "11:00 - 12:30", activity: "午餐 @ 梵蒂岡附近", note: "品嚐在地美食" },
      { time: "14:00 - 16:30", activity: "梵蒂岡博物館", note: "欣賞西斯汀禮拜堂創世紀" },
      { time: "17:00 - 19:00", activity: "西班牙廣場購物區", note: "漫步名牌大街" },
      { time: "19:30 - 21:00", activity: "晚餐", note: "羅馬最後一頓豐盛晚餐" }
    ],
    transport: [
      { mode: "🚇 地鐵", detail: "Spagna 站搭 Metro A 線至 Ottaviano 站（梵蒂岡）" },
      { mode: "🚶 步行", detail: "聖彼得大教堂至博物館步行約 10 分鐘" },
      { mode: "🚇 地鐵", detail: "回程搭 Metro A 線回 Spagna 站" }
    ],
    attractions: [
      {
        name: "聖彼得大教堂 (St. Peter's Basilica)",
        description: "世界上最大的教堂，天主教會的中心。可登頂欣賞米開朗基羅設計的穹頂，俯瞰整個梵蒂岡與羅馬市景。",
        tip: "早上 8 點前到可避開排隊人潮",
        image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800"
      },
      {
        name: "梵蒂岡博物館 (Vatican Museums)",
        description: "收藏了大量教宗歷代累積的藝術珍品，最著名的是西斯汀禮拜堂中米開朗基羅的《創世紀》穹頂畫。",
        tip: "門票需提前預約，建議下午時段較少人",
        image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800"
      }
    ],
    food: [
      { name: "Bonci Pizzarium", type: "午餐", recommend: "Pizza al taglio (秤重披薩)", price: "€5-10", address: "Via della Meloria, 43" },
      { name: "Old Bridge Gelateria", type: "Gelato", recommend: "各種口味 Gelato", price: "€3-5", address: "Viale dei Bastioni di Michelangelo, 5" }
    ],
    hotel: { name: "西班牙階梯附近住宿", address: "Spagna 地鐵站周邊", note: "最後一晚住羅馬" },
    tips: [
      "進聖彼得大教堂需安檢，不可穿短褲背心",
      "梵蒂岡博物館很大，建議規劃好參觀路線",
      "週邊紀念品較貴，可到市區再買"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=St+Peter+Basilica+Vatican"
  },
    day: 4,
    date: "2026-07-25",
    dayOfWeek: "週六",
    title: "佛羅倫斯",
    subtitle: "前往文藝復興發源地",
    region: "佛羅倫斯",
    emoji: "🎨",
    summary: [
      "搭乘高速火車北上佛羅倫斯",
      "抵達鮮花之城",
      "初探百花大教堂"
    ],
    highlights: [
      "義大利高鐵 Italo 初體驗",
      "百花大教堂外觀震撼",
      "喬托鐘樓仰望",
      "佛羅倫斯夜景漫步"
    ],
    schedule: [
      { time: "08:00 - 09:00", activity: "早餐 & Check-out", note: "整理行李準備出發" },
      { time: "09:00 - 09:30", activity: "步行至 Termini 車站", note: "" },
      { time: "09:30 - 11:00", activity: "高速火車：羅馬 ➔ 佛羅倫斯", note: "Italo / Frecciarossa" },
      { time: "11:00 - 11:30", activity: "抵達 Firenze S.M.N. 車站", note: "步行至住宿點寄放行李" },
      { time: "11:30 - 13:00", activity: "午餐 @ 中央市場", note: "品嚐佛羅倫斯牛肚包" },
      { time: "13:00 - 15:00", activity: "百花大教堂外觀 & 喬托鐘樓", note: "洗禮堂金門必看" },
      { time: "15:00 - 17:00", activity: "Check-in & 休息", note: "稍作休息避暑" },
      { time: "17:00 - 19:00", activity: "老橋漫步 & 亞諾河畔", note: "欣賞日落美景" },
      { time: "19:30 - 21:00", activity: "晚餐 @ 在地 trattoria", note: "品嚐佛羅倫斯牛排" },
      { time: "21:00 ~", activity: "米開朗基羅廣場夜景", note: "俯瞰佛羅倫斯全景" }
    ],
    transport: [
      { mode: "🚆 高速火車", detail: "Italo / Frecciarossa：Roma Termini ➔ Firenze S.M.N.，約 1.5 小時" },
      { mode: "🚶 步行", detail: "佛羅倫斯市區景點皆可步行抵達" }
    ],
    attractions: [
      {
        name: "聖母百花大教堂 (Duomo)",
        description: "佛羅倫斯的地標，擁有世界最大的磚造穹頂。外牆由白、綠、粉紅三色大理石拼成，極致華麗。",
        tip: "外觀免費參觀，登頂需購票",
        image: "https://images.unsplash.com/photo-1543429257-3eb0b65d6c48?w=800"
      },
      {
        name: "老橋 (Ponte Vecchio)",
        description: "佛羅倫斯最古老的橋樑，橋上聚集了珠寶店與藝廊。夕陽時分景色絕美。",
        tip: "傍晚來最浪漫，可在橋上欣賞亞諾河日落",
        image: "https://images.unsplash.com/photo-1543429257-3eb0b65d6c48?w=800"
      }
    ],
    food: [
      { name: "Nerbone", type: "午餐", recommend: "牛肚包 (Panino con Lampredotto)", price: "€5-8", address: "Mercato Centrale, 佛羅倫斯" },
      { name: "Trattoria ZaZa", type: "晚餐", recommend: "佛羅倫斯牛排 (Bistecca alla Fiorentina)", price: "€25-35", address: "Piazza del Mercato Centrale, 26r" }
    ],
    hotel: {
      name: "佛羅倫斯 SMN 車站附近住宿",
      address: "Firenze S.M.N. 車站步行 10 分鐘",
      note: "方便抵達與行李移動"
    },
    tips: [
      "義大利高鐵建議提前上網購票，票價更優惠",
      "佛羅倫斯石板路較多，行李箱輪子要夠耐用",
      "牛肚包是佛羅倫斯必吃街頭美食"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Duomo+Florence+Italy"
  },
    day: 5,
    date: "2026-07-26",
    dayOfWeek: "週日",
    title: "佛羅倫斯",
    subtitle: "烏菲茲藝術殿堂與圓頂攀登",
    region: "佛羅倫斯",
    emoji: "🖼️",
    summary: [
      "沉浸波提切利與文藝復興名作",
      "挑戰百花大教堂圓頂攀登",
      "漫步老橋欣賞夕陽"
    ],
    highlights: [
      "烏菲茲美術館《維納斯的誕生》",
      "百花大教堂圓頂攀登 463 階",
      "老橋夕陽美景"
    ],
    schedule: [
      { time: "08:00 - 09:00", activity: "早餐", note: "吃得飽飽的準備爬圓頂" },
      { time: "09:00 - 12:00", activity: "烏菲茲美術館", note: "建議提前預約門票" },
      { time: "12:00 - 13:30", activity: "午餐", note: "美術館附近餐廳" },
      { time: "13:30 - 15:00", activity: "百花大教堂圓頂攀登", note: "463 階，俯瞰佛羅倫斯" },
      { time: "15:00 - 17:00", activity: "學院美術館（大衛像）", note: "可選，或自由逛街" },
      { time: "17:00 - 18:30", activity: "老橋夕陽", note: "漫步亞諾河畔" },
      { time: "19:00 - 20:30", activity: "晚餐", note: "佛羅倫斯經典料理" }
    ],
    transport: [
      { mode: "🚶 步行", detail: "全部景點步行可達" }
    ],
    attractions: [
      {
        name: "烏菲茲美術館 (Uffizi Gallery)",
        description: "世界最重要的美術館之一，收藏大量文藝復興時期大師作品，包括波提切利的《維納斯的誕生》與《春》。",
        tip: "務必提前預約門票，建議早上時段",
        image: "https://images.unsplash.com/photo-1543429257-3eb0b65d6c48?w=800"
      },
      {
        name: "百花大教堂圓頂 (Brunelleschi's Dome)",
        description: "布魯內萊斯基設計的傳奇圓頂，攀登 463 階樓梯可到達頂端，俯瞰佛羅倫斯全景。",
        tip: "階梯狹窄且陡峭，有懼高症者請考慮",
        image: "https://images.unsplash.com/photo-1543429257-3eb0b65d6c48?w=800"
      }
    ],
    food: [
      { name: "All'Antico Vinaio", type: "午餐", recommend: "Schiacciata 義大利三明治", price: "€8-12", address: "Via dei Neri, 74r" },
      { name: "Gelateria dei Neri", type: "Gelato", recommend: "各式手工冰淇淋", price: "€3-5", address: "Via dei Neri, 20r" }
    ],
    hotel: { name: "佛羅倫斯住宿", address: "SMN 車站附近", note: "續住前晚飯店" },
    tips: [
      "烏菲茲美術館門票需提前 1-2 週預約",
      "爬圓頂建議穿輕便衣物與好走的鞋",
      "佛羅倫斯皮件市集可逛逛"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Uffizi+Gallery+Florence+Italy"
  },
  {
    day: 6,
    date: "2026-07-27",
    dayOfWeek: "週一",
    title: "比薩",
    subtitle: "斜塔奇蹟與夕陽廣場",
    region: "托斯卡納",
    emoji: "🏰",
    summary: [
      "上午衝一波比薩看斜塔",
      "中央市場尋覓美食",
      "傍晚米開朗基羅廣場夕陽"
    ],
    highlights: [
      "比薩斜塔經典合影",
      "奇蹟廣場三大建築",
      "米開朗基羅廣場俯瞰佛羅倫斯"
    ],
    schedule: [
      { time: "07:00 - 08:00", activity: "早餐", note: "早點出發" },
      { time: "08:00 - 09:00", activity: "火車：佛羅倫斯 ➔ 比薩", note: "約 1 小時" },
      { time: "09:00 - 12:00", activity: "比薩斜塔 & 奇蹟廣場", note: "拍照、參觀" },
      { time: "12:00 - 13:00", activity: "午餐 @ 比薩", note: "當地美食" },
      { time: "13:00 - 14:00", activity: "火車：比薩 ➔ 佛羅倫斯", note: "" },
      { time: "14:00 - 16:00", activity: "中央市場美食探索", note: "二樓美食廣場" },
      { time: "17:00 - 19:00", activity: "米開朗基羅廣場夕陽", note: "俯瞰佛羅倫斯全景" },
      { time: "19:30 - 21:00", activity: "晚餐", note: "" }
    ],
    transport: [
      { mode: "🚆 區域火車", detail: "Firenze S.M.N. ➔ Pisa Centrale，約 1 小時" },
      { mode: "🚶 步行", detail: "比薩車站步行至斜塔約 20 分鐘" },
      { mode: "🚶 步行", detail: "佛羅倫斯市區步行" }
    ],
    attractions: [
      {
        name: "比薩斜塔 (Leaning Tower of Pisa)",
        description: "世界聞名的建築奇蹟，因地基不均勻而傾斜。位於奇蹟廣場，可登塔參觀。",
        tip: "建議早上去，人潮較少。經典拍照姿勢是「推塔」！",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      },
      {
        name: "米開朗基羅廣場 (Piazzale Michelangelo)",
        description: "俯瞰佛羅倫斯全景的最佳地點，夕陽時分景色無敵。可以清楚看到百花大教堂穹頂與老橋。",
        tip: "傍晚前往，帶瓶酒坐在階梯上等日落",
        image: "https://images.unsplash.com/photo-1543429257-3eb0b65d6c48?w=800"
      }
    ],
    food: [
      { name: "Mercato Centrale 二樓", type: "美食廣場", recommend: "各種托斯卡納美食", price: "€8-15", address: "Piazza del Mercato Centrale" },
      { name: "La Prosciutteria", type: "晚餐", recommend: "托斯卡納火腿拼盤", price: "€10-18", address: "Via dei Neri, 54r" }
    ],
    hotel: { name: "佛羅倫斯住宿", address: "SMN 車站附近", note: "續住" },
    tips: [
      "比薩斜塔登塔需預約，且限制人數",
      "佛羅倫斯到比薩的區域火車班次頻繁",
      "米開朗基羅廣場建議步行或搭 12 路公車"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Leaning+Tower+of+Pisa+Italy"
  },
  {
    day: 7,
    date: "2026-07-28",
    dayOfWeek: "週二",
    title: "威尼斯",
    subtitle: "水都的浪漫相遇",
    region: "威尼斯",
    emoji: "🎭",
    summary: [
      "告別托斯卡納前往威尼斯",
      "聖馬可廣場初見水都",
      "嘆息橋夜景漫步"
    ],
    highlights: [
      "威尼斯本島第一印象",
      "聖馬可廣場與大教堂",
      "嘆息橋夜景"
    ],
    schedule: [
      { time: "07:00 - 08:00", activity: "早餐 & Check-out", note: "" },
      { time: "08:00 - 10:00", activity: "高速火車：佛羅倫斯 ➔ 威尼斯", note: "約 2 小時" },
      { time: "10:00 - 10:30", activity: "抵達 Venezia S. Lucia", note: "出站即是大運河" },
      { time: "10:30 - 11:00", activity: "水上巴士 ➔ 住宿點", note: "寄放行李" },
      { time: "11:00 - 12:30", activity: "聖馬可廣場 & 大教堂", note: "感受水都風情" },
      { time: "12:30 - 14:00", activity: "午餐", note: "威尼斯海鮮料理" },
      { time: "14:00 - 17:00", activity: "Check-in & 休息", note: "" },
      { time: "17:00 - 19:00", activity: "嘆息橋 & 運河漫步", note: "傍晚光線最美" },
      { time: "19:30 - 21:00", activity: "晚餐 @ 運河邊餐廳", note: "浪漫水都晚餐" }
    ],
    transport: [
      { mode: "🚆 高速火車", detail: "Firenze S.M.N. ➔ Venezia S. Lucia，約 2 小時" },
      { mode: "🚢 水上巴士 (Vaporetto)", detail: "威尼斯主要的公共交通工具" },
      { mode: "🚶 步行", detail: "威尼斯本島各景點步行可達" }
    ],
    attractions: [
      {
        name: "聖馬可廣場 (Piazza San Marco)",
        description: "拿破崙譽為「歐洲最美客廳」。廣場上有聖馬可大教堂、鐘樓與總督府。",
        tip: "早上與傍晚人潮較少，鴿子非常多",
        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800"
      },
      {
        name: "嘆息橋 (Bridge of Sighs)",
        description: "連接總督府與監獄的封閉橋樑。傳說囚犯通過時望著窗外最後一眼威尼斯而嘆息。",
        tip: "傍晚夕陽時分拍照最佳",
        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800"
      }
    ],
    food: [
      { name: "Trattoria Al Gazzettino", type: "晚餐", recommend: "墨魚麵 (Spaghetti al Nero di Seppia)", price: "€15-25", address: "San Marco, 376" },
      { name: "Caffe Florian", type: "咖啡", recommend: "聖馬可廣場百年咖啡館", price: "€10-15", address: "Piazza San Marco, 57" }
    ],
    hotel: {
      name: "威尼斯本島住宿",
      address: "聖馬可廣場步行 10 分鐘",
      note: "建議住本島，體驗水都晨昏"
    },
    tips: [
      "威尼斯本島車子無法通行，全靠步行與船",
      "水上巴士可買 24/48/72 小時券較划算",
      "注意潮汐，聖馬可廣場可能會淹水"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=St+Mark+Square+Venice+Italy"
  },
  {
    day: 8,
    date: "2026-07-29",
    dayOfWeek: "週三",
    title: "威尼斯",
    subtitle: "彩色島童話與貢多拉",
    region: "威尼斯",
    emoji: "🌈",
    summary: [
      "前往彩色島 Burano 拍照",
      "下午搭乘貢多拉船遊",
      "里亞爾托橋逛街"
    ],
    highlights: [
      "Burano 彩色房屋拍照",
      "貢多拉船遊大運河",
      "里亞爾托橋黃昏市場"
    ],
    schedule: [
      { time: "07:30 - 08:30", activity: "早餐", note: "" },
      { time: "08:30 - 09:30", activity: "水上巴士前往彩色島", note: "約 40 分鐘" },
      { time: "09:30 - 12:00", activity: "彩色島 Burano 漫步", note: "拍照、逛小店" },
      { time: "12:00 - 13:00", activity: "午餐 @ 彩色島", note: "海鮮料理" },
      { time: "13:00 - 14:00", activity: "水上巴士回威尼斯本島", note: "" },
      { time: "14:00 - 16:00", activity: "貢多拉船遊", note: "體驗威尼斯傳統交通" },
      { time: "16:00 - 18:00", activity: "里亞爾托橋 & 市場", note: "逛街購物" },
      { time: "19:00 - 20:30", activity: "晚餐", note: "" }
    ],
    transport: [
      { mode: "🚢 水上巴士", detail: "威尼斯 ➔ Burano (彩色島)，約 40 分鐘" },
      { mode: "🚣 貢多拉", detail: "傳統手划船，建議下午或傍晚搭乘" }
    ],
    attractions: [
      {
        name: "彩色島 (Burano)",
        description: "以色彩繽紛的漁夫房屋聞名的小島。當地政府規定居民每年需重新粉刷房屋，形成獨特的彩虹景觀。",
        tip: "建議早上前往，光線最佳且遊客較少",
        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800"
      },
      {
        name: "貢多拉船遊 (Gondola Ride)",
        description: "威尼斯最具代表性的交通工具，沿著大運河與小巷水道航行，感受水都的獨特魅力。",
        tip: "建議傍晚搭乘，光線柔和且較不炎熱",
        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800"
      }
    ],
    food: [
      { name: "Trattoria da Romano", type: "午餐", recommend: "海鮮燉飯", price: "€15-25", address: "Via Galuppi, 221, Burano" },
      { name: "Osteria alle Testiere", type: "晚餐", recommend: "威尼斯式海鮮拼盤", price: "€25-35", address: "San Marco, 5801" }
    ],
    hotel: { name: "威尼斯本島住宿", address: "聖馬可廣場附近", note: "續住" },
    tips: [
      "彩色島建議早去早回，下午光線不利拍照",
      "貢多拉價格為公定價（約 €80/30 分鐘）",
      "里亞爾托市場可買到新鮮食材與紀念品"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Burano+Venice+Italy"
  },
  {
    day: 9,
    date: "2026-07-30",
    dayOfWeek: "週四",
    title: "米蘭",
    subtitle: "前進時尚之都",
    region: "米蘭",
    emoji: "☕",
    summary: [
      "搭火車前往米蘭",
      "輕鬆市區漫步保留體力",
      "星巴克烘焙工坊朝聖"
    ],
    highlights: [
      "艾曼紐二世拱廊精美建築",
      "星巴克臻選烘焙工坊",
      "米蘭購物街區初探"
    ],
    schedule: [
      { time: "07:30 - 08:30", activity: "早餐 & Check-out", note: "" },
      { time: "08:30 - 10:30", activity: "高速火車：威尼斯 ➔ 米蘭", note: "約 2 小時" },
      { time: "10:30 - 11:00", activity: "抵達 Milano Centrale", note: "步行或地鐵至住宿" },
      { time: "11:00 - 11:30", activity: "住宿點寄放行李", note: "" },
      { time: "11:30 - 13:00", activity: "艾曼紐二世拱廊", note: "欣賞華麗建築與逛街" },
      { time: "13:00 - 14:30", activity: "午餐", note: "" },
      { time: "14:30 - 16:00", action: "星巴克臻選烘焙工坊", note: "全球第三家 Reserve Roastery" },
      { time: "16:00 - 18:00", activity: "Check-in & 休息", note: "保留體力" },
      { time: "18:00 - 20:00", activity: "晚間散步 & 晚餐", note: "米蘭夜生活初體驗" }
    ],
    transport: [
      { mode: "🚆 高速火車", detail: "Venezia S. Lucia ➔ Milano Centrale，約 2 小時" },
      { mode: "🚇 地鐵", detail: "Milano Centrale 可搭 M2/M3 線至大教堂區" },
      { mode: "🚶 步行", detail: "米蘭市中心景點步行可達" }
    ],
    attractions: [
      {
        name: "艾曼紐二世拱廊 (Galleria Vittorio Emanuele II)",
        description: "義大利最古老的購物拱廊，擁有精美的玻璃穹頂與馬賽克地板。LV、Prada 等精品旗艦店進駐。",
        tip: "傳說踩著公牛的睪丸旋轉會帶來好運",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      },
      {
        name: "星巴克臻選烘焙工坊 (Starbucks Reserve Roastery)",
        description: "全球僅有六家的旗艦級星巴克，位於前郵政總局大樓，結合咖啡、烘焙與調酒的沉浸式體驗。",
        tip: "推薦試試限定版的咖啡調酒",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      }
    ],
    food: [
      { name: "Luini", type: "輕食", recommend: "Panzerotti (義大利炸餃)", price: "€4-6", address: "Via Santa Radegonda, 16" },
      { name: "Spontini", type: "Pizza", recommend: "厚片米蘭式 Pizza", price: "€6-10", address: "Via Santa Radegonda, 11" }
    ],
    hotel: {
      name: "米蘭中央車站附近住宿",
      address: "Milano Centrale 步行 10 分鐘",
      note: "方便最後一天前往機場"
    },
    tips: [
      "米蘭大教堂區週邊扒手較多，注意財物",
      "艾曼紐拱廊的地板馬賽克是拍照重點",
      "Luini 的 Panzerotti 排隊名店，建議早點去"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Galleria+Vittorio+Emanuele+II+Milan+Italy"
  },
  {
    day: 10,
    date: "2026-07-31",
    dayOfWeek: "週五",
    title: "米蘭",
    subtitle: "米蘭大教堂深度遊",
    region: "米蘭",
    emoji: "⛪",
    summary: [
      "上午直攻米蘭大教堂登頂",
      "欣賞飛扶壁建築奇蹟",
      "下午自由探索米蘭"
    ],
    highlights: [
      "米蘭大教堂屋頂平台漫步",
      "飛扶壁與尖塔近距離觀賞",
      "大教堂內部彩繪玻璃窗"
    ],
    schedule: [
      { time: "08:00 - 09:00", activity: "早餐", note: "" },
      { time: "09:00 - 10:00", activity: "步行至米蘭大教堂", note: "" },
      { time: "10:00 - 12:00", activity: "米蘭大教堂登頂", note: "步行登頂，欣賞飛扶壁" },
      { time: "12:00 - 13:00", activity: "大教堂內部參觀", note: "彩繪玻璃與地下遺蹟" },
      { time: "13:00 - 14:30", activity: "午餐", note: "" },
      { time: "14:30 - 17:00", activity: "自由活動", note: "逛街、博物館或咖啡時光" },
      { time: "17:00 - 19:00", activity: "最後的米蘭漫步", note: "採購紀念品" },
      { time: "19:30 - 21:00", activity: "告別晚餐", note: "米蘭最後一頓" }
    ],
    transport: [
      { mode: "🚇 地鐵", detail: "Duomo 站 (M1/M3 線交會)" },
      { mode: "🚶 步行", detail: "米蘭市中心步行" }
    ],
    attractions: [
      {
        name: "米蘭大教堂 (Duomo di Milano)",
        description: "世界最大的哥德式教堂之一，歷時近 600 年完工。擁有 135 座尖塔與超過 3,000 座雕像。屋頂平台可近距離欣賞飛扶壁與尖塔。",
        tip: "建議購買電梯登頂票，節省體力",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      }
    ],
    food: [
      { name: "Piz", type: "午餐", recommend: "米蘭式燉飯 (Risotto alla Milanese)", price: "€12-18", address: "Via Pasquale Sottocorno, 5" },
      { name: "Cioccolatitaliani", type: "甜點", recommend: "手工巧克力 & Gelato", price: "€4-8", address: "Via San Raffaele, 6" }
    ],
    hotel: { name: "米蘭住宿", address: "中央車站附近", note: "續住" },
    tips: [
      "大教堂登頂建議選電梯方案（步行很陡）",
      "進教堂不可穿短褲露肩，會發紙圍裙遮蓋",
      "屋頂平台風大，注意保暖"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Duomo+di+Milano+Italy"
  },
  {
    day: 11,
    date: "2026-08-01",
    dayOfWeek: "週六",
    title: "米蘭",
    subtitle: "城堡探險與最後衝刺",
    region: "米蘭",
    emoji: "🏰",
    summary: [
      "參觀斯福爾扎城堡",
      "購物大街最後採購",
      "整理行李準備回程"
    ],
    highlights: [
      "斯福爾扎城堡博物館",
      "米開朗基羅最後的雕塑",
      "Corso Buenos Aires 購物"
    ],
    schedule: [
      { time: "08:00 - 09:00", activity: "早餐", note: "悠閒的早餐" },
      { time: "09:00 - 12:00", activity: "斯福爾扎城堡參觀", note: "城堡博物館與庭園" },
      { time: "12:00 - 13:30", activity: "午餐", note: "" },
      { time: "13:30 - 17:00", activity: "Corso Buenos Aires 購物", note: "米蘭最長購物街" },
      { time: "17:00 - 19:00", activity: "整理行李", note: "" },
      { time: "19:00 - 21:00", activity: "最後晚餐", note: "告別義大利" }
    ],
    transport: [
      { mode: "🚇 地鐵", detail: "Cairoli Castello 站 (M1) 或 Lanza 站 (M2)" },
      { mode: "🚇 地鐵", detail: "Corso Buenos Aires 可搭 M1 至 Porta Venezia 站" }
    ],
    attractions: [
      {
        name: "斯福爾扎城堡 (Castello Sforzesco)",
        description: "米蘭最大的城堡，曾是統治米蘭的斯福爾扎家族宅邸。內有多個博物館，收藏米開朗基羅最後的雕塑《聖母憐子》。",
        tip: "城堡後方的森皮奧內公園很適合散步休息",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      }
    ],
    food: [
      { name: "Ratanà", type: "晚餐", recommend: "米蘭經典料理", price: "€20-30", address: "Via Gaetano de Castillia, 28" },
      { name: "Pavé", type: "早午餐", recommend: "可頌與咖啡", price: "€5-10", address: "Via Felice Casati, 27" }
    ],
    hotel: { name: "米蘭住宿", address: "中央車站附近", note: "最後一晚" },
    tips: [
      "城堡免費入場，博物館需購票",
      "記得退稅單據要整理好",
      "最後一天超市可買些義大利食材帶回台灣"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Sforza+Castle+Milan+Italy"
  },
  {
    day: 12,
    date: "2026-08-02",
    dayOfWeek: "週日",
    title: "米蘭",
    subtitle: "載著回憶回家去",
    region: "米蘭",
    emoji: "✈️",
    summary: [
      "早起出發前往機場",
      "辦理退稅手續",
      "免稅店最後巡禮"
    ],
    highlights: [
      "米蘭 Malpensa 機場退稅",
      "免稅店最後採購",
      "帶著 12 天滿滿回憶回家"
    ],
    schedule: [
      { time: "05:00 - 05:30", activity: "起床 & 最後檢查", note: "確認護照、機票" },
      { time: "05:30 - 06:00", activity: "前往 Milano Centrale", note: "" },
      { time: "06:00 - 07:00", activity: "Malpensa Express 往機場", note: "約 50 分鐘" },
      { time: "07:00 - 08:00", activity: "Check-in & 托運行李", note: "" },
      { time: "08:00 - 09:00", activity: "退稅手續", note: "保留退稅單據與商品" },
      { time: "09:00 - 10:00", activity: "免稅店最後採購", note: "" },
      { time: "10:00 ~", activity: "登機回台灣", note: "Buon Viaggio！" }
    ],
    transport: [
      { mode: "🚆 Malpensa Express", detail: "Milano Centrale ➔ Malpensa Airport，約 50 分鐘，€13" },
      { mode: "✈️ 飛機", detail: "米蘭 Malpensa ➔ 桃園機場" }
    ],
    attractions: [
      {
        name: "米蘭 Malpensa 機場",
        description: "米蘭主要國際機場。退稅櫃檯在 check-in 大廳，建議提前 3 小時抵達。退稅分為托運退稅（行李內退稅商品）與手提退稅。",
        tip: "退稅單據需在 check-in 前先給海關蓋章",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
      }
    ],
    food: [
      { name: "機場免稅區", type: "最後採購", recommend: "義大利紅酒、橄欖油、巧克力", price: "視預算", address: "MXP Airport" }
    ],
    hotel: { name: "Home", address: "台灣的家", note: "回到溫暖的家" },
    tips: [
      "退稅商品需隨身備查，建議整理在同一袋",
      "Malpensa Express 班次密集，但早班車票建議先買",
      "退稅可退信用卡或現金，現金會收手續費",
      "保留退稅單據影本以備查驗"
    ],
    mapEmbed: "https://www.google.com/maps/embed?q=Malpensa+Airport+Milan+Italy"
  }
];