// HSK3級 学習コンテンツデータ (data.js)
const practicalVocabulary = [
      { word: "前台", pinyin: "qiántái", ja: "フロント・受付" }, { word: "预订", pinyin: "yùdìng", ja: "予約する" },
      { word: "办理", pinyin: "bànlǐ", ja: "手続きを行う" }, { word: "房卡", pinyin: "fángkǎ", ja: "カードキー" },
      { word: "押金", pinyin: "yājīn", ja: "デポジット・保証金" }, { word: "退房", pinyin: "tuìfáng", ja: "チェックアウト" },
      { word: "退还", pinyin: "tuìhuán", ja: "返金する" }, { word: "填表", pinyin: "tiánbiǎo", ja: "用紙に記入する" },
      { word: "签字", pinyin: "qiānzì", ja: "サインする" }, { word: "发票", pinyin: "fāpiào", ja: "領収書" },
      { word: "收据", pinyin: "shōujù", ja: "レシート・受領書" }, { word: "免费", pinyin: "miǎnfèi", ja: "無料の" },
      { word: "打折", pinyin: "dǎzhé", ja: "割引する" }, { word: "刷卡", pinyin: "shuākǎ", ja: "カード決済する" },
      { word: "现金", pinyin: "xiànjīn", ja: "現金" }, { word: "添麻烦", pinyin: "tiān máfan", ja: "迷惑をかける" },
      { word: "顺风", pinyin: "shùnfēng", ja: "道中ご無事で" }, { word: "登机牌", pinyin: "dēngjīpái", ja: "搭乗券" },
      { word: "航班", pinyin: "hángbān", ja: "フライト・定期便" }, { word: "延误", pinyin: "yánwù", ja: "遅延する" },
      { word: "检票", pinyin: "jiǎnpiào", ja: "改札を通る" }, { word: "取票", pinyin: "qǔpiào", ja: "発券・受取する" },
      { word: "单程/往返", pinyin: "dānchéng/wǎngfǎn", ja: "片道/往復" }, { word: "行李", pinyin: "xíngli", ja: "手荷物" },
      { word: "排队", pinyin: "páiduì", ja: "列に並ぶ" }, { word: "买单/结账", pinyin: "mǎidān/jiézhàng", ja: "お会計" },
      { word: "打包", pinyin: "dǎbāo", ja: "持ち帰り" }, { word: "推荐", pinyin: "tuījiàn", ja: "おすすめする" },
      { word: "忌口", pinyin: "jìkǒu", ja: "食べられないもの" }, { word: "微辣", pinyin: "wēilà", ja: "ピリ辛" },
      { word: "餐巾纸", pinyin: "cānjīnzhǐ", ja: "紙ナプキン" }, { word: "扫码", pinyin: "sǎomǎ", ja: "QRコード読み取り" },
      { word: "微信/支付宝", pinyin: "Wēixìn/Zhīfùbǎo", ja: "WeChat/Alipay" }, { word: "充电宝", pinyin: "chōngdiànbǎo", ja: "モバイルバッテリー" },
      { word: "密码", pinyin: "mìmǎ", ja: "暗証番号・パスワード" }, { word: "挂号", pinyin: "guàhào", ja: "病院で受付する" },
      { word: "大夫", pinyin: "dàifu", ja: "お医者さん・先生" }, { word: "打针", pinyin: "dǎzhēn", ja: "注射をする" },
      { word: "拉肚子", pinyin: "lādùzi", ja: "下痢・腹を壊す" }, { word: "过敏", pinyin: "guòmǐn", ja: "アレルギーがある" }
    ];

const numbersData = [
      { num: "1001", pinyin: "yìqiān líng yī", rule: "1001（一千零一）：千と一の間の百・十の位が連続して0の場合、「零」は1度だけ発音します。", example: "一千零一 块 钱（1001元）" },
      { num: "1010", pinyin: "yìqiān líng yīshí", rule: "1010（一千零一十）：百の位が0で十の位が1の場合、「零一十」と明確に発音します。", example: "一千零一十 号（1010号室）" },
      { num: "1100", pinyin: "yìqiān yībǎi", rule: "1100（一千一百）：口語では末尾の「百」を省略して「一千一」と呼ばれることがあります。", example: "一共 是一千一百 块（合計1100元）" },
      { num: "1008", pinyin: "yìqiān líng bā", rule: "1008（一千零八）：ホテルの部屋番号や航空便名で頻出。0を1回挟みます。", example: "一千零八 房间（1008号室）" },
      { num: "2020", pinyin: "liǎngqiān líng èrshí", rule: "2020（两千零二十）：千の位の2は「两(liǎng)」を使い、百の位が0なので「零」が入ります。", example: "两千零二十 年 以前（2020年前）" },
      { num: "222", pinyin: "liǎngbǎi èrshí èr", rule: "222（两百二十二）：百の位は「两百」、十の位と一の位は「二十二」となります。", example: "两百二十二 路 公共汽车（222番バス）" }
    ];

const storyChapters = [
      {
        id: 1, title: "第1章：璃月港の朝食と茶館",
        scenes: [
          {
            id: 1, title: "#01 朝の空腹と朝食",
            phrases: [
              { cn: "早上 起床 后， 派蒙 摸着 肚子：", py: "zǎoshang qǐchuáng hòu, Pàiméng mō zhe dùzi:", ja: "朝 起床した 後、 パイモンは さすりながら お腹を：" },
              { cn: "难过地 说： “昨天 吃得 太少，", py: "nánguò de shuō: “zuótiān chī de tài shǎo,", ja: "辛そうに 言った： 「昨日 食べたのが あまりに 少なく、" },
              { cn: "我 现在 太 饿了！", py: "wǒ xiànzài tài è le!", ja: "私は 今 あまりに 飢えた！" },
              { cn: "派蒙 最 喜欢 吃 美味 的 东西 了。", py: "Pàiméng zuì xǐhuan chī měiwèi de dōngxi le.", ja: "パイモンは 最も 好む 食べる 美味しい ものを。" },
              { cn: "听说 前面 著名的 饭馆，", py: "tīngshuō qiánmiàn zhùmíng de fànguǎn,", ja: "聞いたところでは 前の 有名な 料理屋は、" },
              { cn: "卖 各种 早饭 和 特色 小吃。", py: "mài gè zhǒng zǎofàn hé tèsè xiǎochī.", ja: "売っている 各種の 朝食 と 特色ある 軽食（小吃）を。" },
              { cn: "不但 提供 免费的 绿茶，", py: "búdàn tígōng miǎnfèi de lǜchá,", ja: "〜だけでなく 提供する 無料の 緑茶を、" },
              { cn: "而且 还有 热的 面包 和 包子，", py: "érqiě hái yǒu rè de miànbāo hé bāozi,", ja: "その上 温かい パン と 肉まんが 有り、" },
              { cn: "还有 热 牛奶 和 鸡蛋。", py: "hái yǒu rè niúnǎi hé jīdàn.", ja: "さらに 温かい 牛乳 と 卵が 有る。" },
              { cn: "店里 总是 很 热情，", py: "diàn lǐ zǒngshì hěn rèqíng,", ja: "店の 中は いつも 親切で、" },
              { cn: "我们 快去 吧！”", py: "wǒmen kuài qù ba!”", ja: "私たちは 早く 行こう！」" }
            ],
            translation: "朝起きた後、パイモンはお腹をさすりながら「昨日食べた量が少なくて今すごくお腹ペコペコだよ！美味しいものが食べたい！前の有名な店は色んな朝食や名物軽食を売っていて、無料のお茶が出るだけでなく温かいパンや肉まん、牛乳や卵もあるらしいから早く行こうぜ！」と言った。"
          },
          {
            id: 2, title: "#02 琉璃亭での注文とメニュー",
            phrases: [
              { cn: "中午 走进 饭馆 看 菜单，", py: "zhōngwǔ zǒu jìn fànguǎn kàn càidān,", ja: "昼 歩き入る 料理屋に 見る メニューを、" },
              { cn: "热情 的 服务员 小姐 介绍 说：", py: "rèqíng de fúwùyuán xiǎojiě jièshào shuō:", ja: "親切な 店員の お嬢さんは 紹介して 言う：" },
              { cn: "“今天 除了 饮料 以外，", py: "“jīntiān chúle yǐnliào yǐwài,", ja: "「今日 〜を除いて 飲み物を 以外、" },
              { cn: "所有的 牛肉、 羊肉 和 饺子，", py: "suǒyǒu de niúròu, yángròu hé jiǎozi,", ja: "すべての 牛肉、 羊肉 と 餃子、" },
              { cn: "水饺、 烤鸭、 米饭 和 面条，", py: "shuǐjiǎo, kǎoyā, mǐfàn hé miàntiáo,", ja: "水餃子、 北京ダック、 ご飯 と 麺類、" },
              { cn: "这些 特色菜 都可以 打八折。", py: "zhèxiē tèsècài dōu kěyǐ dǎ bā zhé.", ja: "これらの 名物料理は すべて 2割引でき。" },
              { cn: "非常 便宜， 一点儿 也不 贵。", py: "fēicháng piányi, yìdiǎnr yě bú guì.", ja: "非常に 安く、 少しも 高くない。" },
              { cn: "请问 两位 客人 想 买 多少？", py: "qǐngwèn liǎng wèi kèrén xiǎng mǎi duōshao?", ja: "お尋ねしますが 2人の お客様は したい 買う どれくらい？" },
              { cn: "有什么 忌口 吗？”", py: "yǒu shénme jìkǒu ma?”", ja: "有りますか 何か 苦手なものが？」" },
              { cn: "派蒙 喊道：", py: "Pàiméng hǎn dào:", ja: "パイモンは 叫んだ：" },
              { cn: "“做成 微辣 就 好，", py: "“zuò chéng wēilà jiù hǎo,", ja: "「作る ピリ辛に すれば 良い、" },
              { cn: "请 马上 点菜 吧！”", py: "qǐng mǎshàng diǎncài ba!”", ja: "どうぞ すぐ 注文しよう！」" }
            ],
            translation: "昼時に店に入りメニューを見ると、店員が「本日はお飲み物を除き、牛肉や羊肉、餃子や水餃子、北京ダック、ご飯や麺類などの名物料理がすべて2割引で大変お安くなっております。どれくらい召し上がりますか、苦手な食材はありますか？」と案内した。パイモンは「ピリ辛にしてくれ、すぐ注文しよう！」と頼んだ。"
          },
          {
            id: 3, title: "#03 持ち帰りとスマホ決済・領収書",
            phrases: [
              { cn: "他们 吃得 极 饱，", py: "tāmen chī de jí bǎo,", ja: "彼らは 食べた 極めて 満腹に、" },
              { cn: "用 餐巾纸 擦了擦 嘴，", py: "yòng cānjīnzhǐ cā le cā zuǐ,", ja: "用いて 紙ナプキンを 拭いた 口を、" },
              { cn: "把 剩菜 打包。", py: "bǎ shèngcài dǎbāo.", ja: "処置して 残り料理を 持ち帰りにした。" },
              { cn: "准备 买单 时，", py: "zhǔnbèi mǎidān shí,", ja: "準備する お会計の 時、" },
              { cn: "一共 是一千一百 块 零 五角 钱。", py: "yígòng shì yìqiān yībǎi kuài líng wǔ jiǎo qián.", ja: "合計は 1100 元 零 5角の お金で。" },
              { cn: "钟离 摸了摸 口袋：", py: "Zhōnglí mō le mō kǒudài:", ja: "鍾離は 探った ポケットを：" },
              { cn: "“糟糕， 我 以为 把 钱包 带上了，", py: "“zāogāo, wǒ yǐwéi bǎ qiánbāo dài shang le,", ja: "「しまった、 私は 思い込んでいた 財布を 持ってきたと、" },
              { cn: "其实 忘记在 公司的 办公室了。”", py: "qíshí wàngjì zài gōngsī de bàngōngshì le.”", ja: "実は 忘れた 会社の オフィスに。」" },
              { cn: "旅行者 笑着 拿出 手机 扫码：", py: "Lǚxíngzhě xiào zhe ná chū shǒujī sǎomǎ:", ja: "旅行者は 笑いながら 取り出す スマホを スキャンする：" },
              { cn: "“没关系，", py: "“méi guānxi,", ja: "「大丈夫、" },
              { cn: "用 微信 或者 支付宝 刷卡 都可以。", py: "yòng Wēixìn huòzhě Zhīfùbǎo shuākǎ dōu kěyǐ.", ja: "使う WeChat あるいは Alipayを カード決済する すべて できる。" },
              { cn: "顺便 租个 充电宝 输入 密码，", py: "shùnbiàn zū gè chōngdiànbǎo shūrù mìmǎ,", ja: "ついでに 借りる 1つの モバイルバッテリーを 入力する パスワードを、" },
              { cn: "然后 请 给 我们 一张 发票 和 收据。”", py: "ránhòu qǐng gěi wǒmen yì zhāng fāpiào hé shōujù.”", ja: "それから どうぞ くれる 私たちに 1枚の 領収書 と レシートを。」" }
            ],
            translation: "満腹まで食べて残りを持ち帰りにした。合計1100元5角だったが鍾離が財布をオフィスに忘れたことに気づいた。旅人が「WeChatかAlipayで払うよ。ついでにモバイルバッテリーを借りてパスワードを入れ、領収書とレシートをもらおう」とスマートに支払った。"
          },
          {
            id: 4, title: "#04 食後のコーヒーとお茶・鍾離の歴史語り",
            phrases: [
              { cn: "饭后 服务员 小姐 拿来 咖啡 杯子，", py: "fàn hòu fúwùyuán xiǎojiě ná lái kāfēi bēizi,", ja: "食後 店員の お嬢さんが 持ってくる コーヒーの カップを、" },
              { cn: "笑着 问： “要 加 糖 吗？", py: "xiào zhe wèn: “yào jiā táng ma?", ja: "笑いながら 尋ねる： 「要る 加える 砂糖を か？" },
              { cn: "您 觉得 味道 怎么样？", py: "nín juéde wèidào zěnmeyàng?", ja: "あなたは 感じる 味は どうですか？" },
              { cn: "一共 六 块 九 元 四 角， 谢谢！", py: "yígòng liù kuài jiǔ yuán sì jiǎo, xièxie!", ja: "合計 6 塊 9 元 4 角です、 ありがとう！" },
              { cn: "欢迎 两位 再 来！”", py: "huānyíng liǎng wèi zài lái!”", ja: "歓迎します お二人が また 来るのを！」" },
              { cn: "派蒙 笑着 说：", py: "Pàiméng xiào zhe shuō:", ja: "パイモンは 笑いながら 言う：" },
              { cn: "“等了 五 分钟， 咖啡 很好喝，", py: "“děng le wǔ fēnzhōng, kāfēi hěn hǎohē,", ja: "「待った 5 分間、 コーヒーは とても美味しかった、" },
              { cn: "好， 再见！”", py: "hǎo, zàijiàn!", ja: "うん、 さようなら！」" },
              { cn: "钟离 先生 慢慢地 喝着 红茶 和 热茶，", py: "Zhōnglí xiānsheng mànmàn de hē zhe hóngchá hé rèchá,", ja: "鍾離 先生は ゆっくりと 飲んでいる 紅茶 と 熱いお茶を、" },
              { cn: "过了 很 久， 笑着 讲 历史 故事：", py: "guò le hěn jiǔ, xiào zhe jiǎng lìshǐ gùshi:", ja: "過ぎた とても 長く、 笑いながら 語る 歴史 物語を：" },
              { cn: "“两千零二十 年 以前，", py: "“liǎng qiān líng èr shí nián yǐqián,", ja: "「2020 年 以前、" },
              { cn: "三月 五日 的 时候，", py: "sān yuè wǔ rì de shíhou,", ja: "3月 5日 の 時に、" },
              { cn: "这里的 茶 文化 就 已经 一直 很有名 了。”", py: "zhèlǐ de chá wénhuà jiù yǐjīng yìzhí hěn yǒumíng le.”", ja: "ここの 茶 文化は すぐに すでに ずっと とても有名 になった。」" }
            ],
            translation: "食後に店員がコーヒーを持ってきて「お砂糖はお入れしますか？お味はいかがですか？合計6元9角です、またお越しください！」と案内した。パイモンが「美味しかったよ、またね！」と返し、鍾離先生はお茶を味わいながら「2020年前の3月5日より、ここの茶文化はずっと名高かった」と歴史を語った。"
          }
        ]
      },
      {
        id: 2, title: "第2章：万文集舎と書斎の学び",
        scenes: [
          {
            id: 5, title: "#05 万文集舎の教室と自己紹介",
            phrases: [
              { cn: "上午 参观 完 港口，", py: "shàngwǔ cānguān wán gǎngkǒu,", ja: "午前中に 見学し 終え 港を、" },
              { cn: "今天 刚好 是 学校 开学 的 日子。", py: "jīntiān gānghǎo shì xuéxiào kāixué de rìzi.", ja: "今日は ちょうど である 学校が 新学期が始まる（开学） 日。" },
              { cn: "下午 两 点， 他们 来到 万文集舎 教室。", py: "xiàwǔ liǎng diǎn, tāmen lái dào Wànwénjíshè jiàoshì.", ja: "午後 2時に、 彼らは やって来る 万文集舎の 教室へ。" },
              { cn: "老师 正在 教 三年级 一 班 的 学生们，", py: "lǎoshī zhèngzài jiāo sān-niánjí yī bān de xuéshengmen,", ja: "先生は ちょうど 教えている 3年 1 組の 生徒たちに、" },
              { cn: "学习 中国 汉语 和 普通话，", py: "xuéxí Zhōngguó Hànyǔ hé pǔtōnghuà,", ja: "学ぶことを 中国の 中国語 と 標準語を、" },
              { cn: "认真 讲解 常用 动词。", py: "rènzhēn jiǎngjiě chángyòng dòngcí.", ja: "真面目に 解説している 日常の 動詞（动词）を。" },
              { cn: "一个 同学 向 大家 介绍 自己：", py: "yí gè tóngxué xiàng dàjiā jièshào zìjǐ:", ja: "1人の クラスメートが 皆に 紹介する 自分を：" },
              { cn: "“我 姓 王， 名字 叫 小明，", py: "“wǒ xìng Wáng, míngzi jiào Xiǎomíng,", ja: "「私は 姓は 王、 名前は 呼ぶ 小明と、" },
              { cn: "对 汉语 很 感 兴趣！", py: "duì Hànyǔ hěn gǎn xìngqù!", ja: "中国語に とても 感じる 興味を！" },
              { cn: "想 更多地 了解 璃月 文化，", py: "xiǎng gèng duō de liǎojiě Líyuè wénhuà,", ja: "したい もっと 理解する 璃月の 文化を、" },
              { cn: "上课 不要 随便 说话，", py: "shàngkè búyào suíbiàn shuōhuà,", ja: "授業では 勝手に 話すな、" },
              { cn: "也 千万 不能 迟到。”", py: "yě qiānwàn bù néng chídào.”", ja: "決して 遅刻するな。」" },
              { cn: "老师 笑着 在 黑板上 写 汉字 的 字：", py: "lǎoshī xiào zhe zài hēibǎn shang xiě Hànzì de zì:", ja: "先生は 笑いながら 黒板の 上に 書く 漢字の 字を：" },
              { cn: "“如果 遇到 不 懂 的 生字，", py: "“rúguǒ yùdào bù dǒng de shēngzì,", ja: "「もし 出くわしたら 理解できない 新出漢字に、" },
              { cn: "可以 查 字典， 也可以 问 老师。”", py: "kěyǐ chá zìdiǎn, yě kěyǐ wèn lǎoshī.”", ja: "〜できる 調べる 辞書を、 尋ねることもできる 先生に。」" }
            ],
            translation: "午前中に港を見学し終え、今日はちょうど新学期（开学）の初日だった。午後2時に万文集舎の教室へ行くと、先生が生徒たちに中国語や標準語を教え、動詞の用法を解説していた。生徒の小明が自己紹介し、先生は辞書を引く大切さを説いた。"
          },
          {
            id: 6, title: "#06 行秋の読書と文具の貸し借り",
            phrases: [
              { cn: "在 书架 旁边，", py: "zài shūjià pángbiān,", ja: "本棚の 傍らで、" },
              { cn: "行秋 正在 认真地 看 有趣的 故事 书。", py: "Xíngqiū zhèngzài rènzhēn de kàn yǒuqù de gùshì shū.", ja: "行秋は ちょうど 真面目に 読んでいる 面白い 物語の 本を。" },
              { cn: "他 从 书包 里 拿出 几 本 练习题。", py: "tā cóng shūbāo lǐ ná chū jǐ běn liànxítí.", ja: "彼は カバン（书包）の 中から 取り出した 数 冊の 練習問題を。" },
              { cn: "黑板上 写的 词语 和 句子 很 简单。", py: "hēibǎn shang xiě de cíyǔ hé jùzi hěn jiǎndān.", ja: "黒板の 上に 書かれた 単語 と 文は とても 簡単で。" },
              { cn: "他 借给 派蒙 一支 铅笔，", py: "tā jiè gěi Pàiméng yì zhī qiānbǐ,", ja: "彼は 貸してやる パイモンに 1本の 鉛筆を、" },
              { cn: "和 一本 数学 练习题。", py: "hé yì běn shùxué liànxítí.", ja: "と 1冊の 数学の 練習問題を。" },
              { cn: "行秋 笑着 说：", py: "Xíngqiū xiào zhe shuō:", ja: "行秋は 笑いながら 言う：" },
              { cn: "“做完 作业 并不 难， 容易 得很。", py: "“zuò wán zuòyè bìng bù nán, róngyì de hěn.", ja: "「やり終える 宿題は 決して 難しくない、 簡単なこと 極まりない。" },
              { cn: "只要 每 天 坚持 复习，", py: "zhǐyào měi tiān jiānchí fùxí,", ja: "〜しさえすれば 毎 日 欠かさず 復習する、" },
              { cn: "下个月的 考试 成绩 就 一定 能 提高 水平！”", py: "xià gè yuè de kǎoshì chéngjì jiù yídìng néng tígāo shuǐpíng!”", ja: "来月の 試験の 成績は すぐに 必ず 〜できる 向上させる レベルを！」" }
            ],
            translation: "行秋が本棚のそばで物語を読んでいた。カバンから練習問題を取り出した行秋は、パイモンに鉛筆と数学の問題集を貸し「宿題を終えるのは難しくないよ。毎日復習を続ければ試験の成績は必ず伸びるよ！」と励ました。"
          },
          {
            id: 7, title: "#07 図書館の規則と静かな読書",
            phrases: [
              { cn: "万文集舎的 图书馆 非常 安静，", py: "Wànwénjíshè de túshūguǎn fēicháng ānjìng,", ja: "万文集舎の 図書館は 非常に 静かで、" },
              { cn: "老师 准备 进行 汉语 听写。", py: "lǎoshī zhǔnbèi jìnxíng Hànyǔ tīngxiě.", ja: "先生は 準備する 行う 中国語の 聞き取りテスト（听写）を。" },
              { cn: "墙上 写着： “请 大家 安静，", py: "qiáng shang xiě zhe: “qǐng dàjiā ānjìng,", ja: "壁の 上には 書いてある： 「どうぞ 皆さん 静かに、" },
              { cn: "别 大声 讲话。”", py: "bié dàshēng jiǎnghuà.”", ja: "〜するな 大声で 話す。」" },
              { cn: "桌子上 放着 许多 旧 书，", py: "zhuōzi shang fàng zhe xǔduō jiù shū,", ja: "机の 上には 置いてある 多くの 古い 本と、" },
              { cn: "和 几 张 干净的 白 纸。", py: "hé jǐ zhāng gānjìng de bái zhǐ.", ja: "数 枚の 清潔な 白い 紙が。" },
              { cn: "大家 先 读 课文， 然后 认真 思考。", py: "dàjiā xiān dú kèwén, ránhòu rènzhēn sīkǎo.", ja: "皆は まず 読む 本文を、 それから 真面目に 思考する。" },
              { cn: "派蒙 读懂 了 这段 文章，", py: "Pàiméng dú dǒng le zhè duàn wénzhāng,", ja: "パイモンは 読んで理解した この 段落の 文章を、" },
              { cn: "明白了 它的 主要 意思，", py: "míngbai le tā de zhǔyào yìsi,", ja: "理解した その 主要な 意味は、" },
              { cn: "就是 聪明 和 努力！", py: "jiùshì cōngming hé nǔlì!", ja: "まさに 聡明 と 努力であることを！" }
            ],
            translation: "閲覧室は静寂に包まれ、先生が中国語の聞き取りテスト（ディクテーション）を準備していた。壁には私語厳禁の注意書きがある。机には古書と白紙があり、まず本文を読んでじっくり考えた。パイモンはその主要な意味が賢さと努力だと悟った。"
          },
          {
            id: 8, title: "#08 重雲との再会と質問の回答",
            phrases: [
              { cn: "从 楼上 走下来 的 重云，", py: "cóng lóushang zǒu xiàlai de Chóngyún,", ja: "上の階から 歩き降りてきた 重雲は、" },
              { cn: "遇到了 刚刚 进门的 朋友， 热情地 打招呼：", py: "yùdào le gānggāng jìn mén de péngyou, rèqíng de dǎ zhāohu:", ja: "出くわした たった今 門を入った 友人に、 親切に 挨拶する：" },
              { cn: "“谁 知道 这个 问题 的 答案？”", py: "“shéi zhīdào zhè gè wèntí de dá'àn?”", ja: "「誰が 知っているか この 問題の 答えを？」" },
              { cn: "刚才 校长 提出了 一个 难题，", py: "gāngcái xiàozhǎng tíchū le yí gè nántí,", ja: "さっき 校長先生が 出した 1つの 難問を、" },
              { cn: "一个 关于 北京 历史 的 难题。", py: "yí gè guānyú Běijīng lìshǐ de nántí.", ja: "1つの 〜に関する 北京の 歴史の 難問を。" },
              { cn: "大家 认为 只要 抓住 学习的 机会，", py: "dàjiā rènwéi zhǐyào zhuāzhù xuéxí de jīhuì,", ja: "皆は 考える 〜しさえすれば 掴む 学びの 機会を、" },
              { cn: "就能 顺利 解决。", py: "jiù néng shùnlì jiějué.", ja: "すぐに 〜できる 順調に 解決する。" },
              { cn: "重云 顺利 回答 了 问题，", py: "Chóngyún shùnlì huídá le wèntí,", ja: "重雲は 順調に 回答した 問題に、" },
              { cn: "行秋 笑着 称赞 他 记得 极 清楚。", py: "Xíngqiū xiào zhe chēngzàn tā jìde jí qīngchu.", ja: "行秋は 笑いながら 称賛した 彼が 覚えていること 極めて 明瞭だと。" }
            ],
            translation: "上の階から降りてきた重雲が友人と挨拶し「この問題の答えを知っている人はいる？」と声をかけた。さきほど校長先生から歴史に関する難問が出され、皆で考えていたところだった。重雲が見事に答えると、行秋はその記憶力の良さを称賛した。"
          }
        ]
      },
      {
        id: 3, title: "第3章：不卜廬の診察と健康",
        scenes: [
          {
            id: 9, title: "#09 不卜廬での受付と問診",
            phrases: [
              { cn: "离开 万文集舎，", py: "líkāi Wànwénjíshè,", ja: "離れる 万文集舎を、" },
              { cn: "派蒙 突然 喊 肚子 疼：", py: "Pàiméng tūrán hǎn dùzi téng:", ja: "パイモンは 突然 叫ぶ お腹が 痛いと：" },
              { cn: "“哎呀， 我 吃得 太杂，", py: "“āiyā, wǒ chī de tài zá,", ja: "「うわあ、 私は 食べたのが 雑で、" },
              { cn: "正在 生病 拉肚子 呢！”", py: "zhèngzài shēngbìng lādùzi ne!”", ja: "病気になって 下痢をしているよ！」" },
              { cn: "他们 赶快 去 附近的 不卜庐 挂号。", py: "tāmen gǎnkuài qù fùjìn de Bùbǔlú guàhào.", ja: "彼らは 急いで 行く 付近の 不卜廬へ 受付する。" },
              { cn: "医院里 白术 医生 仔细 检查 发现：", py: "yīyuàn lǐ Báizhú yīshēng zǐxì jiǎnchá fāxiàn:", ja: "病院の中で 白朮 医師は 詳しく 検査し 発見する：" },
              { cn: "“身体 没有 发烧 和 感冒，", py: "“shēntǐ méiyǒu fāshāo hé gǎnmào,", ja: "「身体は ない 発熱 と 風邪は、" },
              { cn: "也不用 打针。", py: "yě bú yòng dǎzhēn.", ja: "必要ない 注射を打つ。" },
              { cn: "请问 对 这种 草药 过敏 吗？”", py: "qǐngwèn duì zhè zhǒng cǎoyào guòmǐn ma?”", ja: "お尋ねしますが この 種類の 草薬に アレルギーがあります か？」" }
            ],
            translation: "パイモンが突然「食べ合わせが悪くてお腹を壊して病気になっちゃった！」と叫んだため、不卜廬へ駆け込み受付をした。白朮先生が丁寧に診察し「熱も風邪もなく注射も要りません。この生薬にアレルギーはありますか？」と確認した。"
          },
          {
            id: 10, title: "#10 処方薬と健康のアドバイス",
            phrases: [
              { cn: "派蒙 喝了 一 口 水 问：", py: "Pàiméng hē le yì kǒu shuǐ wèn:", ja: "パイモンは 飲んだ 一 口の 水を 尋ねる：" },
              { cn: "“大夫， 这个 药 苦 吗？", py: "“dàifu, zhè gè yào kǔ ma?", ja: "「先生、 この 薬は 苦いですか？" },
              { cn: "每天 需要 喝 几 次？", py: "měitiān xūyào hē jǐ cì?", ja: "毎日 必要ですか 飲むのは 何 回？" },
              { cn: "可能 是 我 早上 吃多了。”", py: "kěnéng shì wǒ zǎoshang chī duō le.”", ja: "かもしれない 私は 朝 食べ過ぎた。」" },
              { cn: "白术 笑着 说：", py: "Báizhú xiào zhe shuō:", ja: "白朮は 笑いながら 言う：" },
              { cn: "“因为 消化 不 好，", py: "“yīnwèi xiāohuà bù hǎo,", ja: "「〜なので 消化が 良くない、" },
              { cn: "所以 每天 喝 两 次 药 就 会 好。", py: "suǒyǐ měitiān hē liǎng cì yào jiù huì hǎo.", ja: "だから 毎日 飲む 2 回 薬を すぐに 良く なる。" },
              { cn: "如果 渴了， 可以 多 喝 水。", py: "rúguǒ kě le, kěyǐ duō hē shuǐ.", ja: "もし 喉が渇いたら、 多く 飲む 水を。" },
              { cn: "平时 必须 照顾 好 自己的 健康，", py: "píngshí bìxū zhàogù hǎo zìjǐ de jiànkāng,", ja: "普段は 必ず 配慮しなさい 自分の 健康を、" },
              { cn: "注意 休息， 早点儿 睡觉， 别 太 累，", py: "zhùyì xiūxi, zǎodiǎnr shuìjiào, bié tài lèi,", ja: "注意し 休養し、 早く 寝て、 あまり 疲れるな、" },
              { cn: "请 放心 吧！”", py: "qǐng fàngxīn ba!”", ja: "どうぞ 安心しなさい！」" }
            ],
            translation: "パイモンは一口水を飲んで「苦い？何回飲むの？朝食べすぎたかも」と聞いた。白朮は「消化不良だから1日2回飲めば治るよ。喉が渇いたら水を飲みなさい。普段から体を大切にして睡眠を取り、無理をしないように、安心していいよ」と優しく教えた。"
          },
          {
            id: 11, title: "#11 七七の記憶と眼鏡のお医者さん",
            phrases: [
              { cn: "戴着 眼镜的 白术 医生 看着 七七，", py: "dài zhe yǎnjìng de Báizhú yīshēng kàn zhe Qīqī,", ja: "かけている 眼鏡を 白朮 医師は 見つめながら 七七を、" },
              { cn: "关心地 问： “七七， 刚才 头 疼 吗？", py: "guānxīn de wèn: “Qīqī, gāngcái tóu téng ma?", ja: "心配そうに 尋ねる： 「七七、 さっき 頭は 痛かったかい？" },
              { cn: "头发 怎么 低着？”", py: "tóufa zěnme dī zhe?”", ja: "髪を なぜ 低く下げているの？」" },
              { cn: "七七 摸了摸 脸、 头发、 耳朵 和 鼻子，", py: "Qīqī mō le mō liǎn, tóufa, ěrduo hé bízi,", ja: "七七は 撫でた 顔、 髪、 耳 と 鼻を、" },
              { cn: "用 小 小的 声音 回答：", py: "yòng xiǎo xiǎo de shēngyīn huídá:", ja: "用いて 小さな 声を 回答する：" },
              { cn: "“头 不 疼， 时间 很 短，", py: "“tóu bù téng, shíjiān hěn duǎn,", ja: "「頭は 痛くない、 時間は とても 短かった、" },
              { cn: "眼睛 也不 哭 了。", py: "yǎnjing yě bù kū le.", ja: "目も もう 泣いていない。" },
              { cn: "但是 觉得 有点儿 冷，", py: "dànshì juéde yǒudiǎnr lěng,", ja: "しかし 感じる 少し 寒いと、" },
              { cn: "七七 记得 把 药方 写在 本子 上了。”", py: "Qīqī jìde bǎ yàofāng xiě zài běnzi shang le.”", ja: "七七は 覚えている 処方箋を 書いて ノートの 上に 置いたことを。」" }
            ],
            translation: "眼鏡をかけた白朮医師が「七七、さっき頭は痛かったかい？うつむいてどうしたの？」と声をかけた。七七は自分の顔や髪、耳や鼻に触れ「頭は痛くない、涙もすぐ止まった。少し寒いからノートに処方箋を書いたのを覚えている」と答えた。"
          },
          {
            id: 12, title: "#12 散歩と日々の運動・鍛錬",
            phrases: [
              { cn: "到了 现在 派蒙 才 明白：", py: "dào le xiànzài Pàiméng cái míngbai:", ja: "至った 今になって パイモンは 初めて 理解した：" },
              { cn: "“为了 身体 健康，", py: "“wèile shēntǐ jiànkāng,", ja: "「〜のために 身体の 健康、" },
              { cn: "我们 应该 每 天 散步 和 跑步。", py: "wǒmen yīnggāi měi tiān sànbù hé pǎobù.", ja: "私たちは 〜すべきだ 毎 日 散歩する と 走る。" },
              { cn: "多 参加 体育 运动 和 锻炼，", py: "duō cānjiā tǐyù yùndòng hé duànliàn,", ja: "多く 参加する スポーツの 運動 と 鍛錬に、" },
              { cn: "腿 和 脚 才能 更有 力气，", py: "tuǐ hé jiǎo cáinéng gèng yǒu lìqi,", ja: "太もも と 足が 初めて 有る 力が、" },
              { cn: "人 也不 会 变得 太 胖 或者 太 瘦。", py: "rén yě bú huì biàn de tài pàng huòzhě tài shòu.", ja: "人 も 〜ない なる 太りすぎたり あるいは 痩せすぎたり。" },
              { cn: "有 时间 还可以 去 爬山，", py: "yǒu shíjiān hái kěyǐ qù páshān,", ja: "有れば 時間が さらに 〜できる 行く 登山する、" },
              { cn: "跑 半 个 小时，", py: "pǎo bàn gè xiǎoshí,", ja: "走る 半 時間、" },
              { cn: "好的 习惯 使 人 感到 极 舒服！”", py: "hǎo de xíguàn shǐ rén gǎndào jí shūfu!”", ja: "良い 習慣は させる 人に 感じる 極めて 快適だと！」" }
            ],
            translation: "今になってパイモンは「健康のため毎日散歩やジョギングをしよう。スポーツで足腰を鍛えれば太りすぎや痩せすぎを防げる。時間があれば登山に行って30分走るのもいいね、良い習慣は体を快適にしてくれる！」と納得した。"
          }
        ]
      },
      {
        id: 4, title: "第4章：群玉閣と月海亭の政務",
        scenes: [
          {
            id: 13, title: "#13 群玉閣の昇降機と電梯",
            phrases: [
              { cn: "为了 去 天上的 群玉阁，", py: "wèile qù tiānshang de Qúnyùgé,", ja: "〜のために 行く 天上の 群玉閣へ、" },
              { cn: "他们 拿到了 特别的 登机牌。", py: "tāmen nádào le tèbié de dēngjīpái.", ja: "彼らは 手に入れた 特別な 搭乗券を。" },
              { cn: "引路人 告诉 他们：", py: "yǐnlùrén gàosù tāmen:", ja: "案内人は 教える 彼らに：" },
              { cn: "“今天的 升降机，", py: "“jīntiān de shēngjiàngjī,", ja: "「今日の 昇降機は、" },
              { cn: "就像 飞机 航班 刚刚 起飞 一样 准时。", py: "jiù xiàng fēijī hángbān gānggāng qǐfēi yíyàng zhǔnshí.", ja: "まるで 飛行機の 定期便が たった今 離陸する（起飞） ように 時間通りです。" },
              { cn: "虽然 天上 刮 风， 蓝 天上 云 很多，", py: "suīrán tiānshang guā fēng, lán tiān shang yún hěn duō,", ja: "〜だけれども 天上で 風が吹き、 青い 空の上には 雲が 多い、" },
              { cn: "但 只要 走进 这个 电梯，", py: "dàn zhǐyào zǒu jìn zhè gè diàntī,", ja: "しかし 〜しさえすれば 入る この エレベーターに、" },
              { cn: "马上 就能 安全 升到 几十 层 楼 高。”", py: "mǎshàng jiù néng ānquán shēng dào jǐshí céng lóu gāo.”", ja: "すぐに 安全に 上がれる 数十 階の 建物の 高さへ。」" }
            ],
            translation: "群玉閣へ向かうため搭乗券を受け取った。案内人は「本日の昇降機は飛行機が離陸するように正確です。風が強く青空に雲も多いですが、このエレベーターに乗れば数十階の高さまで一気に安全に昇れます」と案内した。"
          },
          {
            id: 14, title: "#14 凝光の会議と事務手続き",
            phrases: [
              { cn: "在 会议室 里，", py: "zài huìyìshì lǐ,", ja: "会議室の 中で、" },
              { cn: "凝光 和 各位 同事 一起 认真 开会，", py: "Níngguāng hé gèwèi tóngshì yìqǐ rènzhēn kāihuì,", ja: "凝光と 各位の 同僚は 一緒に 真面目に 会議を開き、" },
              { cn: "会议 开始 讨论 最 新的 商业 事情。", py: "huìyì kāishǐ tǎolùn zuì xīn de shāngyè shìqing.", ja: "会議は 始まった 議論することを 最も 新しい 商業の 事柄を。" },
              { cn: "凝光 要求 大家 遇到 难题 一点儿 也不 怕，", py: "Níngguāng yāoqiú dàjiā yùdào nántí yìdiǎnr yě bú pà,", ja: "凝光は 要求した 皆に 難題に 出くわしても 少しも 恐れないよう、" },
              { cn: "共同 想出 好的 办法 顺利 解决。", py: "gòngtóng xiǎng chū hǎo de bànfǎ shùnlì jiějué.", ja: "共同で 考え出し 良い 方法を 順調に 解決することを。" },
              { cn: "经理 宣布 会议 结束，", py: "jīnglǐ xuānbù huìyì jiéshù,", ja: "支配人は 宣言した 会議の 終了を、" },
              { cn: "大家 做出了 正确的 选择，", py: "dàjiā zuò chū le zhèngquè de xuǎnzé,", ja: "皆は 行った 正しい 選択を、" },
              { cn: "都 同意 这个 决定， 凝光 满意地 笑了。", py: "dōu tóngyì zhè gè juédìng, Níngguāng mǎnyì de xiào le.", ja: "すべて 同意した この 決定に、 凝光は 満足そうに 笑った。" }
            ],
            translation: "会議室で凝光と同僚たちが会議を始めビジネスについて議論した。凝光は難題に動じず知恵を出し合うよう求め解決した。支配人が会議終了を告げ全員が合意すると凝光は満足そうに微笑んだ。"
          },
          {
            id: 15, title: "#15 総務司オフィスと書類整理",
            phrases: [
              { cn: "甘雨 在 办公室 里 忙碌地 工作，", py: "Gānyǔ zài bàngōngshì lǐ mánglù de gōngzuò,", ja: "甘雨は オフィスの中で 忙しく 働く、" },
              { cn: "桌子上 摆满了 文件、 信 和 报纸。", py: "zhuōzi shang bǎi mǎn le wénjiàn, xìn hé bàozhǐ.", ja: "机の上には 並べて満ちた 書類、 手紙 と 新聞が。" },
              { cn: "派蒙 正在 用 电脑 上网 看 新闻。", py: "Pàiméng zhèngzài yòng diànnǎo shàngwǎng kàn xīnwén.", ja: "パイモンは ちょうど 使い パソコンを ネットに繋ぎ 見る ニュースを。" },
              { cn: "刻晴 走进来 说：", py: "Kèqíng zǒu jìnlái shuō:", ja: "刻晴は 入ってきて 言う：" },
              { cn: "“我们 必须 把 这些 旧 资料 检查 清楚，", py: "“wǒmen bìxū bǎ zhèxiē jiù zīliào jiǎnchá qīngchu,", ja: "「私たちは 必ず これら 古い 資料を 点検して はっきりさせ、" },
              { cn: "然后 放在 柜子里 打扫 干净。", py: "ránhòu fàng zài guìzi lǐ dǎsǎo gānjìng.", ja: "それから 置いて 戸棚の 中に 掃除して 綺麗にしなければならない。" },
              { cn: "请 准备好 护照 和 照相机，", py: "qǐng zhǔnbèi hǎo hùzhào hé zhàoxiàngjī,", ja: "どうぞ 準備して パスポート と カメラを、" },
              { cn: "把 文件 分 开， 不要 影响 明天 的 工作。”", py: "bǎ wénjiàn fēn kāi, búyào yǐngxiǎng míngtiān de gōngzuò.”", ja: "書類を 分けて 開く、 〜するな 影響する 明日の 仕事に。」" }
            ],
            translation: "甘雨はオフィスで忙しく働き、パイモンはパソコンでニュースを見ていた。刻晴が入り「古い資料を点検し棚に片付け掃除しましょう。明日の仕事に差し支えないよう、パスポートやカメラ、写真を揃えて分類してください」と指示した。"
          },
          {
            id: 16, title: "#16 甘雨の電話と道案内",
            phrases: [
              { cn: "甘雨 每天 早上 八点 上班，", py: "Gānyǔ měitiān zǎoshang bā diǎn shàngbān,", ja: "甘雨は 毎日 朝 8時に 出勤する、" },
              { cn: "突然 手机 响了。", py: "tūrán shǒujī xiǎng le.", ja: "突然 スマホが 鳴った。" },
              { cn: "她 接起 电话 问： “喂， 你们 在 哪儿？”", py: "tā jiē qǐ diànhuà wèn: “wéi, nǐmen zài nǎr?”", ja: "彼女は 取って 電話を 尋ねる： 「もしもし、 あなたたちは どこに いるの？」" },
              { cn: "派蒙 背着 包 着急地 看着 手表：", py: "Pàiméng bēi zhe bāo zháojí de kàn zhe shǒubiǎo:", ja: "パイモンは 背負い バッグを 焦って 見ながら 腕時計を：" },
              { cn: "“对不起， 我们 走错 路 了！", py: "“duìbuqǐ, wǒmen zǒu cuò lù le!", ja: "「ごめんなさい、 私たちは 歩き間違えた 道を！" },
              { cn: "这里的 地方 都 差不多， 迷路了！”", py: "zhèlǐ de dìfang dōu chàbuduō, mílù le!", ja: "ここの 場所は すべて ほぼ同じで、 迷子になった！」" },
              { cn: "甘雨 笑着 说：", py: "Gānyǔ xiào zhe shuō:", ja: "甘雨は 笑いながら 言う：" },
              { cn: "“没关系， 别 担心，", py: "“méi guānxi, bié dānxīn,", ja: "「大丈夫、 心配しないで、" },
              { cn: "我 马上 发给 你们 一张 电子 地图，", py: "wǒ mǎshàng fā gěi nǐmen yì zhāng diànzǐ dìtú,", ja: "私は すぐ 送る あなたたちに 1枚の 電子 地図を、" },
              { cn: "它的 作用 就是 帮 你们 找 路。”", py: "tā de zuòyòng jiùshì bāng nǐmen zhǎo lù.”", ja: "その 役割は まさに 助ける あなたたちが 探す 道を。」" }
            ],
            translation: "甘雨のスマホが鳴り「もしもし、今どこですか？」と尋ねた。パイモンが鞄を背負い時計を見ながら「道に迷っちゃった！どこも同じに見えるんだ！」と焦ると、甘雨は「心配しないで、すぐ電子地図を送りますね。道を探すのに役立ちますよ」と答えた。"
          }
        ]
      },
      {
        id: 5, title: "第5章：万民堂の厨房と料理大会",
        scenes: [
          {
            id: 17, title: "#17 万民堂の厨房と新鮮な食材",
            phrases: [
              { cn: "来到 万民堂 的 厨房，", py: "lái dào Wànmíntáng de chúfáng,", ja: "やって来る 万民堂の 厨房へ、" },
              { cn: "香菱 正在 打开 冰箱，", py: "Xiānglíng zhèngzài dǎkāi bīngxiāng,", ja: "香菱は ちょうど 開けて 冷蔵庫を、" },
              { cn: "拿 新鲜 的 水果 和 蔬菜。", py: "ná xīnxiān de shuǐguǒ hé shūcài.", ja: "取る 新鮮な 果物 と 野菜を。" },
              { cn: "桌子上 摆着 红红的 苹果、", py: "zhuōzi shang bǎi zhe hóng hóng de píngguǒ,", ja: "机の 上には 並べてある 赤い リンゴ、" },
              { cn: "黄 色的 香蕉、 甜甜的 西瓜 和 葡萄。", py: "huáng sè de xiāngjiāo, tián tián de xīguā hé pútáo.", ja: "黄 色の バナナ、 甘い スイカ と ブドウが。" },
              { cn: "香菱 笑着 说：", py: "Xiānglíng xiào zhe shuō:", ja: "香菱は 笑いながら 言う：" },
              { cn: "“新鲜的 食材 最 重要，", py: "“xīnxiān de shícái zuì zhòngyào,", ja: "「新鮮な 食材が 最も 重要で、" },
              { cn: "用 它们 才能 做成 美味 菜肴！”", py: "yòng tāmen cáinéng zuò chéng měiwèi càiyáo!”", ja: "用いて それらを 初めて 作れる 美味しい ご馳走を！」" }
            ],
            translation: "万民堂の厨房で香菱が冷蔵庫から新鮮な食材を取り出していた。机にはリンゴ、黄色のバナナ、スイカ、ブドウが並ぶ。香菱は「新鮮な食材が一番大事！最高の料理ができるよ！」と笑った。"
          },
          {
            id: 18, title: "#18 調理器具と鍋の味付け",
            phrases: [
              { cn: "灶台 上 放着 几 个 大 碗，", py: "zàotái shang fàng zhe jǐ gè dà wǎn,", ja: "かまどの 上には 置いてある 幾つかの 大きな 碗と、" },
              { cn: "放着 几 双 干净的 筷子。", py: "fàng zhe jǐ shuāng gānjìng de kuàizi.", ja: "置いてある 何膳かの 清潔な 箸が。" },
              { cn: "锅里 煮着 鲜 鱼、 鸡肉 和 白 米。", py: "guō lǐ zhǔ zhe xiān yú, jīròu hé bái mǐ.", ja: "鍋の 中では 煮ている 新鮮な 魚、 鶏肉 と 白米を。" },
              { cn: "香菱 拿起 干净的 盘子，", py: "Xiānglíng ná qǐ gānjìng de pánzi,", ja: "香菱は 持ち上げた 清潔な 皿を、" },
              { cn: "把 切好的 肉片 放进 锅里。", py: "bǎ qiē hǎo de ròupiàn fàng jìn guō lǐ.", ja: "切り終えた 肉片を 入れる 鍋の 中へ。" },
              { cn: "锅巴 在 旁边 帮忙 吹火，", py: "Guōbā zài pángbiān bāngmáng chuī huǒ,", ja: "グォパーは 傍らで 手伝って 吹く 火を、" },
              { cn: "派蒙 跑去 洗 手，", py: "Pàiméng pǎo qù xǐ shǒu,", ja: "パイモンは 走って行き 洗う 手を、" },
              { cn: "整个 厨房 充满了 幸福 的 味道。", py: "zhěnggè chúfáng chōngmǎn le xìngfú de wèidào.", ja: "厨房全体が 満ちた 幸福な 匂いで。" }
            ],
            translation: "かまどには大椀や箸が並び、鍋では魚や鶏肉、白米が煮立っていた。香菱は手際よくお皿からお肉を鍋に入れた。グォパーが火吹きを手伝い、パイモンが手を洗い、厨房は幸せな匂いに包まれた。"
          },
          {
            id: 19, title: "#19 料理コンテストへの挑戦",
            phrases: [
              { cn: "下个 星期 璃月港 要 举行 料理 比赛，", py: "xià gè xīngqī Líyuè Gǎng yào jǔxíng liàolǐ bǐsài,", ja: "来 週 璃月港は 開催する 料理の 試合を、" },
              { cn: "许多 著名的 厨师 都 来 参加，", py: "xǔduō zhùmíng de chúshī dōu lái cānjiā,", ja: "多くの 有名な 料理人が 皆 やって来て 参加し、" },
              { cn: "香菱 也 报了 名。", py: "Xiānglíng yě bào le míng.", ja: "香菱 も 申し込んだ 名前を。" },
              { cn: "香菱 充满 信心 地 说：", py: "Xiānglíng chōngmǎn xìnxīn de shuō:", ja: "香菱は 満ちた 自信に 満ちて 言う：" },
              { cn: "“我 打算 做 一道 特别的 菜，", py: "“wǒ dǎsuan zuò yí dào tèbié de cài,", ja: "「私は つもりだ 作る 1品の 特別な 料理を、" },
              { cn: "它的 味道 既 甜 又 辣！", py: "tā de wèidào jì tián yòu là!", ja: "その 味は 甘くもあり また 辛い！" },
              { cn: "虽然 竞争 比较 激烈，", py: "suīrán jìngzhēng bǐjiào jīliè,", ja: "〜だけれども 競争は 比較的 激しい、" },
              { cn: "但 只要 努力 发挥 水平，", py: "dàn zhǐyào nǔlì fāhuī shuǐpíng,", ja: "しかし 〜しさえすれば 努力して 発揮する レベルを、" },
              { cn: "就 一定 能 取得 第一 名！”", py: "jiù yídìng néng qǔdé dì-yī míng!”", ja: "すぐに 必ず 〜できる 勝ち取る 第1 位を！」" }
            ],
            translation: "来週の料理コンテストに各地のシェフが集まる。香菱もエントリーした。「甘くてピリ辛な特製料理を作るよ！競争は激しいけれど、全力を出せば必ず1位になれる！」と意気込んだ。"
          },
          {
            id: 20, title: "#20 試食会とお客さんの笑顔",
            phrases: [
              { cn: "香菱 还 做了 漂亮的 水果 蛋糕。", py: "Xiānglíng hái zuò le piàoliang de shuǐguǒ dàngāo.", ja: "香菱は さらに 作った 美しい フルーツ ケーキを。" },
              { cn: "盘子里的 菜 几乎 被 派蒙 吃光了。", py: "pánzi lǐ de cài jīhū bèi Pàiméng chī guāng le.", ja: "皿の中の 料理は ほとんど パイモンによって 食べ尽くされた。" },
              { cn: "客人们 尝了 都 称赞 这道 菜 好吃，", py: "kèrénmen cháng le dōu chēngzàn zhè dào cài hǎochī,", ja: "お客様たちは 味わって すべて 称賛した この 料理が 美味しいと、" },
              { cn: "味道 完全 没有 变 坏。", py: "wèidào wánquán méiyǒu biàn huài.", ja: "味は 全く 〜ない 変わる 悪く。" },
              { cn: "派蒙 喝了 一大杯 甜甜的 果汁：", py: "Pàiméng hē le yí dà bēi tián tián de guǒzhī:", ja: "パイモンは 飲んだ 1杯の大きな 甘い 果汁ジュースを：" },
              { cn: "“大家 当然 愿意 每天 吃到 美味，", py: "“dàjiā dāngrán yuànyì měitiān chī dào měiwèi,", ja: "「皆は 当然 喜んでする 毎日 食べ至る 美味を、" },
              { cn: "多么 幸福 啊！”", py: "duōme xìngfú a!”", ja: "どんなに 幸福なことか！」" }
            ],
            translation: "香菱はフルーツケーキも作りプレゼントした。お皿の料理はパイモンがほぼ平らげ、客たちも「本当に美味しい！」と絶賛した。パイモンはジュースを飲み「毎日こんなご飯が食べられたら最高だ！」と喜んだ。"
          }
        ]
      },
      {
        id: 6, title: "第6章：死兆星号と海港の活気",
        scenes: [
          {
            id: 21, title: "#21 北斗船長と死兆星号の宴会",
            phrases: [
              { cn: "傍晚， 他们 登上 北斗 船长 的 大 船，", py: "bàngwǎn, tāmen dēng shàng Běidǒu chuánzhǎng de dà chuán,", ja: "夕方、 彼らは 登る 北斗 船長の 大きな 船に、" },
              { cn: "参加 今晚 举办的 盛大 晚会。", py: "cānjiā jīnwǎn jǔbàn de shèngdà wǎnhuì.", ja: "参加する 今晩 開催される 盛大な 夜会（晚会）に。" },
              { cn: "甲板上 摆满了 啤酒 瓶子 和 大 碗。", py: "jiǎbǎn shang bǎi mǎn le píjiǔ píngzi hé dà wǎn.", ja: "甲板の 上には 並べて満ちた ビール 瓶 と 大きな 碗が。" },
              { cn: "北斗 留着 长长 的 黑 头发，", py: "Běidǒu liú zhe cháng cháng de hēi tóufa,", ja: "北斗は 伸ばしている 長い 黒い 髪を、" },
              { cn: "长得 极 有 精神， 热情地 招呼 大家。", py: "zhǎng de jí yǒu jīngshén, rèqíng de zhāohu dàjiā.", ja: "顔立ちは 極めて 有る 気力が、 親切に 招く 皆を。" },
              { cn: "水手们 一边 唱歌 一边 跳舞，", py: "shuǐshǒumen yìbiān chànggē yìbiān tiàowǔ,", ja: "水兵たちは 〜しながら 歌い歌を 〜しながら 踊りダンスを、" },
              { cn: "晚会的 气氛 特别 热情。", py: "wǎnhuì de qìfēn tèbié rèqíng.", ja: "夜会（晚会）の 雰囲気は 格別に 熱気にあふれていた。" }
            ],
            translation: "夕方、北斗船長の大きな船に乗って今夜開催される盛大な夜会（晚会）に参加した。甲板にはビール瓶や大椀が並ぶ。長い黒髪をなびかせた北斗が快活に迎え、船員たちは歌い踊り大いに盛り上がっていた。"
          },
          {
            id: 22, title: "#22 甲板でのゲームとスポーツ",
            phrases: [
              { cn: "晚会 后 水手们 周末 踢 足球，", py: "wǎnhuì hòu shuǐshǒumen zhōumò tī zúqiú,", ja: "夜会の 後 水夫たちは 週末に 蹴る サッカーを、" },
              { cn: "在 甲板 空地上 打篮球。", py: "zài jiǎbǎn kòngdì shang dǎ lánqiú.", ja: "〜で 甲板の 空き地で 打つ バスケットボールを。" },
              { cn: "派蒙 也 飞过去 参加 游戏，", py: "Pàiméng yě fēi guòqu cānjiā yóuxì,", ja: "パイモンも 飛んで行き 参加した ゲームに、" },
              { cn: "敢 和 别人 比赛 打球。", py: "gǎn hé biérén bǐsài dǎqiú.", ja: "思い切って 〜と 他人と 競う 球技を。" },
              { cn: "虽然 她的 水平 一般， 但 派蒙 绝不 认输。", py: "suīrán tā de shuǐpíng yìbān, dàn Pàiméng jué bù rènshū.", ja: "〜だけれども 彼女の レベルは 普通だ、 しかし パイモンは 決して〜ない 負けを認める。" },
              { cn: "北斗 哈哈大笑：", py: "Běidǒu hāhā dà xiào:", ja: "北斗は 大笑いした：" },
              { cn: "“年轻的 男人 和 女人 就 应该 充满 活力，", py: "“niánqīng de nánrén hé nǚrén jiù yīnggāi chōngmǎn huólì,", ja: "「若い 男性 と 女性は まさに 〜すべきだ 満ちる 活気に、" },
              { cn: "明天 还可以 去 海里 游泳 呢！”", py: "míngtiān hái kěyǐ qù hǎilǐ yóuyǒng ne!”", ja: "明日は さらに 〜できる 行く 海の中で 水泳する よ！」" }
            ],
            translation: "宴会の後、甲板でサッカーやバスケの試合が行われた。ボール遊びはみんなの趣味で、パイモンも他の人と果敢に競い負けん気を見せた。北斗は「若い男も女も元気いっぱいに競うのが一番だ、明日は海で泳ぐのもいいぞ！」と笑った。"
          },
          {
            id: 23, title: "#23 航海の昔話と世界の広さ",
            phrases: [
              { cn: "月亮 升起来 了，", py: "yuèliang shēng qǐlai le,", ja: "月が 昇り始めた、" },
              { cn: "北斗 坐在 椅子上 讲 历史 故事。", py: "Běidǒu zuò zài yǐzi shang jiǎng lìshǐ gùshi.", ja: "北斗は 座り 椅子の 上に 語る 歴史 物語を。" },
              { cn: "她 告诉 旅行者：", py: "tā gàosù Lǚxíngzhě:", ja: "彼女は 教える 旅行者に：" },
              { cn: "“这个 世界 极 大，", py: "“zhè gè shìjiè jí dà,", ja: "「この 世界は 極めて 大きい、" },
              { cn: "有 许多 不同的 国家 和 城市。", py: "yǒu xǔduō bùtóng de guójiā hé chéngshì.", ja: "有る 多くの 異なる 国家 と 都市が。" },
              { cn: "我们的 船 从 北方 经过 大 河，", py: "wǒmen de chuán cóng běifāng jīngguò dà hé,", ja: "私たちの 船は 〜から 北方から 経て 大きな 川を、" },
              { cn: "驶向 宽阔的 大海。", py: "shǐ xiàng kuānkuò de dàhǎi.", ja: "向かって走る 広々とした 大海へ。" },
              { cn: "只要 勇敢 航行，", py: "zhǐyào yǒnggǎn hángxíng,", ja: "〜しさえすれば 勇敢に 航行する、" },
              { cn: "就 没有 到 不了 的 远方！”", py: "jiù méiyǒu dào bù liǎo de yuǎnfāng!”", ja: "すぐに ない 到達できない 遠方は！」" }
            ],
            translation: "月が昇り、北斗は航海の思い出を語り出した。「世界は広く様々な国がある。我々の船は北の川から海へと向かうが、自分を信じて進めば辿り着けない遠くの場所などない」と力強く語った。"
          },
          {
            id: 24, title: "#24 港の荷下ろしと見送り",
            phrases: [
              { cn: "第二天 死兆星号 停在 码头 旁边。", py: "dì èr tiān Sǐzhàoxīng hào tíng zài mǎtóu pángbiān.", ja: "翌日 死兆星号は 停まった 埠頭の 傍らに。" },
              { cn: "岸上 来来往往的 旅客 很多，", py: "ànshang láilái-wǎngwǎng de lǚkè hěn duō,", ja: "岸の上の 行き交う 旅客は とても 多く、" },
              { cn: "很多 人 正在 搬运 行李。", py: "hěn duō rén zhèngzài bānyùn xíngli.", ja: "多くの 人が ちょうど 運搬している 荷物を。" },
              { cn: "这个 行李箱 一共 重 二十 公斤，", py: "zhè gè xínglixiāng yígòng zhòng èrshí gōngjīn,", ja: "この スーツケースは 合計 重さ 20 キログラムで、" },
              { cn: "岸边 有人 骑 马 赶来 帮助 搬运。", py: "ànbiān yǒurén qí mǎ gǎn lái bāngzhù bānyùn.", ja: "岸辺には ある人が 乗る 馬に 駆けつけて 助ける 運搬を。" },
              { cn: "北斗 送给 他们 一张 海图 说：", py: "Běidǒu sòng gěi tāmen yì zhāng hǎitú shuō:", ja: "北斗は 贈った 彼らに 1枚の 海図を 言う：" },
              { cn: "“祝 你们 接下来的 旅途 一切 顺利！”", py: "“zhù nǐmen jiē xiàlai de lǚtú yíqiè shùnlì!”", ja: "「祈る あなたたちの これからの 旅路の すべての 順調を！」" }
            ],
            translation: "翌朝、死兆星号が接岸した。埠頭には行き交う多くの旅客がおり、20キロのスーツケースも馬に乗った助けが来て運ばれた。北斗は海図を手渡し「旅の無事を祈る、また会おう！」と見送った。"
          }
        ]
      },
      {
        id: 7, title: "第7章：望舒旅館とテイワットの旅",
        scenes: [
          {
            id: 25, title: "#25 望舒旅館の予約とチェックイン",
            phrases: [
              { cn: "离开 璃月港，", py: "líkāi Líyuègǎng,", ja: "離れて 璃月港を、" },
              { cn: "他们 坐 公共汽车 到 望舒客栈 宾馆，", py: "tāmen zuò gōnggòng qìchē dào Wàngshūkèzhàn bīnguǎn,", ja: "彼らは 乗って 路線バスに 至る 望舒客桟という ホテルへ、" },
              { cn: "这里的 旅客 很多。", py: "zhèlǐ de lǚkè hěn duō.", ja: "ここの 旅客は とても 多い。" },
              { cn: "前台 服务员 礼貌地 问：", py: "qiántái fúwùyuán lǐmào de wèn:", ja: "フロントの 係員は 礼儀正しく 尋ねる：" },
              { cn: "“请问 两位 预订 房间 了 吗？", py: "“qǐngwèn liǎng wèi yùdìng fángjiān le ma?", ja: "「お尋ねしますが 2人の お客様は 予約しましたか 部屋を？" },
              { cn: "我们 这里 提供 极 舒服 的 住宿 服务。”", py: "wǒmen zhèlǐ tígōng jí shūfu de zhùsù fúwù.”", ja: "私たち ここは 提供します 極めて 快適な 宿泊 サービスを。」" },
              { cn: "旅行者 拿出 证件 办理 手续，", py: "Lǚxíngzhě ná chū zhèngjiàn bànlǐ shǒuxù,", ja: "旅行者は 取り出す 証明書を 手続きを行う、" },
              { cn: "拿到了 房卡， 交了 押金，", py: "nádào le fángkǎ, jiāo le yājīn,", ja: "手に入れた カードキーを、 納めた 保証金を、" },
              { cn: "顺利 住进 了 三层 的 房间。", py: "shùnlì zhù jìn le sān céng de fángjiān.", ja: "順調に 泊まり入った 3階の 部屋に。" }
            ],
            translation: "望舒旅館に旅行で到着した。多くの旅客で賑わっており、フロントが「ご予約はお済みですか？快適なお部屋をご用意しております」と案内した。旅人は手続きを済ませデポジットを払い、3階の部屋に無事チェックインした。"
          },
          {
            id: 26, title: "#26 快適な客室と設備の利用",
            phrases: [
              { cn: "走进 房间， 里面 非常 干净。", py: "zǒu jìn fángjiān, lǐmiàn fēicháng gānjìng.", ja: "歩き入る 部屋に、 中は 非常に 清潔で。" },
              { cn: "空调 吹出 凉爽的 风， 让 人 舒服。", py: "kōngtiáo chuī chū liángshuǎng de fēng, ràng rén shūfu.", ja: "エアコンは 吹き出す 涼しい 風を、 させる 人に 快適だと。" },
              { cn: "洗手间 里 备好了 牙刷，", py: "xǐshǒujiān lǐ bèihǎo le yáshuā,", ja: "お手洗いの 中には 準備し終えた 歯ブラシを、" },
              { cn: "他们 刷 牙、 洗脸、 洗澡。", py: "tāmen shuā yá, xǐliǎn, xǐzǎo.", ja: "彼らは 磨く 歯を、 洗う 顔を、 入る 風呂に。" },
              { cn: "派蒙 躺在 床上 打开 电视 看 电影。", py: "Pàiméng tǎng zài chuáng shang dǎkāi diànshì kàn diànyǐng.", ja: "パイモンは 横たわり ベッドの 上に つける テレビを 見る 映画を。" },
              { cn: "晚上 关 门、 关 灯， 休息得 极好。", py: "wǎnshang guān mén, guān dēng, xiūxi de jí hǎo.", ja: "夜に 閉める ドアを、 消す 明かりを、 休養したことが 極めて 良かった。" }
            ],
            translation: "部屋は清潔でエアコンが効き快適だった。洗面所で歯を磨いてお風呂に入り、パイモンはベッドでテレビをつけ映画をしばらく楽しんだ。夜はドアを閉め明かりを消して8時間熟睡した。"
          },
          {
            id: 27, title: "#27 駅の窓口と交通機関の利用",
            phrases: [
              { cn: "第三天 来到 火车站 和 机场 附近，", py: "dì sān tiān lái dào huǒchēzhàn hé jīchǎng fùjìn,", ja: "第3の 日 やって来る 鉄道駅 と 空港の 付近へ、" },
              { cn: "很多 人 排队 买 票。", py: "hěn duō rén páiduì mǎi piào.", ja: "多くの 人が 列に並んで 買う 切符を。" },
              { cn: "这里的 交通 非常 方便。", py: "zhèlǐ de jiāotōng fēicháng fāngbiàn.", ja: "ここの 交通は 非常に 便利だ。" },
              { cn: "坐 公共汽车 离 超市 很 近。", py: "zuò gōnggòng qìchē lí chāoshì hěn jìn.", ja: "乗る 路線バスに 隔たること スーパーから とても 近い。" },
              { cn: "可以 坐 出租车， 也可以 骑 自行车。", py: "kěyǐ zuò chūzūchē, yě kěyǐ qí zìxíngchē.", ja: "〜できる 乗る タクシーに、 〜もできる 乗る 自転車に。" },
              { cn: "售票处 左边 是 入口， 右边 是 出口。", py: "shòupiàochù zuǒbian shì rùkǒu, yòubian shì chūkǒu.", ja: "切符売り場の 左側は 入口、 右側は 出口。" },
              { cn: "司机 师傅 告诉 他们：", py: "sījī shīfu gàosù tāmen:", ja: "運転手の 親方は 教える 彼らに：" },
              { cn: "“沿着 这条 街道 一直 往前 走，", py: "“yán zhe zhè tiáo jiēdào yìzhí wǎng qián zǒu,", ja: "「沿って この 通りに まっすぐ 向かって 前へ 歩けば、" },
              { cn: "最近的 地铁站 就 在 那儿。”", py: "zuì jìn de dìtiězhàn jiù zài nàr.”", ja: "最も 近い 地下鉄駅は すぐに ある あそこに。」" }
            ],
            translation: "3日目、駅や空港周辺では切符売り場に列ができていた。バスに乗ればスーパーからも近い。交通は大変便利で、スーパーや銀行、商店へ行くにもタクシーや自転車が使える。運転手は「あの場所に最寄りの地下鉄駅があるよ」と教えてくれた。"
          },
          {
            id: 28, title: "#28 天候の移り変わりと四季の風情",
            phrases: [
              { cn: "四个 季节 天气 经常 变化。", py: "sì gè jìjié tiānqì jīngcháng biànhuà.", ja: "4つの 季節の 天気は よく 変化する。" },
              { cn: "春天 温暖， 夏天 炎热，", py: "chūntiān wēnnuǎn, xiàtiān yánrè,", ja: "春は 暖かく、 夏は 暑く、" },
              { cn: "秋天 刮风， 冬天 会 下雪。", py: "qiūtiān guāfēng, dōngtiān huì xià xuě.", ja: "秋は 風が吹き、 冬は 〜だろう 降る 雪が。" },
              { cn: "今天 阴天， 太阳 被 乌云 遮住了，", py: "jīntiān yīntiān, tàiyáng bèi wūyún zhē zhù le,", ja: "今日は 曇り、 太陽は 黒雲によって 遮られた、" },
              { cn: "外面 刮起了 冷 风， 马上 要 下雨。", py: "wàimiàn guā qǐ le lěng fēng, mǎshàng yào xià yǔ.", ja: "外では 吹き始めた 冷たい 風が、 すぐに まもなく 降る 雨が。" },
              { cn: "派蒙 拿出一把 雨伞 说：", py: "Pàiméng ná chū yì bǎ yǔsǎn shuō:", ja: "パイモンは 取り出した 1本の 傘を 言う：" },
              { cn: "“幸好 带了 伞， 既 不 怕 风， 也 不 怕 雨！”", py: "“xìnghǎo dài le sǎn, jì bù pà fēng, yě bú pà yǔ!”", ja: "「幸いにも 持ってきた 傘を、 〜も 恐れず 風を、 〜も 恐れない 雨を！」" }
            ],
            translation: "テイワットの四季は移ろい、春は温暖で夏は暑く、秋は風が吹き冬は雪が降る。今日は曇り空で冷たい風が吹き雨になりそうだったが、パイモンは傘を取り出して安心した。"
          }
        ]
      },
      {
        id: 8, title: "第8章：軽策荘の田園と家族",
        scenes: [
          {
            id: 29, title: "#29 軽策荘の祖父母と家財の整理",
            phrases: [
              { cn: "他们 回 家 来到 乡村 軽策庄，", py: "tāmen huí jiā lái dào xiāngcūn Qíngcèzhuāng,", ja: "彼らは 帰る 家に やって来る 農村の 軽策荘へ、" },
              { cn: "探望 老 爷爷 和 奶奶。", py: "tànwàng lǎo yéye hé nǎinai.", ja: "見舞う 年老いた おじいちゃん と おばあちゃんを。" },
              { cn: "两位 老人 正在 打算 搬 家，", py: "liǎng wèi lǎorén zhèngzài dǎsuan bān jiā,", ja: "2人の 老人は ちょうど つもりだ 引っ越す 家を、" },
              { cn: "屋子里 摆着 旧 冰箱 和 几 把 椅子。", py: "wūzi lǐ bǎi zhe jiù bīngxiāng hé jǐ bǎ yǐzi.", ja: "部屋の 中には 並べてある 古い 冷蔵庫 と 数脚の 椅子が。" },
              { cn: "旅行者 和 派蒙 帮忙 打扫 房间，", py: "Lǚxíngzhě hé Pàiméng bāngmáng dǎsǎo fángjiān,", ja: "旅行者 と パイモンは 手伝う 掃除する 部屋を、" },
              { cn: "把 门 和 窗户 擦得 干干净净。", py: "bǎ mén hé chuānghu cā de gān-gānjìng-jìng.", ja: "ドア と 窓を 拭いた 綺麗に。" }
            ],
            translation: "軽策荘の家を訪れおじいちゃんとおばあちゃんに会った。引越しの準備中で古い家具が並んでいたため、旅人とパイモンは掃除を手伝い窓や扉を綺麗に磨いた。"
          },
          {
            id: 30, title: "#30 家族の団らんと子供たち",
            phrases: [
              { cn: "中午 叔叔、 阿姨、 哥哥 和 姐姐，", py: "zhōngwǔ shūshu, āyí, gēge hé jiějie,", ja: "昼に おじ、 おば、 兄 と 姉、" },
              { cn: "弟弟 和 妹妹 都 回来 了。", py: "dìdi hé mèimei dōu huílái le.", ja: "弟 と 妹が 皆 帰ってきた。" },
              { cn: "爸爸 和 妈妈 端出 美味 饭菜。", py: "bàba hé māma duān chū měiwèi fàncài.", ja: "お父さん と お母さんは 運んで出す 美味しい ご飯を。" },
              { cn: "丈夫 和 妻子 去年 刚 结婚，", py: "zhàngfu hé qīzi qùnián gāng jiéhūn,", ja: "夫 と 妻は 去年 ちょうど 結婚した、" },
              { cn: "带着 八 岁 的 儿子 和 娘 聊天。", py: "dài zhe bā suì de érzi hé nǚ'ér liáotiān.", ja: "連れて 8 歳の 息子 と 娘を おしゃべりする。" },
              { cn: "父母 都 很 爱 自己的 孩子，", py: "fùmǔ dōu hěn ài zìjǐ de háizi,", ja: "両親は 皆 とても 愛する 自分の 子供を、" },
              { cn: "全 家人 感到 极其 幸福。", py: "quán jiārén gǎndào jíqí xìngfú.", ja: "全 家族は 感じる 極めて 幸福だと。" }
            ],
            translation: "昼時、親族が集まり両親がご馳走を並べた。去年結婚したばかりの夫婦も8歳の息子と可愛い娘を連れて談笑している。隣人も子供を連れて訪ねてきて、一家団らんの愛情と温もりに包まれた。"
          },
          {
            id: 31, title: "#31 田園の動物と花園の風景",
            phrases: [
              { cn: "房子 后面 像 个 美丽的 公园，", py: "fángzi hòumiàn xiàng gè měilì de gōngyuán,", ja: "家の 後ろは 似ている 1つの 美しい 公園に、" },
              { cn: "画家 在 这里 画了 美丽的 画。", py: "huàjiā zài zhèlǐ huà le měilì de huà.", ja: "画家は ここで 描いた 美しい 絵を。" },
              { cn: "花园里 盛开着 各种 颜色的 花 和 草，", py: "huāyuán lǐ shèngkāi zhe gè zhǒng yánsè de huā hé cǎo,", ja: "花園の 中では 咲き誇っている 各種の 色の 花 と 草が、" },
              { cn: "这里的 环境 极 舒服。", py: "zhèlǐ de huánjìng jí shūfu.", ja: "ここの 環境は 極めて 快適だ。" },
              { cn: "树上的 鸟 在 快乐地 唱歌，", py: "shù shang de niǎo zài kuàilè de chànggē,", ja: "木の 上の 鳥は 楽しく 歌い、" },
              { cn: "草地 旁边 有 可爱的 狗 和 猫。", py: "cǎodì pángbiān yǒu kě'ài de gǒu hé māo.", ja: "草地の 傍らには 有る 可愛い 犬 と 猫が。" },
              { cn: "竹林 深处 生活着 大熊猫，", py: "zhúlín shēnchù shēnghuó zhe dàxióngmāo,", ja: "竹林の 奥深くには 暮らしている パンダが、" },
              { cn: "它们 慢悠悠地 走着， 特别 可爱。", py: "tāmen mànyōuyōu de zǒu zhe, tèbié kě'ài.", ja: "それらは ゆったりと 歩いており、 格別に 可愛い。" }
            ],
            translation: "家の裏は公園のように花と緑があふれ、画家が美しい絵を描いていた。木の上で鳥が歌い、草むらには犬と猫がいる。竹林の奥にはパンダがのんびりと暮らしており、とても愛らしかった。"
          }
        ]
      },
      {
        id: 9, title: "第9章：層岩巨淵の秘境調査",
        scenes: [
          {
            id: 32, title: "#32 層岩巨淵の深部と安全確認",
            phrases: [
              { cn: "第二天 跟 钟离 先生 来到 矿山，", py: "dì èr tiān gēn Zhōnglí xiānsheng lái dào kuàngshān,", ja: "翌日 ついて 鍾離 先生に やって来た 鉱山へ、" },
              { cn: "这里的 地面 比 璃月港 矮 得 多，", py: "zhèlǐ de dìmiàn bǐ Líyuè Gǎng ǎi de duō,", ja: "ここの 地面は 比べて 璃月港より 低いこと ずっとだ、" },
              { cn: "光线 很 差， 出现 了 奇怪的 符号。", py: "guāngxiàn hěn chà, chūxiàn le qíguài de fúhào.", ja: "光線は とても 劣り、 現れた 奇妙な 符号が。" },
              { cn: "根据 钟离 的 提醒， 大家 必须 小心。", py: "gēnjù Zhōnglí de tíxǐng, dàjiā bìxū xiǎoxīn.", ja: "〜に基づき 鍾離の 注意に、 皆は 必ず 用心し。" },
              { cn: "遇到 危险 千万 不能 害怕，", py: "yùdào wēixiǎn qiānwàn bù néng hàipà,", ja: "出くわしても 危険に 決して 恐れるな、" },
              { cn: "要 共同 想 办法 解决。", py: "yào gòngtóng xiǎng bànfǎ jiějué.", ja: "〜すべきだ 共同で 考える 方法を 解決する。" }
            ],
            translation: "翌日鍾離先生と層岩巨淵に足を踏み入れた。標高は低く薄暗い洞窟に奇妙な符号が現れていたが、鍾離の助言に従い恐れず慎重に進んだ。"
          },
          {
            id: 33, title: "#33 岩壁の鉱石と方位の調査",
            phrases: [
              { cn: "拿出 地图 仔细 检查，", py: "ná chū dìtú zǐxì jiǎnchá,", ja: "取り出す 地図を 入念に 点検する、" },
              { cn: "东、 西、 南、 北 都 有 通道。", py: "dōng, xī, nán, běi dōu yǒu tōngdào.", ja: "東、 西、 南、 北 すべて 有る 通路が。" },
              { cn: "前面的 通道 突然 断 了，", py: "qiánmiàn de tōngdào tūrán duàn le,", ja: "前の 通路が 突然 途切れた（断），" },
              { cn: "走 这条 还是 那条 呢？", py: "zǒu zhè tiáo háishi nà tiáo ne?", ja: "歩くか こちらを それとも あちらを か？" },
              { cn: "旅行者 在 石壁 上 看见 相同 符号，", py: "Lǚxíngzhě zài shíbì shang kànjiàn xiāngtóng fúhào,", ja: "旅行者は 石壁の 上に 見つける 同じ 符号を、" },
              { cn: "赶快 用 照相机 拍下 一 张 照片。", py: "gǎnkuài yòng zhàoxiàngjī pāi xià yì zhāng zhàopiàn.", ja: "急いで 使う カメラを 撮る 1枚の 写真を。" },
              { cn: "终于 明白了 几千 年 历史 的 秘密，", py: "zhōngyú míngbai le jǐ qiān nián lìshǐ de mìmì,", ja: "ついに 理解した 数千年の 歴史の 秘密を、" },
              { cn: "顺利 完成 了 调查 任务。", py: "shùnlì wánchéng le diàochá rènwu.", ja: "順調に 完成した 調査の 任務を。" }
            ],
            translation: "地図を調べると東西南北に通路があり、前方の道は突然途切れていた。旅人は耳を澄ませ中央の岩壁に同じ符号を見つけるとカメラで写真を撮った。皆の努力で数千年の歴史の謎が解き明かされ調査任務を完了した。"
          }
        ]
      },
      {
        id: 10, title: "第10章：海灯節の祝祭と未来の誓い",
        scenes: [
          {
            id: 34, title: "#34 海灯節の舞台と華やかな公演",
            phrases: [
              { cn: "这个 星期 迎来了 盛大的 海灯节，", py: "zhège xīngqī yínglái le shèngdà de Hǎidēngjié,", ja: "今週 迎えた 盛大な 海灯節を、" },
              { cn: "整个 城市 都 沉浸在 欢乐 中。", py: "zhěnggè chéngshì dōu chénjìn zài huānlè zhōng.", ja: "街全体が すべて 浸っている 歓喜の 中に。" },
              { cn: "八 号 舞台 上 举行 节目 表演。", py: "bā hào wǔtái shang jǔxíng jiémù biǎoyǎn.", ja: "8 番 舞台の 上で 開催している 出し物の 上演を。" },
              { cn: "人们 换上 衬衫、 裙子、 裤子 和 新 鞋。", py: "rénmen huàn shang chènshān, qúnzi, kùzi hé xīn xié.", ja: "人々は 着替えた ワイシャツ、 スカート、 ズボン と 新しい 靴を。" },
              { cn: "云堇 戴着 漂亮 帽子 在 舞台 唱歌，", py: "Yúnjǐn dài zhe piàoliang màozi zài wǔtái chànggē,", ja: "雲菫は かぶり 綺麗な 帽子を 舞台で 歌を歌う、" },
              { cn: "歌声 极 好听。", py: "gēshēng jí hǎotīng.", ja: "歌声は 極めて 心地よく。" },
              { cn: "音乐 让 观众 都 热情地 鼓掌 称赞。", py: "yīnyuè ràng guānzhòng dōu rèqíng de gǔzhǎng chēngzàn.", ja: "音楽は させる 観客に 熱心に 拍手して 称賛するよう。" }
            ],
            translation: "璃月港は海灯節を迎え街中がお祭り騒ぎだった。8号ステージでは素晴らしい公演が行われ、着飾った人々で賑わう。帽子をかぶった雲菫が舞台に立ち美声を響かせ、観客は盛大な拍手で称賛した。"
          },
          {
            id: 35, title: "#35 霄灯の打ち上げと未来への祝福",
            phrases: [
              { cn: "今天 刚好 是 旅行者 的 生日，", py: "jīntiān gānghǎo shì Lǚxíngzhě de shēngrì,", ja: "今日は ちょうど である 旅行者の 誕生日、" },
              { cn: "朋友们 送给 他 一 件 珍贵 礼物。", py: "péngyoumen sòng gěi tā yí jiàn zhēnguì lǐwù.", ja: "友人たちは 贈った 彼に 1着の 貴重な 贈り物を。" },
              { cn: "夜晚 成千上万 盏 霄灯 飞向 夜空，", py: "yèwǎn chéngqiān-shàngwàn zhǎn xiāodēng fēi xiàng yèkōng,", ja: "夜に 数万基の 霄灯が 飛んで向かう 夜空へ、" },
              { cn: "像 星星 一样 照亮 了 天地。", py: "xiàng xīngxing yíyàng zhàoliàng le tiāndì.", ja: "まるで 星の ように 照らした 天地を。" },
              { cn: "白术 表示：", py: "Báizhú biǎoshì:", ja: "白朮は 表明する：" },
              { cn: "“祝 大家 节日 快乐， 健康 幸福！”", py: "“zhù dàjiā jiérì kuàilè, jiànkāng xìngfú!”", ja: "「祈る 皆の 祝日の 楽しさを、 健康と 幸福を！」" },
              { cn: "旅行者 坚信，", py: "Lǚxíngzhě jiānxìn,", ja: "旅行者は 固く信じる、" },
              { cn: "希望 未来的 生活 越来越 精彩，", py: "xīwàng wèilái de shēnghuó yuèláiyuè jīngcǎi,", ja: "希望する 未来の 生活が ますます 素晴らしくなり、" },
              { cn: "明天 会 更 美好！", py: "míngtiān huì gèng měihǎo!", ja: "明日は さらに 美しくなることを！" }
            ],
            translation: "今日は旅人の誕生日でもあり、仲間から贈り物が届いた。夜には無数の霄灯が夜空を照らし、白朮が「祝日おめでとう、健康と幸福を！」と祝辞を述べた。旅人は未来の暮らしがますます輝かしいものになると確信した。"
          }
        ]
      },
      {
        id: 11, title: "第11章：現代生活・家電・住まいの設備",
        scenes: [
          {
            id: 36, title: "#36 現代家電と通信・ネットの日常",
            phrases: [
              { cn: "白经理 的 堂妹 和 同屋 从 东北 到来。", py: "Bái jīnglǐ de tángmèi hé tóngwū cóng Dōngběi dàolái.", ja: "白マネージャーの 従妹 と ルームメイトは 東北から 到来した。" },
              { cn: "她们 一边 喝 饮料，", py: "tāmen yìbiān hē yǐnliào,", ja: "彼女たちは 飲みながら 飲み物を、" },
              { cn: "一边 看 电视机 里的 电视剧。", py: "yìbiān kàn diànshìjī lǐ de diànshìjù.", ja: "見ながら テレビの 中の ドラマを。" },
              { cn: "她们 会 玩 电子游戏，", py: "tāmen huì wán diànzǐ yóuxì,", ja: "彼女たちは できる 遊ぶ テレビゲームを、" },
              { cn: "而且 会 用 微波炉 和 洗衣机。", py: "érqiě huì yòng wēibōlú hé xǐyījī.", ja: "その上 できる 使う 電子レンジ と 洗濯機を。" },
              { cn: "平时 她们 还 努力 学习 外语。", py: "píngshí tāmen hái nǔlì xuéxí wàiyǔ.", ja: "普段 彼女たちは さらに 努力して 学ぶ 外国語を。" },
              { cn: "你 看 日历， 已经 是 十二月 了。", py: "nǐ kàn rìlì, yǐjīng shì shí'èryuè le.", ja: "あなたが見る カレンダーを、 すでに 12月だ。" },
              { cn: "她 用 笔记本 电脑 发 电子邮件，", py: "tā yòng bǐjìběn diànnǎo fā diànzǐ yóujiàn,", ja: "彼女は 使う ノートPCを 送る 電子メールを、" },
              { cn: "在 网上 找 网友 聊天。", py: "zài wǎngshang zhǎo wǎngyǒu liáotiān.", ja: "ネット上で 探す ネット仲間を おしゃべりする。" },
              { cn: "电话机 在 卧室 里 响 了 起来，", py: "diànhuàjī zài wòshì lǐ xiǎng le qǐlai,", ja: "電話機が 寝室の 中で 鳴り 始めた、" },
              { cn: "现代 生活 多么 方便 啊！", py: "xiàndài shēnghuó duōme fāngbiàn a!", ja: "現代の 生活は どんなに 便利か！" }
            ],
            translation: "白マネージャーの従妹とルームメイトが東北からやって来た。彼女たちは飲み物を飲みながらテレビドラマを見ていた。ゲームができるだけでなく、電子レンジや洗濯機も使いこなせる。普段は外国語も学んでおり、カレンダーを見ればもう12月だ。彼女はよくノートPCでメールを送り、ネット友達とチャットする。寝室で電話が鳴り響いた。現代の生活は実に便利だ！"
          },
          {
            id: 37, title: "#37 客室の設備と音響機器",
            phrases: [
              { cn: "这个 客厅 很大，", py: "zhè gè kètīng hěn dà,", ja: "この 居間は とても大きく、" },
              { cn: "沙发 和 桌子 摆在 房间 中间。", py: "shāfā hé zhuōzi bǎi zài fángjiān zhōngjiān.", ja: "ソファ と 机を 並べる 部屋の 中央に。" },
              { cn: "这里的 卫生间 干净， 条件 好极了。", py: "zhèlǐ de wèishēngjiān gānjìng, tiáojiàn hǎojíle.", ja: "ここの トイレは 清潔で、 条件は 素晴らしい。" },
              { cn: "这个 大 房间 宽敞，", py: "zhè gè dà fángjiān kuānchǎng,", ja: "この 大きな 部屋は 広々としており、" },
              { cn: "完全 住得下 所有人， 一点儿 也不 挤。", py: "wánquán zhùdexià suǒyǒu rén, yìdiǎnr yě bù jǐ.", ja: "完全に 泊まりきれる 全員が、 少しも 窮屈でない。" },
              { cn: "桌子上 放着 一台 旧 收音机，", py: "zhuōzi shang fàng zhe yì tái jiù shōuyīnjī,", ja: "机の 上には 置いてある 1台の 古い ラジオと、" },
              { cn: "放着 几盒 磁带 和 录像带。", py: "fàng zhe jǐ hé cídài hé lùxiàngdài.", ja: "置いてある 数箱の カセットテープ と ビデオテープが。" },
              { cn: "他 拿起 吸尘器， 打扫 地上 的 灰尘。", py: "tā ná qǐ xīchénqì, dǎsǎo dìshang de huīchén.", ja: "彼は 持ち上げた 掃除機を、 掃除する 地面の 上の 埃を。" }
            ],
            translation: "このリビングはとても広く、ソファと机が部屋の中央に並んでいる。トイレも清潔で設備は申し分ない。この大部屋は広々としていて全員泊まりきれる。机の上には古いラジオとカセットテープ、ビデオテープがある。彼は掃除機を手に取り、床の埃を丁寧に掃除した。"
          }
        ]
      },
      {
        id: 12, title: "第12章：都市の店舗・通信・手続き",
        scenes: [
          {
            id: 38, title: "#38 店舗での日用品の買い出し",
            phrases: [
              { cn: "我 先 去 箱包店， 再 去 水果店。", py: "wǒ xiān qù xiāngbāodiàn, zài qù shuǐguǒdiàn.", ja: "私は まず 行く カバン屋へ、 次に 行く 果物屋へ。" },
              { cn: "随后 去 蛋糕店 和 照相馆。", py: "suíhòu qù dàngāodiàn hé zhàoxiàngguǎn.", ja: "その後 行く ケーキ屋 と 写真館へ。" },
              { cn: "我 买了 肥皂、 牙刷 和 牙膏，", py: "wǒ mǎi le féizào, yáshuā hé yágāo,", ja: "私は 買った 石鹸、 歯ブラシ と 歯磨き粉を、" },
              { cn: "买了 菜刀、 小刀 和 玻璃 瓶子。", py: "mǎi le càidāo, xiǎodāo hé bōli píngzi.", ja: "買った 包丁、 ナイフ と ガラスの 瓶を。" },
              { cn: "商店 里 除了 刷 信用卡，", py: "shāngdiàn lǐ chúle shuā xìnyòngkǎ,", ja: "店の 中では 切る クレジットカードを 以外、" },
              { cn: "也可以 用 现金。", py: "yě kěyǐ yòng xiànjīn.", ja: "〜もできる 使う 現金を。" },
              { cn: "买 一卷 卫生纸 和 一瓶 香油。", py: "mǎi yì juǎn wèishēngzhǐ hé yì píng xiāngyóu.", ja: "買う 1巻の トイレットペーパー と 1瓶の ごま油を。" },
              { cn: "整理好 行李 后， 我们 把 照片 放进 相册。", py: "zhěnglǐ hǎo xíngli hòu, wǒmen bǎ zhàopiàn fàng jìn xiàngcè.", ja: "整理し終えた 荷物の 後、 私たちは 写真を 入れる アルバムの中へ。" }
            ],
            translation: "私はまず鞄屋へ行き、次に果物屋、ケーキ屋、写真館へと回った。石鹸、歯ブラシ、歯磨き粉、包丁、ナイフ、瓶を買った。店ではクレジットカードのほか現金も使える。ついでにトイレットペーパーとごま油も買ってカバンに入れた。荷物を整理して写真を撮りアルバムに収めた。"
          },
          {
            id: 39, title: "#39 通信・カード手続きと街の様子",
            phrases: [
              { cn: "年轻人 走进了 网吧 查 资料。", py: "niánqīngrén zǒu jìn le wǎngbā chá zīliào.", ja: "若者は 歩き入った ネットカフェに 調べる 資料を。" },
              { cn: "他 去 中国银行 办卡，", py: "tā qù Zhōngguó Yínháng bàn kǎ,", ja: "彼は 行く 中国銀行へ カードを作る（办卡）、" },
              { cn: "营业员 礼貌地 为 他 办理 手续。", py: "yíngyèyuán lǐmào de wèi tā bànlǐ shǒuxù.", ja: "係員は 礼儀正しく 彼のために 手続きを行う。" },
              { cn: "外面 车子 多， 司机 把 车 开走 了。", py: "wàimiàn chēzi duō, sījī bǎ chē kāizǒu le.", ja: "外は 車が多く、 運転手は 車を 走らせて立ち去った。" },
              { cn: "小伙子 在 办公楼 楼道 里 抬头，", py: "xiǎohuǒzi zài bàngōnglóu lóudào lǐ tái tóu,", ja: "若者は オフィスビルの 廊下の 中で 持ち上げた 頭を、" },
              { cn: "发现 光 变 了。", py: "fāxiàn guāng biàn le.", ja: "気づいた 光が 変わったと。" },
              { cn: "在 地下 停车场 门 开 了，", py: "zài dìxià tíngchēchǎng mén kāi le,", ja: "地下の 駐車場で ドアが 開いた、" },
              { cn: "大家 面对面 坐下 开会。", py: "dàjiā miàn duì miàn zuò xia kāihuì.", ja: "皆は 顔を合わせ 座って 会議を開く。" }
            ],
            translation: "若者がネットカフェに入りネットで資料を調べようとした。彼は中国銀行へ行ってカードを作り、行員が丁寧に対応した。外は車が多く、運転手が車を走らせて行った。青年が廊下で顔を上げると光が変わっていた。地下の扉が開き、顔を突き合わせて会議を始めた。"
          }
        ]
      },
      {
        id: 13, title: "第13章：中国各地の地理と名所巡り",
        scenes: [
          {
            id: 40, title: "#40 各省・各市と万里の長城・黄河",
            phrases: [
              { cn: "前年 旅客 坐车 参观 各个 省 和 市，", py: "qiánnián lǚkè zuò chē cānguān gè gè shěng hé shì,", ja: "一昨年 旅客は 乗る 車に 見学する それぞれの 省 と 市を、" },
              { cn: "去过 山西、 广州 和 重庆。", py: "qù guo Shānxī, Guǎngzhōu hé Chóngqìng.", ja: "行ったことがある 山西、 広州 と 重慶へ。" },
              { cn: "后来 去了 天津、 河南、 南京，", py: "hòulái qù le Tiānjīn, Hénán, Nánjīng,", ja: "その後 行った 天津、 河南、 南京、" },
              { cn: "还 去了 成都 和 西安。", py: "hái qù le Chéngdū hé Xī'ān.", ja: "さらに 行った 成都 と 西安へ。" },
              { cn: "那 座 雄伟的 长城 又 高 又 大，", py: "nà zuò xióngwěi de Chángchéng yòu gāo yòu dà,", ja: "あの 雄大な 万里の長城は 高くもあり 大きくもある、" },
              { cn: "站在 上面 可以 看见 远方。", py: "zhàn zài shàngmiàn kěyǐ kànjiàn yuǎnfāng.", ja: "立つ その上に 目にする 遠方を。" },
              { cn: "过了 黄河 就 到 西南大学。", py: "guò le Huánghé jiù dào Xīnán Dàxué.", ja: "渡れば 黄河を すぐ 着く 西南大学に。" },
              { cn: "他 在 西安 住了 1001 号 房间，", py: "tā zài Xī'ān zhù le yāo líng líng yāo hào fángjiān,", ja: "彼は 西安で 泊まった 1001 号の 部屋に、" },
              { cn: "这里的 名胜 极多。", py: "zhèlǐ de míngshèng jí duō.", ja: "ここの 名所は 極めて多い。" }
            ],
            translation: "一昨年に多くの地方からの旅客が各省や各市を訪れ、山西や広州、重慶を巡った。その後さらに天津、河南、南京、成都、西安にも行った。見よ、あの万里の長城は高く雄大で遠くまで見渡せる。黄河を越えればすぐ着く、西南大学もあの辺りにある。彼は西安で1001号室に泊まった。"
          },
          {
            id: 41, title: "#41 首都北京の名所と道案内",
            phrases: [
              { cn: "我 往 天坛 和 天安门 走，", py: "wǒ wǎng Tiāntán hé Tiān'ānmén zǒu,", ja: "私は 向かって 天壇 と 天安門へ 歩き、" },
              { cn: "路上 看见 许多 游客。", py: "lùshang kànjiàn xǔduō yóukè.", ja: "道の上で 目にする 多くの 観光客を。" },
              { cn: "我 问 公安派出所 的 警察：", py: "wǒ wèn gōng'ān pàichūsuǒ de jǐngchá:", ja: "私は 尋ねる 公安派出所の 警察官に：" },
              { cn: "“请问 天安门 怎么走？”", py: "“qǐngwèn Tiān'ānmén zěnmezǒu?”", ja: "「お尋ねしますが 天安門へは どう行きますか？」" },
              { cn: "警察 热情地 指路。", py: "jǐngchá rèqíng de zhǐlù.", ja: "警察官は 親切に 道を教える。" },
              { cn: "走 过 街角 听见 广场 上的 音乐。", py: "zǒu guò jiējiǎo tīngjiàn guǎngchǎng shang de yīnyuè.", ja: "歩き 過ぎる 街角を 聞こえる 広場の 上の 音楽が。" },
              { cn: "最后 他们 去了 北京西站，", py: "zuìhòu tāmen qù le Běijīngxīzhàn,", ja: "最後に 彼らは 行った 北京西駅へ、" },
              { cn: "祝 旅客们 一路平安！", py: "zhù lǚkèmen yílùpíng'ān!", ja: "祈る 旅客たちの 道中の無事を！" },
              { cn: "姑妈 打算 考 北京大学，", py: "gūmā dǎsuan kǎo Běijīng Dàxué,", ja: "叔母は つもりだ 受験する 北京大学を、" },
              { cn: "她 正在 努力 复习 功课。", py: "tā zhèngzài nǔlì fùxí gōngkè.", ja: "彼女は ちょうど 努力して 復習している 学業を。" }
            ],
            translation: "私は天壇と天安門へ向かって歩き、道で多くの観光客を見かけた。交番で「天安門へはどう行けばいいですか？」と尋ねると親切に教えてくれ、角を曲がると広場の音楽が聞こえてきた。最後は北京西駅へ行き旅の無事を祈った。叔母は北京大学を受験する予定で熱心に勉強している。"
          }
        ]
      },
      {
        id: 14, title: "第14章：学校・学習・文化行事",
        scenes: [
          {
            id: 42, title: "#42 文化祭・行事と名著の読書",
            phrases: [
              { cn: "春节 前后 运动会 在 体育馆 举办，", py: "Chūnjié qiánhòu yùndònghuì zài tǐyùguǎn jǔbàn,", ja: "春節の 前後の 運動会は 体育館で 開催され、" },
              { cn: "运动员们 表现 极佳。", py: "yùndòngyuán men biǎoxiàn jíjiā.", ja: "選手たちは 成果が 極めて良い。" },
              { cn: "幼儿 和 儿童 在 游乐园 玩。", py: "yòu'ér hé értóng zài yóulèyuán wán.", ja: "幼児 と 児童は 遊園地で 遊ぶ。" },
              { cn: "每 名 学生 穿着 校服 去 博物馆，", py: "měi míng xuésheng chuān zhe xiàofú qù bówùguǎn,", ja: "各 生徒は 着て 制服を 行く 博物館へ、" },
              { cn: "参加 世界文化节。", py: "cānjiā Shìjiè Wénhuà Jié.", ja: "参加する 世界文化祭に。" },
              { cn: "认真 读 《上下五千年》、", py: "rènzhēn dú 《Shàngxiàwǔqiānnián》,", ja: "真面目に 読む 『上下五千年』、" },
              { cn: "《向左走向右走》 和 《十五的月亮》。", py: "《Xiàngzuǒzǒuxiàngyòuzǒu》 hé 《Shíwǔ de yuèliang》.", ja: "『向左走向右走』 と 『十五の月』を。" },
              { cn: "大家 用 电子词典 学习 中文，", py: "dàjiā yòng diànzǐ cídiǎn xuéxí Zhōngwén,", ja: "皆は 用いて 電子辞書を 学ぶ 中国語を、" },
              { cn: "积极 准备 去 留学。", py: "jījí zhǔnbèi qù liúxué.", ja: "積極的に 準備する 行く 留学に。" }
            ],
            translation: "春節前後の運動会は体育館やプールで行われ選手たちが活躍した。大人は習い事、子どもたちは広場や遊園地で遊ぶ。制服を着た生徒たちは博物館や歌劇場で文化祭に参加し、名著を読んで辞書で中国語を学び、留学の準備を進めている。"
          },
          {
            id: 43, title: "#43 映画館・図書館と辞書引き",
            phrases: [
              { cn: "伯父、 伯母 和 小丽，", py: "bófù, bómǔ hé Xiǎolì,", ja: "伯父さん、 伯母さん と 小麗、" },
              { cn: "我们 去 电影院 看 电影， 别 错过！", py: "wǒmen qù diànyǐngyuàn kàn diànyǐng, bié cuòguò!", ja: "私たちは 行く 映画館へ 見る 映画を、 見逃すな！" },
              { cn: "请 去 国家图书馆 借 书。", py: "qǐng qù Guójiā Túshūguǎn jiè shū.", ja: "どうぞ 行きなさい 国家図書館へ 借りる 本を。" },
              { cn: "那个 小孩 走到了 楼梯 那儿，", py: "nà gè xiǎohái zǒu dào le lóutī nàr,", ja: "あの 子供は 歩き至った 階段の あそこへ、" },
              { cn: "该 去 邮局 寄 信 了。", py: "gāi qù yóujú jì xìn le.", ja: "〜すべきだ 行く 郵便局へ 出す 手紙を もう。" },
              { cn: "《汉语大字典》 查 汉字 极 方便，", py: "《Hànyǔ Dà Zìdiǎn》 chá Hànzì jí fāngbiàn,", ja: "『漢語大字典』は 引く 漢字を 極めて 便利で、" },
              { cn: "大家 越 看 越 喜欢。", py: "dàjiā yuè kàn yuè xǐhuan.", ja: "皆は 見れば 見るほど ますます 好きになる。" },
              { cn: "查 字典 时 先 买 书，", py: "chá zìdiǎn shí xiān mǎi shū,", ja: "引く 辞書を 時に まず 買う 本を、" },
              { cn: "花 五毛 钱 提着 东西 走回家。", py: "huā wǔ máo qián tízhe dōngxi zǒu huí jiā.", ja: "費やす 5毛の お金を 提げて 荷物を 歩いて帰る 家へ。" },
              { cn: "我 以前 听不懂 厘米 和 公里，", py: "wǒ yǐqián tīngbudǒng lǐmǐ hé gōnglǐ,", ja: "私は 以前 理解できなかった センチ と キロを、" },
              { cn: "现在 拿着 书 慢慢 走下去。", py: "xiànzài ná zhe shū mànmàn zǒu xiàqu.", ja: "今は 持って 本を ゆっくり 歩き降りていく。" }
            ],
            translation: "伯父さん伯母さん小麗、映画館へ行くよ見逃さないで！早く来るか国立図書館へ本を借りに行ってね。あの子は階段へ行き郵便局へ行く時間だ。『漢語大字典』は漢字を調べるのに便利で見れば見るほど気に入る。辞書を引くには本を買い、5毛払って荷物を提げて歩いて帰った。センチとキロの違いを考えながら階段を下りた。"
          }
        ]
      },
      {
        id: 15, title: "第15章：親族・伝統祝祭・日常の情景",
        scenes: [
          {
            id: 44, title: "#44 中秋節と伝統の行事",
            phrases: [
              { cn: "农历 八月 十五 是 中秋节，", py: "nónglì bā yuè shíwǔ shì Zhōngqiūjié,", ja: "旧暦の 8月 15日は である 中秋節、" },
              { cn: "很多 人 在 院子里 看 月亮。", py: "hěn duō rén zài yuànzi lǐ kàn yuèliang.", ja: "多くの 人が 庭の 中で 見る 月を。" },
              { cn: "放学 以后 不是 你 就是 他，", py: "fàngxué yǐhòu bú shì nǐ jiù shì tā,", ja: "放課後になった 後 あなたでなければ 彼だ、" },
              { cn: "在 校门口 认真 读 校规。", py: "zài xiàoménkǒu rènzhēn dú xiàoguī.", ja: "校門で 真面目に 読む 校則を。" },
              { cn: "对 我 来说 最 爱吃 甜 月饼。", py: "duì wǒ lái shuō zuì ài chī tián yuèbǐng.", ja: "私にとって 最も 好んで食べる 甘い 月餅を。" },
              { cn: "星期天 他们 去 北边 把 灯 挂上，", py: "xīngqītiān tāmen qù běibiān bǎ dēng guà shàng,", ja: "日曜日に 彼らは 行く 北側へ 明かりを 掛けて上げ、" },
              { cn: "慢慢 走过 楼顶。", py: "mànmàn zǒuguò lóudǐng.", ja: "ゆっくり 歩いて通る 屋上を。" },
              { cn: "冬至 那天 非常 冷，", py: "Dōngzhì nà tiān fēicháng lěng,", ja: "冬至の その日は 非常に 寒く、" },
              { cn: "家人 聚在 一起 互相 问好。", py: "jiārén jù zài yìqǐ hùxiāng wènhǎo.", ja: "家族は 集まり 一緒に 互いに 挨拶する。" }
            ],
            translation: "旧暦8月15日は中秋節で、庭で月を眺める人が多い。放課後、校門で校則を熱心に読んでいるのはあなたか彼だ。私にとって甘い月餅は大好物だ。日曜に北へ行き明かりを吊るして屋上を歩いた。冬至には寒さの中、家族が集まり挨拶を交わして祝日を祝った。"
          },
          {
            id: 45, title: "#45 日常の団らんと親族たち",
            phrases: [
              { cn: "弟弟 看 《月亮船》，", py: "dìdi kàn 《Yuèliangchuán》,", ja: "弟は 見る 『月亮船』を、" },
              { cn: "侄子 穿 皮鞋 去 公安局 办事。", py: "zhízi chuān píxié qù gōng'ānjú bàn shì.", ja: "甥は 履き 革靴を 行く 公安局へ 手続きする 用事を。" },
              { cn: "侄女 吃 早饭 喝 花茶，", py: "zhínǚ chī zǎofàn hē huāchá,", ja: "姪は 食べる 朝食を 飲む 花茶を、" },
              { cn: "认真 过节 努力 认字。", py: "rènzhēn guò jié nǔlì rèn zì.", ja: "真面目に 祝う 節句を 努力して 覚える 文字を。" },
              { cn: "老爷 带着 孩子 去 动物园 看 老虎。", py: "lǎoye dài zhe háizi qù dòngwùyuán kàn lǎohǔ.", ja: "旦那様は 連れて 子供を 行く 動物園へ 見る トラを。" },
              { cn: "姥姥 准备 去 办 护照，", py: "lǎolao zhǔnbèi qù bàn hùzhào,", ja: "祖母は 準備する 行く 手続きする パスポートを、" },
              { cn: "去 文化馆 和 幼儿园 看看。", py: "qù wénhuàguǎn hé yòu'éryuán kànkan.", ja: "行く 文化館 と 幼稚園へ 見てみる。" },
              { cn: "刘阿姨 个子 高，", py: "Liú āyí gèzi gāo,", ja: "劉おばさんは 背が 高い、" },
              { cn: "舅舅 在 认真 看 名单。", py: "jiùjiu zài rènzhēn kàn míngdān.", ja: "叔父は 真面目に 見る 名簿を。" }
            ],
            translation: "弟は『月亮船』を読み、甥は革靴を履いて公安局へ用事に出かけた。姪は朝食を食べ花茶を飲み、節句を祝って文字を学んでいる。旦那様は東北出身で子どもを連れて動物園へトラを見に行った。祖母はパスポートの手続きに行き文化館や幼稚園に立ち寄った。背の高い劉おばさんが声をかけ、叔父は名簿に目を通した。"
          },
          {
            id: 46, title: "#46 衣服の買い物と試着",
            phrases: [
              { cn: "商店 里 摆着 毛衣 和 牛仔裤。", py: "shāngdiàn lǐ bǎi zhe máoyī hé niúzǎikù.", ja: "店の 中には 並べてある セーター と ジーンズが。" },
              { cn: "那个 小伙子 礼貌地 问：", py: "nà gè xiǎohuǒzi lǐmào de wèn:", ja: "あの 若者は 礼儀正しく 尋ねる：" },
              { cn: "“可以 试穿 这 件 衣服 吗？”", py: "“kěyǐ shìchuān zhè jiàn yīfu ma?”", ja: "「〜できる 試着する この 服を か？」" },
              { cn: "服务员 让 他 进 试衣间 试一试。", py: "fúwùyuán ràng tā jìn shìyījiān shì yí shì.", ja: "店員は させる 彼を 入る 試着室に 試してみる。" },
              { cn: "他 穿上 以后 照 镜子，", py: "tā chuān shang yǐhòu zhào jìngzi,", ja: "彼は 履いた 後 映す 鏡に、" },
              { cn: "感觉 这 条 裤子 特别 合身。", py: "gǎnjué zhè tiáo kùzi tèbié héshēn.", ja: "感じる この ズボンは 格別に サイズが合うと。" },
              { cn: "商店 关门 之前， 他 满意地 买了 礼物。", py: "shāngdiàn guānmén zhīqián, tā mǎnyì de mǎi le lǐwù.", ja: "店が 閉まる まえに、 彼は 満足して 買った 贈り物を。" }
            ],
            translation: "店内には様々な服が並び、セーターもあればジーンズもある。若者が「この服を試着してもいいですか？」と尋ね、店員が試着室へ案内した。鏡を見るとぴったり合っていた。閉店前に彼は満足してプレゼントとして購入した。"
          },
          {
            id: 47, title: "#47 部屋の整理と日常の動作",
            phrases: [
              { cn: "屋子里 乱， 弟弟 马上 整理 房间。", py: "wūzi lǐ luàn, dìdi mǎshàng zhěnglǐ fángjiān.", ja: "部屋の 中は 散らかっており、 弟は 直ちに 整理する 部屋を。" },
              { cn: "他 把 苹果 和 西红柿 装 进 冰箱。", py: "tā bǎ píngguǒ hé xīhóngshì zhuāng jìn bīngxiāng.", ja: "彼は リンゴ と トマトを 積み入れる 冷蔵庫の中へ。" },
              { cn: "手里 拿着 叉子， 他 坐在 椅子上。", py: "shǒulǐ ná zhe chāzi, tā zuò zài yǐzi shang.", ja: "手の中に 持つ フォークを、 彼は 座る 椅子の 上に。" },
              { cn: "随后 用 洗发水 洗了 头发，", py: "suíhòu yòng xǐfàshuǐ xǐ le tóufa,", ja: "その後 用いて シャンプーを 洗った 髪を、" },
              { cn: "换上了 干净的 衬衫。", py: "huàn shang le gānjìng de chènshān.", ja: "着替えた 清潔な ワイシャツに。" },
              { cn: "听到 门铃 响， 赶快 出去 开 门。", py: "tīngdào ménlíng xiǎng, gǎnkuài chūqu kāi mén.", ja: "聞こえる ドアベルが 鳴るのが、 急いで 出て 開ける ドアを。" }
            ],
            translation: "部屋が少し散らかっていたため、弟は急いで片付けなければと思い出した。机の上のリンゴやトマトなどを全部冷蔵庫に入れた。フォークを手に椅子で休み、その後シャンプーで髪を洗って清潔なシャツに着替えた。チャイムが鳴ると急いでドアを開けに行った。"
          },
          {
            id: 48, title: "#48 球技の勝敗と運動の歓喜",
            phrases: [
              { cn: "下午 在 学校 球场 上 踢 足球。", py: "xiàwǔ zài xuéxiào qiúchǎng shang tī zúqiú.", ja: "午後 学校の グラウンドの 上で 蹴る サッカーを。" },
              { cn: "经过 激烈 竞争， 我们 班 赢 了！", py: "jīngguò jīliè jìngzhēng, wǒmen bān yíng le!", ja: "経て 激しい 競争を、 私たちの クラスは 勝った！" },
              { cn: "运动员 拿来 水 一口气 喝光 了。", py: "yùndòngyuán nálái shuǐ yì kǒu qì hē guāng le.", ja: "選手は 持ってきた 水を 一息に 飲み干した。" },
              { cn: "大家 欢呼， 互相 拍 手 祝贺。", py: "dàjiā huānhū, hùxiāng pāi shǒu zhùhè.", ja: "皆は 歓呼し、 互いに 叩く 手を 祝賀する。" },
              { cn: "体育 运动 让 每个人 都 感到 快乐。", py: "tǐyù yùndòng ràng měi gè rén dōu gǎndào kuàilè.", ja: "スポーツの 運動は させる 全ての人に 感じる 楽しいと。" }
            ],
            translation: "午後、学校のグラウンドでサッカーの試合が行われた。激しい戦いの末、私たちのクラスが見事に勝利した！選手は喉が渇いて水を一気に飲み干した。皆で歓声を上げハイタッチして喜び合った。スポーツは皆を最高に楽しい気持ちにしてくれる。"
          },
          {
            id: 49, title: "#49 音楽会と夜の街歩き",
            phrases: [
              { cn: "著名 乐团 举办了 盛大 音乐会。", py: "zhùmíng yuètuán jǔbàn le shèngdà yīnyuèhuì.", ja: "有名な 楽団は 開催した 盛大な 音楽会を。" },
              { cn: "乐手们 演奏 名曲 《月亮河》，", py: "yuèshǒumen yǎnzòu míngqǔ 《Yuèlianghé》,", ja: "演奏家たちは 演奏する 名曲 『月亮河』を、" },
              { cn: "旋律 优美 极了。", py: "xuánlǜ yōuměi jí le.", ja: "メロディーは 優美なこと 極まりない。" },
              { cn: "不管 听得完 听不完，", py: "bùguǎn tīngdewán tīngbuwán,", ja: "聴き終えられるか 聴き終えられないかに かかわらず、" },
              { cn: "听众们 静静地 听着 音乐。", py: "tīngzhòngmen jìngjìng de tīng zhe yīnyuè.", ja: "聴衆たちは 静かに 聴いている 音楽を。" },
              { cn: "演出 结束 后， 大家 坐 地铁 回家。", py: "yǎnchū jiéshù hòu, dàjiā zuò dìtiě huí jiā.", ja: "公演が 終わった 後、 皆は 乗る 地下鉄に 帰る 家へ。" },
              { cn: "街灯 照亮了 宽阔的 街道。", py: "jiēdēng zhàoliàng le kuānkuò de jiēdào.", ja: "街灯は 照らした 広々とした 通りを。" }
            ],
            translation: "夜、歌劇場で名門楽団の盛大な音楽会が開かれた。名曲『ムーン・リバー』が演奏され、メロディーは実に優美だった。最後まで聴き終えられるかどうかにかかわらず、観客は静かに耳を傾けた。終演後は劇場を出て地下鉄で帰途についた。夜風がそよぎ、街灯が広い通りを照らしていた。"
          },
          {
            id: 50, title: "#50 読書・交流と日々の充実",
            phrases: [
              { cn: "高校叔 买 花儿 发给 影迷。", py: "Gāoxiàoshū mǎi huār fā gěi yǐngmí.", ja: "高おじさんは 買う 花を 配る 映画ファンへ。" },
              { cn: "他们 一起 读 《张爷爷》、", py: "tāmen yìqǐ dú 《Zhāng Yéye》,", ja: "彼らは 一緒に 読む 『張おじいさん』、" },
              { cn: "和 《历史上的今天》。", py: "hé 《Lìshǐ shang de Jīntiān》.", ja: "と 『歴史上の今日』を。" },
              { cn: "大家 喝 花茶， 吃 点心 聊天儿。", py: "dàjiā hē huāchá, chī diǎnxīn liáotiānr.", ja: "皆は 飲む 花茶を、 食べる お菓子を おしゃべりする。" },
              { cn: "这样 丰富 的 生活，", py: "zhèyàng fēngfù de shēnghuó,", ja: "このような 豊かな 生活は、" },
              { cn: "真正 使 每个人 感到 幸福！", py: "zhēnzhèng shǐ měi gè rén gǎndào xìngfú!", ja: "真に させる 全ての人に 感じる 幸福だと！" }
            ],
            translation: "高おじさんはお花を買ってファンに配った。皆で芝生に座り『張おじいさん』や『歴史上の今日』を読んだ。花茶を飲み点心を味わいながら親しく語り合った。このような充実した学びと日々の暮らしこそが、真の幸せをもたらしてくれる。"
          }
        ]
      },
      {
        id: 16, title: "第16章：日常の住まいと街の情景",
        scenes: [
          {
            id: 51, title: "#51 静かな住宅街と部屋の鍵",
            phrases: [
              { cn: "你看， 这个 住宅区 里的 新 住宅，", py: "nǐ kàn, zhè gè zhùzhàiqū lǐ de xīn zhùzhài,", ja: "ほら見て、 この 住宅街の 中の 新しい 住宅は、" },
              { cn: "环境 非常 安静。", py: "huánjìng fēicháng ānjìng.", ja: "環境が 非常に 静かだ。" },
              { cn: "爸爸 问： “怎么了？", py: "bàba wèn: “zěnme le?", ja: "お父さんは 尋ねる： 「どうしたの？" },
              { cn: "门外的 信箱 里 有 信 吗？”", py: "mén wài de xìnxiāng lǐ yǒu xìn ma?”", ja: "ドアの外の 郵便受けの 中に 有るか 手紙が？」" },
              { cn: "弟弟 打开 桌子 上的 抽屉，", py: "dìdi dǎkāi zhuōzi shang de chōuti,", ja: "弟は 開ける 机の上の 引き出しを、" },
              { cn: "拿出 钥匙 和 一把 尺子。", py: "ná chū yàoshi hé yì bǎ chǐzi.", ja: "取り出す 鍵 と 1本の ものさしを。" }
            ],
            translation: "ほらごらん、この住宅街にある新しい住宅はとても静かだ。お父さんが「どうしたんだい？外の郵便受けに手紙はあったかい？」と尋ねた。弟は机の引き出しを開けて、部屋の鍵と定規を取り出した。"
          },
          {
            id: 52, title: "#52 水筒のお湯と正確な分量",
            phrases: [
              { cn: "这个 水壶 的 嘴儿 很 小，", py: "zhè gè shuǐhú de zuǐr hěn xiǎo,", ja: "この 水筒の 注ぎ口は とても 小さく、" },
              { cn: "倒 出 热 热的 开水。", py: "dào chū rè rè de kāishuǐ.", ja: "注ぎ 出す 熱々の お湯を。" },
              { cn: "医生 要求 仔细 检查 药量，", py: "yīshēng yāoqiú zǐxì jiǎnchá yàoliàng,", ja: "医師は 要求する 入念に 点検する 薬の分量を、" },
              { cn: "每次 必须 称 几 毫克，", py: "měi cì bìxū chēng jǐ háokè,", ja: "毎回 必ず 量る 数 ミリグラムを、" },
              { cn: "厚度 差 几 毫米 也不行。", py: "hòudù chà jǐ háomǐ yě bù xíng.", ja: "厚みの 差が 数 ミリメートルでも だめだ。" },
              { cn: "外面 送来 一 吨 土，", py: "wàimiàn sòng lái yì dūn tǔ,", ja: "外から 運ばれてきた 1 トンの 土が、" },
              { cn: "到底 在 哪个 时间段 搬 进去？", py: "dàodǐ zài nǎ gè shíjiānduàn bān jìnqu?", ja: "いったい どの 時間帯に 運び 入れるのか？" }
            ],
            translation: "この水筒の注ぎ口はとても小さく、熱い白湯が注ぎ出る。医師は薬の分量を細かく確認し、毎回数ミリグラム単位で量るよう求め、厚みの差も数ミリたりとも許されない。外には1トンの土が届いたが、いったいどの時間帯に中へ運び込むべきだろうか？"
          },
          {
            id: 53, title: "#53 洋服店での買い物と街歩き",
            phrases: [
              { cn: "妹妹 走进 衣服店， 看到 漂亮的 衣服。", py: "mèimei zǒu jìn yīfudiàn, kàn dào piàoliang de yīfu.", ja: "妹は 歩き入る 洋服店へ、 目にする 綺麗な 服を。" },
              { cn: "眼前 挂着 一 条 超短 裙子，", py: "yǎnqián guà zhe yì tiáo chāoduǎn qúnzi,", ja: "目の前に 掛けてある 1着の 超ミニの スカートが、" },
              { cn: "她 觉得 并不 难看， 穿上 极其 好看。", py: "tā juéde bìng bù nánkàn, chuān shang jíqí hǎokàn.", ja: "彼女は 決して 見苦しくなく、 着てみると 極めて 見栄えが良いと 感じた。" },
              { cn: "服务员 礼貌地 问：", py: "fúwùyuán lǐmào de wèn:", ja: "店員は 礼儀正しく 尋ねる：" },
              { cn: "“请问 想 买 什么样的 衬衫？”", py: "“qǐngwèn xiǎng mǎi shénmeyàng de chènshān?”", ja: "「お尋ねしますが 買いたいですか どのような ワイシャツを？」" },
              { cn: "他们 一步一步 走过 这 幢 大楼。", py: "tāmen yíbù yíbù zǒu guò zhè dòng dàlóu.", ja: "彼らは 一歩一歩 歩き過ぎた この 棟の ビルを。" }
            ],
            translation: "妹は洋服店に入るやいなや、様々な綺麗な服を目にした。目の前には超ミニスカートが掛かっており、ひと目見て決して格好悪くなく、着てみるととても見栄えが良いと思った。店員が「どのようなシャツをお探しですか？」と丁寧に尋ねた。店を出た後、彼らは一歩一歩この高層ビルの前を通り過ぎていった。"
          }
        ]
      },
      {
        id: 17, title: "第17章：名所巡りと家族の温もり",
        scenes: [
          {
            id: 54, title: "#54 名所巡りと湖・砂浜の風景",
            phrases: [
              { cn: "他 从小 旅行， 去过 黄山 和 花城。", py: "tā cóngxiǎo lǚxíng, qù guo Huángshān hé Huāchéng.", ja: "彼は 幼い頃から 旅行し、 行ったことがある 黄山 と 花城へ。" },
              { cn: "二〇二五 年 夏天 初，", py: "èr líng èr wǔ nián xiàtiān chū,", ja: "2025 年の 夏の 初めに、" },
              { cn: "他 打算 去 南市区 旁边，", py: "tā dǎsuan qù Nánshìqū pángbiān,", ja: "彼は つもりだ 行く 南市区の 隣へ、" },
              { cn: "美丽的 湖 和 沙滩 散步。", py: "měilì de hú hé shātān sànbù.", ja: "美しい 湖 と 砂浜へ 散歩する。" },
              { cn: "这里的 游戏 真 好玩儿，", py: "zhèlǐ de yóuxì zhēn hǎowánr,", ja: "ここの ゲームは 本当に おもしろく、" },
              { cn: "大家都 玩得 极其 高兴。", py: "dàjiā dōu wán de jíqí gāoxìng.", ja: "皆は 極めて 楽しく 遊んだ。" }
            ],
            translation: "彼は幼い頃から旅行が好きで、以前に有名な黄山や花城へ行ったことがある。2025年の初夏には、南市区のそばにある美しい湖や砂浜へ散歩に行く予定だ。ここの遊びは本当におもしろく、みんな最高に楽しく過ごした。"
          },
          {
            id: 55, title: "#55 家族の健康と美味しい食卓",
            phrases: [
              { cn: "叔叔 生病 住院 很 难受， 别 着急，", py: "shūshu shēngbìng zhùyuàn hěn nánshòu, bié zháojí,", ja: "おじさんは 入院して つらかったが、 焦るな、" },
              { cn: "现在 终于 康复 出院 了。", py: "xiànzài zhōngyú kāngfù chūyuàn le.", ja: "今 は ついに 回復して 退院した。" },
              { cn: "可爱的 婴儿 长大了，", py: "kě'ài de yīng'ér zhǎng dà le,", ja: "可愛い 赤ちゃんは 大きくなり、" },
              { cn: "冬天 还能 在 门外 堆 雪人。", py: "dōngtiān hái néng zài mén wài duī xuěrén.", ja: "冬には さらに ドアの外で 雪だるまを 積み上げられる。" },
              { cn: "院子 里的 苹果 成熟 了，", py: "yuànzi lǐ de píngguǒ chéngshú le,", ja: "庭の 中の リンゴが 実り、" },
              { cn: "朋友们 来 家里 做客。", py: "péngyoumen lái jiā lǐ zuòkè.", ja: "友人たちが 家へ 客として やって来る。" },
              { cn: "妈妈 准备了 煮 猪肉 和 蔬菜。", py: "māma zhǔnbèi le zhǔ zhūròu hé shūcài.", ja: "お母さんは 準備した 煮た 豚肉 と 野菜を。" },
              { cn: "派蒙 问： “吃到 美味 了没？", py: "Pàiméng wèn: “chīdào měiwèi le méi?", ja: "パイモンは 尋ねる： 「口にした 美味を もう？" },
              { cn: "去 游泳池 游泳 吧！”", py: "qù yóuyǒngchí yóuyǒng ba!”", ja: "行こう プールへ 泳ぐ！」" },
              { cn: "他 还要 认真 学完 这 门 汉语 课。", py: "tā hái yào rènzhēn xué wán zhè mén Hànyǔ kè.", ja: "彼は さらに 真面目に この 科目の 中国語の 授業を 学び終える。" }
            ],
            translation: "おじさんは病気で入院していた時は体がとてもつらかったが、焦ることはない、今ではすっかり回復して退院した。可愛い赤ちゃんもすくすく成長し、冬には外で雪だるまを作ることもできるようになった。秋に庭のリンゴが実ると、友人たちが家に遊びに来た。お母さんは客を家族のように温かくもてなし、1人前の豚肉と野菜の煮込み料理を用意した。パイモンは「美味しいご馳走にありつけた？ご飯を食べたらプールへ泳ぎに行こうぜ！」と誘った。今学期、彼はこの中国語の科目を熱心に学び終える予定だ。"
          }
        ]
      },
      {
        id: 18, title: "第18章：璃月港の休日と旧友との語らい",
        scenes: [
          {
            id: 56, title: "#56 旧友との再会と日曜日の計画",
            phrases: [
              { cn: "星期日， 老朋友 碰面 了。", py: "xīngqīrì, lǎo péngyou pèngmiàn le.", ja: "日曜日に、 旧友が 出会った。" },
              { cn: "前天 寄的 信 不见 了。", py: "qiántiān jì de xìn bújiàn le.", ja: "一昨日に 出した 手紙が 見当たらなくなった。" },
              { cn: "他 想要 一块儿 去 散步。", py: "tā xiǎngyào yíkuàir qù sànbù.", ja: "彼は 一緒に 散歩へ 行きたいと 思った。" }
            ],
            translation: "日曜日、旧友とばったり出会った。一昨日出した手紙が見当たらなくなったと話し、彼はいっしょに散歩に行きたいと言った。"
          },
          {
            id: 57, title: "#57 茶館の時計と穏やかな休息",
            phrases: [
              { cn: "他 看了看 墙上的 时钟，", py: "tā kàn le kàn qiáng shang de shízhōng,", ja: "彼は 見た 壁の上の 時計を、" },
              { cn: "发现 今天 不怎么 忙。", py: "fāxiàn jīntiān bù zěnme máng.", ja: "気づいた 今日は あまり 忙しくないと。" },
              { cn: "决定 请假 休息 一会儿，", py: "juédìng qǐngjià xiūxi yíhuìr,", ja: "休暇を願い出て 休む しばらくの間、" },
              { cn: "在 大 树下 歇一歇。", py: "zài dà shù xià xiē yi xiē.", ja: "大きな 木の下で 一服する ことを 決めた。" }
            ],
            translation: "壁の掛け時計を見ると今日はあまり忙しくないとわかり、休暇を取ってしばらく大きな木の下で一服することにした。"
          },
          {
            id: 58, title: "#58 街の風景と行き交う車",
            phrases: [
              { cn: "一路上， 许多 年轻轻 的 司机，", py: "yílùshang, xǔduō niánqīngqīng de sījī,", ja: "道中、 多くの 若々しい 運転手が、" },
              { cn: "开着 车子 开来开去。", py: "kāi zhe chēzi kāiláikāiqù.", ja: "運転している 車を 行き交わせている。" },
              { cn: "树林 底下 堆着 许多 大 石头。", py: "shùlín dǐxia duī zhe xǔduō dà shítou.", ja: "林の 下には 多くの 大きな 石が 積まれている。" }
            ],
            translation: "道すがら、多くの若々しい運転手が車を行き交わせ、木立の足元にはたくさんの大きな石が積まれていた。"
          },
          {
            id: 59, title: "#59 操場のゴールと親族の歓声",
            phrases: [
              { cn: "操场上 突然 进球 了。", py: "cāochǎng shang tūrán jìn qiú le.", ja: "グラウンドで 突然 ゴールが決まった。" },
              { cn: "叔叔 和 姨妈 带着 成人 孩子们，", py: "shūshu hé yímā dài zhe chéngrén háizimen,", ja: "おじ と 叔母は 連れて 成人の 子供たちを、" },
              { cn: "一起 欢呼。", py: "yìqǐ huānhū.", ja: "一緒に 歓声を上げた。" }
            ],
            translation: "グラウンドで突然ゴールが決まり、おじさんと叔母さんは成人した子供たちと一緒に歓声を上げた。"
          },
          {
            id: 60, title: "#60 露店巡りと買い物の知恵",
            phrases: [
              { cn: "他 看了看 大家， 终于 开口 提醒：", py: "tā kàn le kàn dàjiā, zhōngyú kāikǒu tíxǐng:", ja: "彼は 見て 皆を、 ついに 口を開き 注意した：" },
              { cn: "“买 东西 时 一定 要 小心，", py: "“mǎi dōngxi shí yíqìng yào xiǎoxīn,", ja: "「買い物を する 時は 必ず 用心し、" },
              { cn: "千万 别 上当！”", py: "qiānwàn bié shàngdàng!”", ja: "決して 騙されるな！」" }
            ],
            translation: "彼は皆を見回し、ついに口を開いて「買い物をする時は必ず用心し、絶対に騙されないように！」と注意した。"
          }
        ]
      }
    ];

const vocabTuples = [
      ["爱","ài","愛する・好む",1],["八","bā","8",1],["爸爸","bàba","お父さん",1],["杯子","bēizi","コップ",1],["北京","Běijīng","北京",1],["本","běn","〜冊",1],["不客气","bú kèqi","どういたしまして",1],["不","bù","〜でない",1],["菜","cài","料理・野菜",1],["茶","chá","お茶",1],["吃","chī","食べる",1],["出租车","chūzūchē","タクシー",1],["打电话","dǎ diànhuà","電話する",1],["大","dà","大きい",1],["的","de","〜の",1],["点","diǎn","〜時",1],["电脑","diànnǎo","パソコン",1],["电视","diànshì","テレビ",1],["电影","diànyǐng","映画",1],["东西","dōngxi","物・品物",1],["都","dōu","すべて",1],["读","dú","読む",1],["对不起","duìbuqǐ","ごめんなさい",1],["多","duō","多い",1],["多少","duōshao","いくら",1],["儿子","érzi","息子",1],["二","èr","2",1],["饭馆","fànguǎn","料理屋",1],["飞机","fēijī","飛行機",1],["分钟","fēnzhōng","〜分間",1],["高兴","gāoxìng","嬉しい",1],["个","ge","〜個・人",1],["工作","gōngzuò","仕事",1],["狗","gǒu","犬",1],["汉语","Hànyǔ","中国語",1],["好","hǎo","良い",1],["号","hào","日・番号",1],["喝","hē","飲む",1],["和","hé","〜と",1],["很","hěn","とても",1],["后面","hòumian","後ろ",1],["回","huí","帰る",1],["会","huì","できる",1],["几","jǐ","いくつ",1],["家","jiā","家・軒",1],["叫","jiào","呼ぶ",1],["今天","jīntiān","今日",1],["九","jiǔ","9",1],["开","kāi","開ける・運転する",1],["看","kàn","見る",1],["看见","kànjiàn","見かける",1],["块","kuài","元・塊",1],["来","lái","来る",1],["老师","lǎoshī","先生",1],["了","le","〜した",1],["冷","lěng","寒い",1],["里","lǐ","中",1],["零","líng","0",1],["六","liù","6",1],["妈妈","māma","お母さん",1],["吗","ma","〜か？",1],["买","mǎi","買う",1],["猫","māo","猫",1],["没","méi","ない",1],["没关系","méi guānxi","大丈夫",1],["米饭","mǐfàn","ご飯",1],["明天","míngtiān","明日",1],["名字","míngzi","名前",1],["哪","nǎ","どの",1],["哪儿","nǎr","どこ",1],["那","nà","あの・あれ",1],["呢","ne","〜は？",1],["能","néng","できる",1],["你","nǐ","あなた",1],["年","nián","年",1],["女儿","nǚ'ér","娘",1],["朋友","péngyou","友達",1],["漂亮","piàoliang","美しい",1],["苹果","píngguǒ","りんご",1],["七","qī","7",1],["钱","qián","お金",1],["前面","qiánmian","前",1],["请","qǐng","どうぞ",1],["去","qù","行く",1],["热","rè","暑い",1],["人","rén","人",1],["认识","rènshi","知っている",1],["三","sān","3",1],["商店","shāngdiàn","店",1],["上","shàng","上・登る",1],["上午","shàngwǔ","午前",1],["少","shǎo","少ない",1],["谁","shéi","だれ",1],["什么","shénme","何",1],["十","shí","10",1],["时候","shíhou","とき",1],["是","shì","〜である",1],["书","shū","本",1],["水","shuǐ","水",1],["水果","shuǐguǒ","果物",1],["睡觉","shuìjiào","眠る",1],["说话","shuōhuà","話す",1],["四","sì","4",1],["岁","suì","〜歳",1],["他","tā","彼",1],["她","tā","彼女",1],["太","tài","あまりに",1],["天气","tiānqì","天気",1],["听","tīng","聞く",1],["同学","tóngxué","同級生",1],["喂","wèi","もしもし",1],["我","wǒ","私",1],["我们","wǒmen","私たち",1],["五","wǔ","5",1],["喜欢","xǐhuan","好き",1],["下","xià","下・降りる",1],["下午","xiàwǔ","午後",1],["下雨","xiàyǔ","雨が降る",1],["先生","xiānsheng","〜さん",1],["现在","xiànzài","いま",1],["想","xiǎng","〜したい",1],["小","xiǎo","小さい",1],["小姐","xiǎojiě","お嬢さん",1],["些","xiē","いくつかの",1],["写","xiě","書く",1],["谢谢","xièxie","ありがとう",1],["星期","xīngqī","週",1],["学生","xuésheng","学生",1],["学习","xuéxí","学ぶ",1],["学校","xuéxiào","学校",1],["一","yī","1",1],["衣服","yīfu","服",1],["医生","yīshēng","医者",1],["医院","yīyuàn","病院",1],["椅子","yǐzi","椅子",1],["月","yuè","月",1],["再见","zàijiàn","さようなら",1],["在","zài","ある・〜で",1],["怎么","zěnme","どうやって",1],["怎么样","zěnmeyàng","どうですか",1],["这","zhè","これ",1],["这儿","zhèr","ここ",1],["中国","Zhōngguó","中国",1],["中午","zhōngwǔ","昼",1],["住","zhù","住む",1],["桌子","zhuōzi","机",1],["字","zì","漢字",1],["昨天","zuótiān","昨日",1],["坐","zuò","座る・乗る",1],["做","zuò","する・作る",1],
      ["吧","ba","〜でしょう",2],["白","bái","白い",2],["百","bǎi","百",2],["帮助","bāngzhù","助ける",2],["报纸","bàozhǐ","新聞",2],["比","bǐ","〜より",2],["别","bié","〜するな",2],["长","cháng","長い",2],["唱歌","chànggē","歌う",2],["出","chū","出る",2],["穿","chuān","着る",2],["次","cì","〜回",2],["从","cóng","〜から",2],["错","cuò","間違っている",2],["大家","dàjiā","みなさん",2],["到","dào","着く",2],["得","de","〜の程度だ",2],["等","děng","待つ",2],["弟弟","dìdi","弟",2],["第一","dì-yī","第1",2],["懂","dǒng","わかる",2],["对","duì","正しい",2],["房间","fángjiān","部屋",2],["非常","fēicháng","非常に",2],["服务员","fúwùyuán","店員",2],["高","gāo","高い",2],["告诉","gàosù","教える",2],["哥哥","gēge","兄",2],["给","gěi","あげる",2],["公共汽车","gōnggòng qìchē","バス",2],["公司","gōngsī","会社",2],["贵","guì","高い",2],["过","guo","〜したことがある",2],["还","hái","まだ",2],["孩子","háizi","子ども",2],["好吃","hǎochī","美味しい",2],["黑","hēi","黒い",2],["红","hóng","赤い",2],["欢迎","huānyíng","歓迎する",2],["火车站","huǒchēzhàn","駅",2],["机场","jīchǎng","空港",2],["鸡蛋","jīdàn","たまご",2],["件","jiàn","〜着・件",2],["教室","jiàoshì","教室",2],["姐姐","jiějie","姉",2],["介绍","jièshào","紹介する",2],["进","jìn","入る",2],["近","jìn","近い",2],["就","jiù","すぐに",2],["觉得","juéde","思う",2],["咖啡","kāfēi","コーヒー",2],["开始","kāishǐ","始まる",2],["考试","kǎoshì","試験",2],["可能","kěnéng","たぶん",2],["可以","kěyǐ","〜できる",2],["课","kè","授業",2],["快","kuài","速い",2],["快乐","kuàilè","楽しい",2],["累","lèi","疲れる",2],["离","lí","〜から離れて",2],["两","liǎng","2つの",2],["路","lù","道・〜番線",2],["旅游","lǚyóu","旅行する",2],["卖","mài","売る",2],["慢","màn","遅い",2],["忙","máng","忙しい",2],["每","měi","毎〜",2],["妹妹","mèimei","妹",2],["门","mén","ドア・門",2],["面条","miàntiáo","麺類",2],["男","nán","男",2],["您","nín","あなた様",2],["牛奶","niúnǎi","牛乳",2],["女","nǚ","女",2],["旁边","pángbiān","となり",2],["跑步","pǎobù","走る",2],["便宜","piányi","安い",2],["票","piào","切符",2],["妻子","qīzi","妻",2],["起床","qǐchuáng","起きる",2],["千","qiān","千",2],["铅笔","qiānbǐ","鉛筆",2],["晴","qíng","晴れ",2],["去年","qùnián","去年",2],["让","ràng","〜させる",2],["日","rì","日",2],["上班","shàngbān","出勤する",2],["身体","shēntǐ","体",2],["生病","shēngbìng","病気になる",2],["生日","shēngrì","誕生日",2],["时间","shíjiān","時間",2],["事情","shìqing","事柄",2],["手表","shǒubiǎo","腕時計",2],["手机","shǒujī","スマホ",2],["送","sòng","贈る・送る",2],["虽然","suīrán","〜だけれども",2],["但是","dànshì","しかし",2],["它","tā","それ",2],["踢足球","tī zúqiú","サッカーする",2],["题","tí","問題",2],["跳舞","tiàowǔ","踊る",2],["外","wài","外",2],["完","wán","終わる",2],["玩","wán","遊ぶ",2],["晚上","wǎnshang","晩",2],["往","wǎng","〜へ向かって",2],["为什么","wèishénme","なぜ",2],["问","wèn","尋ねる",2],["问题","wèntí","質問・問題",2],["西瓜","xīguā","スイカ",2],["希望","xīwàng","希望する",2],["洗","xǐ","洗う",2],["向","xiàng","〜に向かって",2],["小时","xiǎoshí","〜時間",2],["笑","xiào","笑う",2],["新","xīn","新しい",2],["姓","xìng","姓",2],["休息","xiūxi","休む",2],["雪","xuě","雪",2],["颜色","yánsè","色",2],["眼睛","yǎnjing","目",2],["羊肉","yángròu","羊肉",2],["药","yào","薬",2],["要","yào","〜したい・要る",2],["也","yě","〜もまた",2],["一下","yíxià","ちょっと",2],["已经","yǐjīng","すでに",2],["一起","yìqǐ","いっしょに",2],["意思","yìsi","意味",2],["因为","yīnwèi","〜だから",2],["所以","suǒyǐ","だから",2],["阴","yīn","くもり",2],["游泳","yóuyǒng","泳ぐ",2],["右边","yòubian","右側",2],["鱼","yú","魚",2],["远","yuǎn","遠い",2],["运动","yùndòng","運動",2],["再","zài","また",2],["早上","zǎoshang","朝",2],["丈夫","zhàngfu","夫",2],["找","zhǎo","探す",2],["着","zhe","〜している",2],["真","zhēn","本当に",2],["正在","zhèngzài","〜している最中",2],["知道","zhīdào","知っている",2],["准备","zhǔnbèi","準備する",2],["自行车","zìxíngchē","自転車",2],["走","zǒu","歩く",2],["最","zuì","もっとも",2],["左边","zuǒbian","左側",2],
      ["阿姨","āyí","おばさん",3],["啊","a","〜ね",3],["矮","ǎi","背が低い",3],["爱好","àihào","趣味",3],["安静","ānjìng","静か",3],["把","bǎ","〜を（処置）",3],["班","bān","クラス",3],["搬","bān","運ぶ・引越す",3],["办法","bànfǎ","方法",3],["办公室","bàngōngshì","事務室",3],["半","bàn","半分",3],["帮忙","bāngmáng","手伝う",3],["包","bāo","包む・カバン",3],["饱","bāo","満腹",3],["北方","běifāng","北方",3],["被","bèi","〜される",3],["鼻子","bízi","鼻",3],["比较","bǐjiào","比較的",3],["比赛","bǐsài","試合",3],["笔记本","bǐjìběn","ノート",3],["必须","bìxū","必ず〜すべき",3],["变化","biànhuà","変化",3],["别人","biéren","他人",3],["宾馆","bīnguǎn","ホテル",3],["冰箱","bīngxiāng","冷蔵庫",3],["不但……而且","búdàn...érqiě","だけでなく〜も",3],["而且","érqiě","その上",3],["才","cái","やっと",3],["菜单","càidān","メニュー",3],["参加","cānjiā","参加する",3],["草","cǎo","草",3],["层","céng","階・層",3],["差","chà","劣る",3],["长城","Chángchéng","万里の長城",3],["超市","chāoshì","スーパー",3],["衬衫","chènshān","ワイシャツ",3],["成绩","chéngjì","成績",3],["城市","chéngshì","都市",3],["迟到","chídào","遅刻する",3],["出现","chūxiàn","現れる",3],["厨房","chúfáng","厨房",3],["除了","chúle","〜を除いて",3],["船","chuán","船",3],["春","chūn","春",3],["词语","cíyǔ","単語",3],["聪明","cōngming","賢い",3],["打扫","dǎsǎo","掃除する",3],["打算","dǎsuan","〜するつもり",3],["带","dài","持参する",3],["担心","dānxīn","心配する",3],["蛋糕","dàngāo","ケーキ",3],["当然","dāngrán","もちろん",3],["地","de","〜に（連用）",3],["灯","dēng","明かり",3],["地方","dìfang","場所",3],["地铁","dìtiě","地下鉄",3],["地图","dìtú","地図",3],["电梯","diàntī","エレベーター",3],["电子邮件","diànzǐ yóujiàn","Eメール",3],["东","dōng","東",3],["冬","dōng","冬",3],["动物","dòngwù","動物",3],["短","duǎn","短い",3],["段","duàn","区間・段落",3],["断","duàn","切れる",3],["锻炼","duànliàn","鍛える",3],["多么","duōme","どんなに",3],["饿","è","飢える",3],["耳朵","ěrduo","耳",3],["发烧","fāshāo","熱を出す",3],["发现","fāxiàn","気付く",3],["方便","fāngbiàn","便利",3],["放","fàng","置く",3],["放心","fàngxīn","安心する",3],["分","fēn","分・点数",3],["风","fēng","風",3],["复习","fùxí","復習する",3],["附近","fùjìn","付近",3],["干净","gānjìng","清潔",3],["敢","gǎn","思い切って〜する",3],["感冒","gǎnmào","風邪をひく",3],["刚才","gāngcái","さっき",3],["根据","gēnjù","〜に基づき",3],["跟","gēn","〜と",3],["更","gèng","さらに",3],["公斤","gōngjīn","キログラム",3],["公里","gōnglǐ","キロメートル",3],["公园","gōngyuán","公園",3],["故事","gùshi","物語",3],["刮风","guāfēng","風が吹く",3],["关","guān","閉める",3],["关系","guānxi","関係",3],["关心","guānxīn","気にかける",3],["关于","guānyú","〜に関して",3],["国家","guójiā","国",3],["果汁","guǒzhī","ジュース",3],["过去","guòqù","過去",3],["还是","háishi","それとも",3],["害怕","hàipà","恐れる",3],["黑板","hēibǎn","黒板",3],["后来","hòulái","その後",3],["护照","hùzhào","パスポート",3],["花","huā","費やす・花",3],["画","huà","描く・絵",3],["坏","huài","壊れる",3],["环境","huánjìng","環境",3],["换","huàn","取り替える",3],["黄","huáng","黄色い",3],["黄河","Huánghé","黄河",3],["回答","huídá","答える",3],["会议","huìyì","会議",3],["或者","huòzhě","あるいは",3],["几乎","jīhū","ほとんど",3],["机会","jīhuì","機会",3],["极","jí","極めて",3],["记得","jìde","覚えている",3],["季节","jìjié","季節",3],["检查","jiǎnchá","検査する",3],["简单","jiǎndān","簡単",3],["健康","jiànkāng","健康",3],["见面","jiànmiàn","会う",3],["讲话","jiǎnghuà","話す",3],["教","jiāo","教える",3],["角","jiǎo","角（通貨）",3],["脚","jiǎo","足",3],["接","jiē","迎える・出る",3],["街道","jiēdào","通り",3],["结婚","jiéhūn","結婚する",3],["结束","jiéshù","終わる",3],["节目","jiémù","番組",3],["节日","jiérì","祝日",3],["解决","jiějué","解決する",3],["借","jiè","借りる・貸す",3],["经常","jīngcháng","いつも",3],["经过","jīngguò","経る",3],["经理","jīnglǐ","支配人",3],["久","jiǔ","久しい",3],["旧","jiù","古い",3],["句子","jùzi","文",3],["决定","juédìng","決める",3],["可爱","kě'ài","可愛い",3],["渴","kě","喉が渇く",3],["刻","kè","15分",3],["客人","kèrén","客",3],["课文","kèwén","本文",3],["空调","kōngtiáo","エアコン",3],["口","kǒu","口・〜人",3],["哭","kū","泣く",3],["裤子","kùzi","ズボン",3],["筷子","kuàizi","箸",3],["蓝","lán","青い",3],["老","lǎo","年老いた",3],["离开","líkāi","立ち去る",3],["礼物","lǐwù","贈り物",3],["历史","lìshǐ","歴史",3],["脸","liǎn","顔",3],["练习","liànxí","練習する",3],["辆","liàng","〜台",3],["聊天","liáotiān","おしゃべりする",3],["了解","liǎojiě","理解する",3],["邻居","línjū","隣人",3],["留学","liúxué","留学する",3],["楼","lóu","ビル・階",3],["绿","lǜ","緑の",3],["马","mǎ","馬",3],["马上","mǎshàng","すぐに",3],["满意","mǎnyì","満足する",3],["帽子","màozi","帽子",3],["米","mǐ","メートル",3],["面包","miànbāo","パン",3],["明白","míngbai","わかる",3],["拿","ná","持つ",3],["奶奶","nǎinai","おばあちゃん",3],["南","nán","南",3],["难","nán","難しい",3],["难过","nánguò","辛い",3],["年级","niánjí","学年",3],["年轻","niánqīng","若い",3],["鸟","niǎo","鳥",3],["努力","nǔlì","努力する",3],["爬山","páshān","登山する",3],["盘子","pánzi","皿",3],["胖","pàng","太っている",3],["皮鞋","píxié","革靴",3],["啤酒","píjiǔ","ビール",3],["平时","píngshí","普段",3],["瓶子","píngzi","瓶",3],["其实","qíshí","実は",3],["其他","qítā","その他の",3],["奇怪","qíguài","奇妙な",3],["骑","qí","乗る",3],["起飞","qǐfēi","離陸する",3],["起来","qǐlai","起き上がる",3],["清楚","qīngchu","はっきりした",3],["秋","qiū","秋",3],["裙子","qúnzi","スカート",3],["然后","ránhòu","それから",3],["热情","rèqíng","親切な",3],["认为","rènwéi","思う",3],["认真","rènzhēn","真面目な",3],["容易","róngyì","易しい",3],["如果","rúguǒ","もし〜なら",3],["伞","sǎn","傘",3],["上网","shàngwǎng","ネットする",3],["生气","shēngqì","怒る",3],["声音","shēngyīn","声・音",3],["使","shǐ","〜させる",3],["世界","shìjiè","世界",3],["瘦","shòu","痩せている",3],["舒服","shūfu","快適",3],["叔叔","shūshu","おじさん",3],["树","shù","木",3],["数学","shùxué","数学",3],["刷牙","shuàyá","歯を磨く",3],["双","shuāng","一足・一対",3],["水平","shuǐpíng","レベル",3],["司机","sījī","運転手",3],["太阳","tàiyáng","太陽",3],["特别","tèbié","特に",3],["疼","téng","痛い",3],["提高","tígāo","高める",3],["体育","tǐyù","スポーツ",3],["甜","tián","甘い",3],["条","tiáo","〜本",3],["同事","tóngshì","同僚",3],["同意","tóngyì","同意する",3],["头发","tóufa","髪の毛",3],["突然","tūrán","突然",3],["图书馆","túshūguǎn","図書館",3],["腿","tuǐ","脚",3],["完成","wánchéng","完成する",3],["碗","wǎn","お椀",3],["万","wàn","万",3],["忘记","wàngjì","忘れる",3],["为","wèi","〜のために",3],["为了","wèile","〜のために",3],["位","wèi","〜名様",3],["文化","wénhuà","文化",3],["西","xī","西",3],["习惯","xíguàn","習慣",3],["洗手间","xǐshǒujiān","トイレ",3],["洗澡","xǐzǎo","お風呂に入る",3],["夏","xià","夏",3],["先","xiān","まず",3],["香蕉","xiāngjiāo","バナナ",3],["相同","xiāngtóng","同じ",3],["相信","xiāngxìn","信じる",3],["响","xiǎng","鳴る",3],["小心","xiǎoxīn","注意する",3],["校长","xiàozhǎng","校長",3],["鞋","xié","靴",3],["新闻","xīnwén","ニュース",3],["新鲜","xīnxiān","新鮮な",3],["信","xìn","手紙",3],["行李箱","xínglixiāng","スーツケース",3],["兴趣","xìngqù","興味",3],["熊猫","xióngmāo","パンダ",3],["需要","xūyào","必要とする",3],["选择","xuǎnzé","選ぶ",3],["眼镜","yǎnjìng","眼鏡",3],["要求","yāoqiú","要求する",3],["爷爷","yéye","おじいちゃん",3],["一定","yídìng","必ず",3],["一共","yígòng","合計で",3],["一会儿","yíhuìr","しばらく",3],["一样","yíyàng","同じ",3],["以后","yǐhòu","以後",3],["以前","yǐqián","以前",3],["以为","yǐwéi","〜と思い込む",3],["一般","yìbān","一般的な",3],["一边……一边","yìbiān...yìbiān","〜しながら",3],["一直","yìzhí","ずっと",3],["音乐","yīnyuè","音楽",3],["银行","yínháng","銀行",3],["应该","yīnggāi","〜すべき",3],["影响","yǐngxiǎng","影響する",3],["用","yòng","使う",3],["游戏","yóuxì","ゲーム",3],["有名","yǒumíng","有名",3],["又","yòu","また",3],["遇到","yùdào","出くわす",3],["元","yuán","元",3],["愿意","yuànyì","進んで〜する",3],["月亮","yuèliang","月",3],["越……越……","yuè...yuè...","〜するほど〜",3],["站","zhàn","駅・立つ",3],["张","zhāng","〜枚",3],["照顾","zhàogù","世話する",3],["照片","zhàopiàn","写真",3],["照相机","zhàoxiàngjī","カメラ",3],["只","zhǐ / zhī","ただ〜だけ / 匹",3],["只有……才","zhǐyǒu...cái","〜してこそ",3],["中文","Zhōngwén","中国語",3],["中间","zhōngjiān","真ん中",3],["重要","zhòngyào","重要",3],["周末","zhōumò","週末",3],["主要","zhǔyào","主要な",3],["注意","zhùyì","注意する",3],["着急","zháojí","焦る",3],["自己","zìjǐ","自分",3],["总是","zǒngshì","いつも",3],["嘴","zuǐ","口",3],["最近","zuìjìn","最近",3],["作业","zuòyè","宿題",3],["钱包","qiánbāo","財布",3],["种","zhǒng","種類",3],["纸","zhǐ","紙",3],["信用卡","xìnyòngkǎ","クレジットカード",3]
    ];

const allHskVocabulary = vocabTuples.map(([w,p,j,l]) => ({ word: w, pinyin: p, ja: j, level: l }));
