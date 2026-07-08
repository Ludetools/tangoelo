const estimateBands = [
  { level: "Rookie", tier: "rookie", minRating: 350, maxRating: 650, minWords: 0, maxWords: 500 },
  { level: "Bronze", tier: "bronze", minRating: 650, maxRating: 950, minWords: 500, maxWords: 1500 },
  { level: "Silver", tier: "silver", minRating: 950, maxRating: 1250, minWords: 1500, maxWords: 3000 },
  { level: "Gold", tier: "gold", minRating: 1250, maxRating: 1650, minWords: 3000, maxWords: 6000 },
  { level: "Platinum", tier: "platinum", minRating: 1650, maxRating: 2150, minWords: 6000, maxWords: 10000 },
  { level: "Diamond", tier: "diamond", minRating: 2150, maxRating: 2650, minWords: 10000, maxWords: 20000 },
  { level: "Master", tier: "master", minRating: 2650, maxRating: 3100, minWords: 20000, maxWords: 30000 },
  { level: "Grandmaster", tier: "grandmaster", minRating: 3100, maxRating: 3800, minWords: 30000, maxWords: 75000 },
  { level: "Legend", tier: "legend", minRating: 3800, maxRating: 4200, minWords: 75000, maxWords: 120000 }
];

const coverageAnchors = [
  { words: 1000, coverage: 68 },
  { words: 2000, coverage: 76 },
  { words: 5000, coverage: 86 },
  { words: 10000, coverage: 92 },
  { words: 120000, coverage: 100 }
];

const levelFrequencyProfiles = {
  "Pre-N5": { minRank: 1, maxRank: 800 },
  N5: { minRank: 300, maxRank: 2200 },
  N4: { minRank: 1200, maxRank: 4500 },
  N3: { minRank: 2500, maxRank: 8000 },
  N2: { minRank: 5000, maxRank: 13000 },
  N1: { minRank: 8000, maxRank: 19000 },
  "Beyond N1": { minRank: 12000, maxRank: 25000 }
};

const wiktionaryFrequencyRankByWord = window.wiktionaryFrequencyRanks || {};
const animeFrequencyRankByWord = window.animeJdramaFrequencyRanks || {};
const aozoraFrequencyRankByWord = window.aozoraFrequencyRanks || {};
const youtubeFrequencyRankByWord = window.youtubeFrequencyRanks || {};
const additionalFrequencyRankByWord = window.additionalFrequencyRanks || {};
const dictionaryEntryByWord = window.jmdictFrequencyEntries || {};

const vocabByLevel = {
  "Pre-N5": [
    ["あ", "あ", "hiragana: a"],
    ["い", "い", "hiragana: i"],
    ["う", "う", "hiragana: u"],
    ["え", "え", "hiragana: e"],
    ["お", "お", "hiragana: o"],
    ["はい", "はい", "yes"],
    ["いいえ", "いいえ", "no"],
    ["これ", "これ", "this"],
    ["それ", "それ", "that"],
    ["あれ", "あれ", "that over there"],
    ["ここ", "ここ", "here"],
    ["そこ", "そこ", "there"],
    ["あそこ", "あそこ", "over there"],
    ["一", "いち", "one"],
    ["二", "に", "two"],
    ["三", "さん", "three"],
    ["日", "ひ", "day; sun"],
    ["月", "つき", "moon; month"],
    ["本", "ほん", "book"],
    ["円", "えん", "yen"],
    ["上", "うえ", "up; above"],
    ["下", "した", "down; below"],
    ["中", "なか", "inside"],
    ["右", "みぎ", "right"],
    ["左", "ひだり", "left"],
    ["朝", "あさ", "morning"],
    ["夜", "よる", "night"],
    ["駅", "えき", "station"],
    ["口", "くち", "mouth"],
    ["手", "て", "hand"]
  ],
  N5: [
    ["私", "わたし", "I; me"],
    ["人", "ひと", "person"],
    ["水", "みず", "water"],
    ["火", "ひ", "fire"],
    ["山", "やま", "mountain"],
    ["川", "かわ", "river"],
    ["花", "はな", "flower"],
    ["犬", "いぬ", "dog"],
    ["猫", "ねこ", "cat"],
    ["今日", "きょう", "today"],
    ["明日", "あした", "tomorrow"],
    ["学校", "がっこう", "school"],
    ["先生", "せんせい", "teacher"],
    ["友達", "ともだち", "friend"],
    ["名前", "なまえ", "name"],
    ["食べる", "たべる", "to eat"],
    ["飲む", "のむ", "to drink"],
    ["行く", "いく", "to go"],
    ["見る", "みる", "to see; to watch"],
    ["聞く", "きく", "to listen; to ask"],
    ["買う", "かう", "to buy"],
    ["読む", "よむ", "to read"],
    ["書く", "かく", "to write"],
    ["大きい", "おおきい", "big"],
    ["小さい", "ちいさい", "small"],
    ["新しい", "あたらしい", "new"],
    ["古い", "ふるい", "old"],
    ["高い", "たかい", "expensive; tall"],
    ["安い", "やすい", "cheap"],
    ["早い", "はやい", "early; fast"]
  ],
  N4: [
    ["電車", "でんしゃ", "train"],
    ["天気", "てんき", "weather"],
    ["料理", "りょうり", "cooking; cuisine"],
    ["質問", "しつもん", "question"],
    ["答える", "こたえる", "to answer"],
    ["仕事", "しごと", "work; job"],
    ["必要", "ひつよう", "necessary"],
    ["場合", "ばあい", "case; situation"],
    ["理由", "りゆう", "reason"],
    ["経験", "けいけん", "experience"],
    ["約束", "やくそく", "promise; appointment"],
    ["説明", "せつめい", "explanation"],
    ["急ぐ", "いそぐ", "to hurry"],
    ["残念", "ざんねん", "unfortunate; disappointing"],
    ["準備", "じゅんび", "preparation"],
    ["文化", "ぶんか", "culture"],
    ["関係", "かんけい", "relationship; connection"],
    ["確認", "かくにん", "confirmation"],
    ["選ぶ", "えらぶ", "to choose"],
    ["続ける", "つづける", "to continue"],
    ["増える", "ふえる", "to increase"],
    ["比べる", "くらべる", "to compare"],
    ["受け取る", "うけとる", "to receive"],
    ["間に合う", "まにあう", "to be in time"],
    ["手伝う", "てつだう", "to help"],
    ["片付ける", "かたづける", "to tidy up"],
    ["集める", "あつめる", "to collect"],
    ["変える", "かえる", "to change"],
    ["決める", "きめる", "to decide"],
    ["泊まる", "とまる", "to stay overnight"]
  ],
  N3: [
    ["影響", "えいきょう", "influence; effect"],
    ["状況", "じょうきょう", "circumstances"],
    ["可能", "かのう", "possible"],
    ["判断", "はんだん", "judgment; decision"],
    ["努力", "どりょく", "effort"],
    ["記憶", "きおく", "memory"],
    ["認める", "みとめる", "to recognize; admit"],
    ["避ける", "さける", "to avoid"],
    ["支える", "ささえる", "to support"],
    ["導く", "みちびく", "to guide; lead"],
    ["解決", "かいけつ", "solution"],
    ["結果", "けっか", "result"],
    ["原因", "げんいん", "cause"],
    ["目的", "もくてき", "purpose"],
    ["特徴", "とくちょう", "characteristic"],
    ["条件", "じょうけん", "condition"],
    ["態度", "たいど", "attitude"],
    ["責任", "せきにん", "responsibility"],
    ["成長", "せいちょう", "growth"],
    ["反対", "はんたい", "opposition"],
    ["賛成", "さんせい", "approval; agreement"],
    ["報告", "ほうこく", "report"],
    ["相談", "そうだん", "consultation"],
    ["予想", "よそう", "expectation; forecast"],
    ["実際", "じっさい", "actual; in reality"],
    ["直接", "ちょくせつ", "directly"],
    ["完成", "かんせい", "completion"],
    ["苦労", "くろう", "hardship"],
    ["集中", "しゅうちゅう", "concentration"],
    ["比較", "ひかく", "comparison"]
  ],
  N2: [
    ["曖昧", "あいまい", "vague; ambiguous"],
    ["矛盾", "むじゅん", "contradiction"],
    ["妥協", "だきょう", "compromise"],
    ["謙虚", "けんきょ", "humble; modest"],
    ["促す", "うながす", "to urge; prompt"],
    ["覆す", "くつがえす", "to overturn"],
    ["抽象", "ちゅうしょう", "abstraction"],
    ["推測", "すいそく", "inference; guess"],
    ["葛藤", "かっとう", "conflict; struggle"],
    ["概念", "がいねん", "concept"],
    ["維持", "いじ", "maintenance"],
    ["傾向", "けいこう", "tendency"],
    ["検討", "けんとう", "consideration; examination"],
    ["削減", "さくげん", "reduction; cutback"],
    ["実施", "じっし", "implementation"],
    ["主張", "しゅちょう", "claim; assertion"],
    ["制限", "せいげん", "restriction"],
    ["対象", "たいしょう", "target; object"],
    ["達成", "たっせい", "achievement"],
    ["適切", "てきせつ", "appropriate"],
    ["導入", "どうにゅう", "introduction"],
    ["評価", "ひょうか", "evaluation"],
    ["分析", "ぶんせき", "analysis"],
    ["方針", "ほうしん", "policy; plan"],
    ["要請", "ようせい", "request; demand"],
    ["利益", "りえき", "profit; benefit"],
    ["論理", "ろんり", "logic"],
    ["規模", "きぼ", "scale; scope"],
    ["欠点", "けってん", "fault; weakness"],
    ["解釈", "かいしゃく", "interpretation"]
  ],
  N1: [
    ["精緻", "せいち", "precise; elaborate"],
    ["示唆", "しさ", "suggestion; implication"],
    ["脆弱", "ぜいじゃく", "fragile; vulnerable"],
    ["恣意的", "しいてき", "arbitrary"],
    ["俯瞰", "ふかん", "overview; broad perspective"],
    ["齟齬", "そご", "discrepancy; mismatch"],
    ["享受", "きょうじゅ", "enjoyment; reception"],
    ["顕著", "けんちょ", "remarkable; conspicuous"],
    ["是正", "ぜせい", "correction; rectification"],
    ["多岐", "たき", "wide variety"],
    ["端的", "たんてき", "plain; direct"],
    ["抽出", "ちゅうしゅつ", "extraction"],
    ["踏襲", "とうしゅう", "following; adoption"],
    ["破綻", "はたん", "collapse; failure"],
    ["包括", "ほうかつ", "inclusion; comprehensiveness"],
    ["模索", "もさく", "groping for; searching"],
    ["誘致", "ゆうち", "attraction; invitation"],
    ["抑制", "よくせい", "restraint; suppression"],
    ["了承", "りょうしょう", "acknowledgement; consent"],
    ["緻密", "ちみつ", "meticulous; precise"],
    ["軋轢", "あつれき", "friction; discord"],
    ["隠蔽", "いんぺい", "concealment"],
    ["介入", "かいにゅう", "intervention"],
    ["懐柔", "かいじゅう", "appeasement; winning over"],
    ["該当", "がいとう", "correspondence; applicability"],
    ["確執", "かくしつ", "discord; antagonism"],
    ["欺瞞", "ぎまん", "deception"],
    ["拘泥", "こうでい", "adherence; fixation"],
    ["斟酌", "しんしゃく", "consideration; allowance"],
    ["蔑ろ", "ないがしろ", "neglect; disregard"]
  ],
  "Beyond N1": [
    ["幽体離脱", "ゆうたいりだつ", "out-of-body experience"],
    ["瑣末", "さまつ", "trivial; minor"],
    ["忖度", "そんたく", "conjecture; reading someone's intent"],
    ["膠着", "こうちゃく", "deadlock; stalemate"],
    ["敷衍", "ふえん", "elaboration; expansion"],
    ["邂逅", "かいこう", "chance encounter"],
    ["逡巡", "しゅんじゅん", "hesitation"],
    ["慧眼", "けいがん", "discerning eye"],
    ["欺瞞的", "ぎまんてき", "deceptive"],
    ["蓋然性", "がいぜんせい", "probability"],
    ["形骸化", "けいがいか", "becoming a mere formality"],
    ["慇懃", "いんぎん", "courteous; polite"],
    ["詭弁", "きべん", "sophistry"],
    ["矜持", "きょうじ", "pride; dignity"],
    ["憂慮", "ゆうりょ", "anxiety; concern"],
    ["僭越", "せんえつ", "presumptuous"],
    ["趨勢", "すうせい", "trend; tendency"],
    ["寡聞", "かぶん", "limited information"],
    ["喧伝", "けんでん", "publicity; propaganda"],
    ["拙速", "せっそく", "hasty; rough-and-ready"],
    ["流布", "るふ", "circulation; dissemination"],
    ["反駁", "はんばく", "refutation"],
    ["揶揄", "やゆ", "teasing; ridicule"],
    ["耽溺", "たんでき", "indulgence; addiction"],
    ["跋扈", "ばっこ", "rampancy"],
    ["毀誉褒貶", "きよほうへん", "praise and criticism"],
    ["不撓不屈", "ふとうふくつ", "unyielding; indomitable"],
    ["換骨奪胎", "かんこつだったい", "adaptation; reworking"],
    ["牽強付会", "けんきょうふかい", "far-fetched argument"],
    ["有象無象", "うぞうむぞう", "riffraff; all sorts"],
    ["森羅万象", "しんらばんしょう", "all things in nature"]
  ]
};

const supplementalVocabByLevel = {
  "Pre-N5": [
    ["か", "か", "hiragana: ka"],
    ["き", "き", "hiragana: ki"],
    ["く", "く", "hiragana: ku"],
    ["け", "け", "hiragana: ke"],
    ["こ", "こ", "hiragana: ko"],
    ["さ", "さ", "hiragana: sa"],
    ["し", "し", "hiragana: shi"],
    ["す", "す", "hiragana: su"],
    ["せ", "せ", "hiragana: se"],
    ["そ", "そ", "hiragana: so"],
    ["た", "た", "hiragana: ta"],
    ["ち", "ち", "hiragana: chi"],
    ["つ", "つ", "hiragana: tsu"],
    ["て", "て", "hiragana: te"],
    ["と", "と", "hiragana: to"],
    ["な", "な", "hiragana: na"],
    ["に", "に", "hiragana: ni"],
    ["ぬ", "ぬ", "hiragana: nu"],
    ["ね", "ね", "hiragana: ne"],
    ["の", "の", "hiragana: no"],
    ["四", "よん", "four"],
    ["五", "ご", "five"],
    ["六", "ろく", "six"],
    ["七", "なな", "seven"],
    ["八", "はち", "eight"],
    ["九", "きゅう", "nine"],
    ["十", "じゅう", "ten"],
    ["父", "ちち", "father"],
    ["母", "はは", "mother"],
    ["子", "こ", "child"],
    ["男", "おとこ", "man"],
    ["女", "おんな", "woman"],
    ["目", "め", "eye"],
    ["耳", "みみ", "ear"],
    ["足", "あし", "foot; leg"],
    ["今", "いま", "now"],
    ["車", "くるま", "car"],
    ["家", "いえ", "house"],
    ["外", "そと", "outside"],
    ["何", "なに", "what"]
  ],
  N5: [
    ["会う", "あう", "to meet"],
    ["開ける", "あける", "to open"],
    ["遊ぶ", "あそぶ", "to play"],
    ["洗う", "あらう", "to wash"],
    ["歩く", "あるく", "to walk"],
    ["言う", "いう", "to say"],
    ["入る", "はいる", "to enter"],
    ["歌う", "うたう", "to sing"],
    ["売る", "うる", "to sell"],
    ["起きる", "おきる", "to wake up"],
    ["教える", "おしえる", "to teach"],
    ["終わる", "おわる", "to end"],
    ["帰る", "かえる", "to return home"],
    ["かかる", "かかる", "to take time; cost"],
    ["貸す", "かす", "to lend"],
    ["借りる", "かりる", "to borrow"],
    ["切る", "きる", "to cut"],
    ["来る", "くる", "to come"],
    ["消す", "けす", "to erase; turn off"],
    ["困る", "こまる", "to be troubled"],
    ["咲く", "さく", "to bloom"],
    ["閉める", "しめる", "to close"],
    ["知る", "しる", "to know"],
    ["住む", "すむ", "to live"],
    ["座る", "すわる", "to sit"],
    ["立つ", "たつ", "to stand"],
    ["作る", "つくる", "to make"],
    ["使う", "つかう", "to use"],
    ["着く", "つく", "to arrive"],
    ["飛ぶ", "とぶ", "to fly"],
    ["寝る", "ねる", "to sleep"],
    ["乗る", "のる", "to ride"],
    ["話す", "はなす", "to speak"],
    ["待つ", "まつ", "to wait"],
    ["持つ", "もつ", "to hold"],
    ["休む", "やすむ", "to rest"],
    ["分かる", "わかる", "to understand"],
    ["悪い", "わるい", "bad"],
    ["赤い", "あかい", "red"],
    ["青い", "あおい", "blue"]
  ],
  N4: [
    ["安心", "あんしん", "relief; peace of mind"],
    ["安全", "あんぜん", "safety"],
    ["意見", "いけん", "opinion"],
    ["以内", "いない", "within"],
    ["受付", "うけつけ", "reception desk"],
    ["運転", "うんてん", "driving"],
    ["お祝い", "おいわい", "celebration"],
    ["お土産", "おみやげ", "souvenir"],
    ["会場", "かいじょう", "venue"],
    ["会議", "かいぎ", "meeting"],
    ["会話", "かいわ", "conversation"],
    ["科学", "かがく", "science"],
    ["火事", "かじ", "fire; fire accident"],
    ["格好", "かっこう", "appearance; shape"],
    ["必ず", "かならず", "without fail"],
    ["悲しい", "かなしい", "sad"],
    ["簡単", "かんたん", "simple; easy"],
    ["危険", "きけん", "danger"],
    ["季節", "きせつ", "season"],
    ["決して", "けっして", "never"],
    ["原因", "げんいん", "cause"],
    ["交通", "こうつう", "traffic"],
    ["故障", "こしょう", "breakdown"],
    ["細かい", "こまかい", "small; detailed"],
    ["最近", "さいきん", "recently"],
    ["最後", "さいご", "last; final"],
    ["最初", "さいしょ", "first; beginning"],
    ["探す", "さがす", "to search for"],
    ["寂しい", "さびしい", "lonely"],
    ["市民", "しみん", "citizen"],
    ["自由", "じゆう", "freedom"],
    ["習慣", "しゅうかん", "custom; habit"],
    ["出発", "しゅっぱつ", "departure"],
    ["紹介", "しょうかい", "introduction"],
    ["将来", "しょうらい", "future"],
    ["親切", "しんせつ", "kindness"],
    ["生活", "せいかつ", "daily life"],
    ["世界", "せかい", "world"],
    ["卒業", "そつぎょう", "graduation"],
    ["大切", "たいせつ", "important"]
  ],
  N3: [
    ["明らか", "あきらか", "clear; obvious"],
    ["与える", "あたえる", "to give; provide"],
    ["扱う", "あつかう", "to handle"],
    ["現れる", "あらわれる", "to appear"],
    ["意識", "いしき", "consciousness"],
    ["一方", "いっぽう", "one side; on the other hand"],
    ["移動", "いどう", "movement; transfer"],
    ["失う", "うしなう", "to lose"],
    ["得る", "える", "to obtain"],
    ["応援", "おうえん", "support; cheering"],
    ["お互い", "おたがい", "each other"],
    ["解放", "かいほう", "release; liberation"],
    ["確認", "かくにん", "confirmation"],
    ["活躍", "かつやく", "active role"],
    ["可能性", "かのうせい", "possibility"],
    ["我慢", "がまん", "patience; endurance"],
    ["完成", "かんせい", "completion"],
    ["観察", "かんさつ", "observation"],
    ["感情", "かんじょう", "emotion"],
    ["管理", "かんり", "management"],
    ["期待", "きたい", "expectation"],
    ["協力", "きょうりょく", "cooperation"],
    ["禁止", "きんし", "prohibition"],
    ["訓練", "くんれん", "training"],
    ["計画", "けいかく", "plan"],
    ["継続", "けいぞく", "continuation"],
    ["健康", "けんこう", "health"],
    ["限界", "げんかい", "limit"],
    ["行動", "こうどう", "action; behavior"],
    ["交換", "こうかん", "exchange"],
    ["広告", "こうこく", "advertisement"],
    ["幸福", "こうふく", "happiness"],
    ["国際", "こくさい", "international"],
    ["作業", "さぎょう", "work; operation"],
    ["支配", "しはい", "control; domination"],
    ["実現", "じつげん", "realization"],
    ["重要", "じゅうよう", "important"],
    ["瞬間", "しゅんかん", "moment"],
    ["証明", "しょうめい", "proof"],
    ["信頼", "しんらい", "trust"]
  ],
  N2: [
    ["圧倒", "あっとう", "overwhelm"],
    ["安定", "あんてい", "stability"],
    ["依頼", "いらい", "request"],
    ["違反", "いはん", "violation"],
    ["引用", "いんよう", "quotation; citation"],
    ["運営", "うんえい", "operation; management"],
    ["営業", "えいぎょう", "business; sales"],
    ["応募", "おうぼ", "application"],
    ["応用", "おうよう", "application; practical use"],
    ["可決", "かけつ", "approval; passage"],
    ["課題", "かだい", "task; issue"],
    ["活用", "かつよう", "practical use"],
    ["仮定", "かてい", "assumption"],
    ["環境", "かんきょう", "environment"],
    ["監督", "かんとく", "supervision; director"],
    ["関連", "かんれん", "relation; connection"],
    ["企業", "きぎょう", "company; enterprise"],
    ["基準", "きじゅん", "standard"],
    ["機能", "きのう", "function"],
    ["義務", "ぎむ", "duty; obligation"],
    ["供給", "きょうきゅう", "supply"],
    ["強調", "きょうちょう", "emphasis"],
    ["許可", "きょか", "permission"],
    ["均衡", "きんこう", "balance"],
    ["具体", "ぐたい", "concrete; specific"],
    ["契約", "けいやく", "contract"],
    ["経済", "けいざい", "economy"],
    ["警告", "けいこく", "warning"],
    ["継承", "けいしょう", "inheritance; succession"],
    ["掲載", "けいさい", "publication; listing"],
    ["欠陥", "けっかん", "defect"],
    ["権利", "けんり", "right; privilege"],
    ["貢献", "こうけん", "contribution"],
    ["構成", "こうせい", "composition"],
    ["効率", "こうりつ", "efficiency"],
    ["克服", "こくふく", "overcoming"],
    ["誤解", "ごかい", "misunderstanding"],
    ["採用", "さいよう", "adoption; hiring"],
    ["作成", "さくせい", "creation; preparation"],
    ["削除", "さくじょ", "deletion"]
  ],
  N1: [
    ["曖昧模糊", "あいまいもこ", "vague; obscure"],
    ["斡旋", "あっせん", "mediation; arrangement"],
    ["一概に", "いちがいに", "unconditionally; generally"],
    ["一律", "いちりつ", "uniformity"],
    ["一括", "いっかつ", "batch; lumping together"],
    ["逸脱", "いつだつ", "deviation"],
    ["円滑", "えんかつ", "smooth; harmonious"],
    ["横領", "おうりょう", "embezzlement"],
    ["概略", "がいりゃく", "outline; summary"],
    ["棄却", "ききゃく", "rejection; dismissal"],
    ["危惧", "きぐ", "fear; apprehension"],
    ["起伏", "きふく", "ups and downs"],
    ["享有", "きょうゆう", "possession; enjoyment"],
    ["恐縮", "きょうしゅく", "feeling obliged;恐縮"],
    ["均衡", "きんこう", "equilibrium"],
    ["駆使", "くし", "making full use of"],
    ["屈折", "くっせつ", "bending; refraction"],
    ["形勢", "けいせい", "situation; prospects"],
    ["軽率", "けいそつ", "rash; careless"],
    ["懸念", "けねん", "concern; worry"],
    ["厳密", "げんみつ", "strict; precise"],
    ["控除", "こうじょ", "deduction"],
    ["巧妙", "こうみょう", "skillful; clever"],
    ["克明", "こくめい", "detailed; faithful"],
    ["誇張", "こちょう", "exaggeration"],
    ["根底", "こんてい", "foundation; root"],
    ["錯覚", "さっかく", "illusion; misconception"],
    ["暫定", "ざんてい", "temporary; provisional"],
    ["思索", "しさく", "speculation; contemplation"],
    ["自粛", "じしゅく", "self-restraint"],
    ["収束", "しゅうそく", "convergence; settling"],
    ["迅速", "じんそく", "swift; prompt"],
    ["推移", "すいい", "transition; change"],
    ["是非", "ぜひ", "right and wrong; by all means"],
    ["切実", "せつじつ", "urgent; earnest"],
    ["潜在", "せんざい", "latent; potential"],
    ["阻害", "そがい", "obstruction"],
    ["妥当", "だとう", "valid; reasonable"],
    ["断定", "だんてい", "assertion; conclusion"],
    ["緻密", "ちみつ", "meticulous; precise"]
  ],
  "Beyond N1": [
    ["阿鼻叫喚", "あびきょうかん", "utter chaos; pandemonium"],
    ["暗中模索", "あんちゅうもさく", "groping in the dark"],
    ["意気軒昂", "いきけんこう", "in high spirits"],
    ["異口同音", "いくどうおん", "unanimously"],
    ["一蓮托生", "いちれんたくしょう", "shared fate"],
    ["因果応報", "いんがおうほう", "karma; poetic justice"],
    ["右往左往", "うおうさおう", "running about in confusion"],
    ["海千山千", "うみせんやません", "worldly-wise"],
    ["紆余曲折", "うよきょくせつ", "twists and turns"],
    ["雲散霧消", "うんさんむしょう", "vanishing completely"],
    ["温故知新", "おんこちしん", "learning from the past"],
    ["画竜点睛", "がりょうてんせい", "finishing touch"],
    ["侃侃諤諤", "かんかんがくがく", "heated debate"],
    ["完全無欠", "かんぜんむけつ", "flawless"],
    ["疑心暗鬼", "ぎしんあんき", "suspicion breeding fear"],
    ["牛飲馬食", "ぎゅういんばしょく", "heavy eating and drinking"],
    ["空前絶後", "くうぜんぜつご", "unprecedented and unrepeatable"],
    ["群雄割拠", "ぐんゆうかっきょ", "rival warlords"],
    ["軽挙妄動", "けいきょもうどう", "rash action"],
    ["言語道断", "ごんごどうだん", "outrageous; inexcusable"],
    ["才色兼備", "さいしょくけんび", "beauty and talent"],
    ["自画自賛", "じがじさん", "self-praise"],
    ["試行錯誤", "しこうさくご", "trial and error"],
    ["支離滅裂", "しりめつれつ", "incoherent"],
    ["針小棒大", "しんしょうぼうだい", "exaggeration"],
    ["晴耕雨読", "せいこううどく", "quiet country life"],
    ["青天白日", "せいてんはくじつ", "clear innocence"],
    ["千載一遇", "せんざいいちぐう", "once-in-a-lifetime chance"],
    ["多種多様", "たしゅたよう", "wide variety"],
    ["単刀直入", "たんとうちょくにゅう", "straight to the point"],
    ["適材適所", "てきざいてきしょ", "right person in the right place"],
    ["東奔西走", "とうほんせいそう", "busy running around"],
    ["日進月歩", "にっしんげっぽ", "steady progress"],
    ["馬耳東風", "ばじとうふう", "turning a deaf ear"],
    ["八方美人", "はっぽうびじん", "people pleaser"],
    ["半信半疑", "はんしんはんぎ", "half in doubt"],
    ["本末転倒", "ほんまつてんとう", "confusing means and ends"],
    ["無我夢中", "むがむちゅう", "absorbed; frantic"],
    ["優柔不断", "ゆうじゅうふだん", "indecisive"],
    ["竜頭蛇尾", "りゅうとうだび", "anticlimax"]
  ]
};

const expandedVocabByLevel = {
  "Pre-N5": [
    ["は", "は", "hiragana: ha"],
    ["ひ", "ひ", "hiragana: hi"],
    ["ふ", "ふ", "hiragana: fu"],
    ["へ", "へ", "hiragana: he"],
    ["ほ", "ほ", "hiragana: ho"],
    ["ま", "ま", "hiragana: ma"],
    ["み", "み", "hiragana: mi"],
    ["む", "む", "hiragana: mu"],
    ["め", "め", "hiragana: me"],
    ["も", "も", "hiragana: mo"],
    ["や", "や", "hiragana: ya"],
    ["ゆ", "ゆ", "hiragana: yu"],
    ["よ", "よ", "hiragana: yo"],
    ["ら", "ら", "hiragana: ra"],
    ["り", "り", "hiragana: ri"],
    ["る", "る", "hiragana: ru"],
    ["れ", "れ", "hiragana: re"],
    ["ろ", "ろ", "hiragana: ro"],
    ["わ", "わ", "hiragana: wa"],
    ["ん", "ん", "hiragana: n"],
    ["百", "ひゃく", "hundred"],
    ["千", "せん", "thousand"],
    ["先", "さき", "ahead; previous"],
    ["後", "あと", "after; later"],
    ["時", "とき", "time"],
    ["年", "とし", "year"],
    ["店", "みせ", "shop"],
    ["道", "みち", "road; way"],
    ["空", "そら", "sky"],
    ["雨", "あめ", "rain"]
  ],
  N5: [
    ["暑い", "あつい", "hot"],
    ["寒い", "さむい", "cold"],
    ["温かい", "あたたかい", "warm"],
    ["忙しい", "いそがしい", "busy"],
    ["美味しい", "おいしい", "delicious"],
    ["重い", "おもい", "heavy"],
    ["軽い", "かるい", "lightweight"],
    ["暗い", "くらい", "dark"],
    ["黒い", "くろい", "black"],
    ["白い", "しろい", "white"],
    ["近い", "ちかい", "near"],
    ["遠い", "とおい", "far"],
    ["長い", "ながい", "long"],
    ["短い", "みじかい", "short"],
    ["広い", "ひろい", "wide"],
    ["狭い", "せまい", "narrow"],
    ["丸い", "まるい", "round"],
    ["難しい", "むずかしい", "difficult"],
    ["易しい", "やさしい", "easy; gentle"],
    ["若い", "わかい", "young"],
    ["映画", "えいが", "movie"],
    ["音楽", "おんがく", "music"],
    ["会社", "かいしゃ", "company"],
    ["教室", "きょうしつ", "classroom"],
    ["銀行", "ぎんこう", "bank"],
    ["国", "くに", "country"],
    ["言葉", "ことば", "word; language"],
    ["時間", "じかん", "time; hour"],
    ["写真", "しゃしん", "photograph"],
    ["新聞", "しんぶん", "newspaper"]
  ],
  N4: [
    ["大体", "だいたい", "roughly; mostly"],
    ["台風", "たいふう", "typhoon"],
    ["正しい", "ただしい", "correct"],
    ["例えば", "たとえば", "for example"],
    ["男性", "だんせい", "male"],
    ["女性", "じょせい", "female"],
    ["注意", "ちゅうい", "attention; warning"],
    ["中学校", "ちゅうがっこう", "junior high school"],
    ["途中", "とちゅう", "on the way"],
    ["特に", "とくに", "especially"],
    ["届ける", "とどける", "to deliver"],
    ["泊める", "とめる", "to let stay"],
    ["直す", "なおす", "to fix"],
    ["治る", "なおる", "to recover"],
    ["泣く", "なく", "to cry"],
    ["亡くなる", "なくなる", "to pass away"],
    ["投げる", "なげる", "to throw"],
    ["慣れる", "なれる", "to get used to"],
    ["匂い", "におい", "smell"],
    ["苦い", "にがい", "bitter"],
    ["逃げる", "にげる", "to escape"],
    ["入院", "にゅういん", "hospitalization"],
    ["入学", "にゅうがく", "school admission"],
    ["似る", "にる", "to resemble"],
    ["濡れる", "ぬれる", "to get wet"],
    ["眠い", "ねむい", "sleepy"],
    ["残る", "のこる", "to remain"],
    ["乗り換える", "のりかえる", "to transfer"],
    ["拝見", "はいけん", "humble seeing"],
    ["運ぶ", "はこぶ", "to carry"]
  ],
  N3: [
    ["制御", "せいぎょ", "control"],
    ["制度", "せいど", "system; institution"],
    ["専門", "せんもん", "specialty"],
    ["操作", "そうさ", "operation; handling"],
    ["想像", "そうぞう", "imagination"],
    ["存在", "そんざい", "existence"],
    ["対応", "たいおう", "response; correspondence"],
    ["対象", "たいしょう", "target; object"],
    ["達成", "たっせい", "achievement"],
    ["単純", "たんじゅん", "simple"],
    ["担当", "たんとう", "being in charge"],
    ["地域", "ちいき", "region"],
    ["知識", "ちしき", "knowledge"],
    ["調査", "ちょうさ", "investigation"],
    ["通信", "つうしん", "communication"],
    ["提出", "ていしゅつ", "submission"],
    ["程度", "ていど", "degree; extent"],
    ["適用", "てきよう", "application"],
    ["展開", "てんかい", "development; unfolding"],
    ["伝統", "でんとう", "tradition"],
    ["到着", "とうちゃく", "arrival"],
    ["突然", "とつぜん", "suddenly"],
    ["努力", "どりょく", "effort"],
    ["内容", "ないよう", "contents"],
    ["納得", "なっとく", "understanding; acceptance"],
    ["日常", "にちじょう", "daily life"],
    ["認識", "にんしき", "recognition"],
    ["能力", "のうりょく", "ability"],
    ["判断", "はんだん", "judgment"],
    ["表現", "ひょうげん", "expression"]
  ],
  N2: [
    ["財政", "ざいせい", "public finance"],
    ["賛否", "さんぴ", "pros and cons"],
    ["視点", "してん", "viewpoint"],
    ["指摘", "してき", "pointing out"],
    ["収集", "しゅうしゅう", "collection"],
    ["修正", "しゅうせい", "correction; revision"],
    ["縮小", "しゅくしょう", "reduction; shrinking"],
    ["主催", "しゅさい", "sponsorship; hosting"],
    ["瞬時", "しゅんじ", "instant"],
    ["承認", "しょうにん", "approval"],
    ["消費", "しょうひ", "consumption"],
    ["証拠", "しょうこ", "evidence"],
    ["象徴", "しょうちょう", "symbol"],
    ["職員", "しょくいん", "staff member"],
    ["処理", "しょり", "processing"],
    ["申請", "しんせい", "application"],
    ["審査", "しんさ", "screening; review"],
    ["人材", "じんざい", "human resources"],
    ["推進", "すいしん", "promotion"],
    ["水準", "すいじゅん", "level; standard"],
    ["整備", "せいび", "maintenance; improvement"],
    ["請求", "せいきゅう", "claim; billing"],
    ["製造", "せいぞう", "manufacturing"],
    ["選択", "せんたく", "selection"],
    ["前提", "ぜんてい", "premise"],
    ["創造", "そうぞう", "creation"],
    ["相続", "そうぞく", "inheritance"],
    ["促進", "そくしん", "promotion"],
    ["損害", "そんがい", "damage"],
    ["妥結", "だけつ", "agreement; settlement"]
  ],
  N1: [
    ["抽象的", "ちゅうしょうてき", "abstract"],
    ["著しい", "いちじるしい", "remarkable"],
    ["陳腐", "ちんぷ", "stale; trite"],
    ["追及", "ついきゅう", "pursuit; questioning"],
    ["追跡", "ついせき", "tracking"],
    ["徹底", "てってい", "thoroughness"],
    ["転換", "てんかん", "conversion; shift"],
    ["動揺", "どうよう", "disturbance; unrest"],
    ["独自", "どくじ", "original; independent"],
    ["難航", "なんこう", "difficult progress"],
    ["任意", "にんい", "optional; voluntary"],
    ["抜本", "ばっぽん", "fundamental; radical"],
    ["反響", "はんきょう", "reaction; response"],
    ["反発", "はんぱつ", "opposition; backlash"],
    ["悲観", "ひかん", "pessimism"],
    ["必然", "ひつぜん", "inevitability"],
    ["普遍", "ふへん", "universality"],
    ["返還", "へんかん", "return; restoration"],
    ["補償", "ほしょう", "compensation"],
    ["本質", "ほんしつ", "essence"],
    ["摩擦", "まさつ", "friction"],
    ["満場", "まんじょう", "whole audience"],
    ["矛先", "ほこさき", "target of attack"],
    ["模倣", "もほう", "imitation"],
    ["優位", "ゆうい", "superiority"],
    ["融通", "ゆうずう", "flexibility"],
    ["要因", "よういん", "factor"],
    ["抑圧", "よくあつ", "oppression"],
    ["類推", "るいすい", "analogy"],
    ["連携", "れんけい", "cooperation; coordination"]
  ],
  "Beyond N1": [
    ["一騎当千", "いっきとうせん", "matchless warrior"],
    ["一視同仁", "いっしどうじん", "equal treatment"],
    ["一触即発", "いっしょくそくはつ", "touch-and-go situation"],
    ["一刀両断", "いっとうりょうだん", "decisive action"],
    ["一網打尽", "いちもうだじん", "rounding up all at once"],
    ["栄枯盛衰", "えいこせいすい", "rise and fall"],
    ["岡目八目", "おかめはちもく", "bystander's advantage"],
    ["隔靴掻痒", "かっかそうよう", "frustrating indirectness"],
    ["花鳥風月", "かちょうふうげつ", "beauties of nature"],
    ["換骨奪胎", "かんこつだったい", "creative adaptation"],
    ["気宇壮大", "きうそうだい", "grand scale"],
    ["起承転結", "きしょうてんけつ", "four-part structure"],
    ["旧態依然", "きゅうたいいぜん", "unchanged old ways"],
    ["玉石混交", "ぎょくせきこんこう", "mixture of good and bad"],
    ["空理空論", "くうりくうろん", "impractical theory"],
    ["鶏口牛後", "けいこうぎゅうご", "better head of chicken than tail of ox"],
    ["言行一致", "げんこういっち", "actions matching words"],
    ["荒唐無稽", "こうとうむけい", "absurd; nonsensical"],
    ["古今東西", "ここんとうざい", "all times and places"],
    ["五里霧中", "ごりむちゅう", "lost in a fog"],
    ["三寒四温", "さんかんしおん", "alternating cold and warm days"],
    ["三位一体", "さんみいったい", "trinity; three-in-one"],
    ["自業自得", "じごうじとく", "reaping what one sows"],
    ["七転八倒", "しちてんばっとう", "writhing in agony"],
    ["縦横無尽", "じゅうおうむじん", "freely in all directions"],
    ["諸行無常", "しょぎょうむじょう", "impermanence of all things"],
    ["泰然自若", "たいぜんじじゃく", "calm and composed"],
    ["大器晩成", "たいきばんせい", "late bloomer"],
    ["朝三暮四", "ちょうさんぼし", "being fooled by superficial differences"],
    ["徹頭徹尾", "てっとうてつび", "from start to finish"]
  ]
};

const mediaVocabByLevel = {
  "Pre-N5": [
    ["僕", "ぼく", "I; me"],
    ["俺", "おれ", "I; me"],
    ["君", "きみ", "you"],
    ["お前", "おまえ", "you"],
    ["奴", "やつ", "guy; thing"],
    ["誰", "だれ", "who"],
    ["なぜ", "なぜ", "why"],
    ["ほら", "ほら", "look; see"],
    ["うん", "うん", "yeah"],
    ["いや", "いや", "no; unpleasant"]
  ],
  N5: [
    ["本当", "ほんとう", "truth; really"],
    ["嘘", "うそ", "lie"],
    ["好き", "すき", "like; fond of"],
    ["嫌い", "きらい", "dislike"],
    ["強い", "つよい", "strong"],
    ["弱い", "よわい", "weak"],
    ["怖い", "こわい", "scary"],
    ["死ぬ", "しぬ", "to die"],
    ["殺す", "ころす", "to kill"],
    ["助ける", "たすける", "to help; save"],
    ["守る", "まもる", "to protect"],
    ["戦う", "たたかう", "to fight"],
    ["勝つ", "かつ", "to win"],
    ["負ける", "まける", "to lose"],
    ["笑う", "わらう", "to laugh"]
  ],
  N4: [
    ["事件", "じけん", "incident; case"],
    ["秘密", "ひみつ", "secret"],
    ["夢", "ゆめ", "dream"],
    ["涙", "なみだ", "tears"],
    ["笑顔", "えがお", "smile"],
    ["命", "いのち", "life"],
    ["心", "こころ", "heart; mind"],
    ["敵", "てき", "enemy"],
    ["味方", "みかた", "ally"],
    ["仲間", "なかま", "companion"],
    ["勇気", "ゆうき", "courage"],
    ["運命", "うんめい", "fate"],
    ["魔法", "まほう", "magic"],
    ["剣", "けん", "sword"],
    ["悪魔", "あくま", "devil; demon"]
  ],
  N3: [
    ["正体", "しょうたい", "true identity"],
    ["作戦", "さくせん", "strategy; operation"],
    ["攻撃", "こうげき", "attack"],
    ["防御", "ぼうぎょ", "defense"],
    ["反撃", "はんげき", "counterattack"],
    ["救う", "すくう", "to save; rescue"],
    ["裏切る", "うらぎる", "to betray"],
    ["隠す", "かくす", "to hide"],
    ["叫ぶ", "さけぶ", "to shout"],
    ["震える", "ふるえる", "to tremble"],
    ["輝く", "かがやく", "to shine"],
    ["呪い", "のろい", "curse"],
    ["封印", "ふういん", "seal; sealing"],
    ["伝説", "でんせつ", "legend"],
    ["主人公", "しゅじんこう", "protagonist"]
  ],
  N2: [
    ["覚悟", "かくご", "resolve; readiness"],
    ["衝撃", "しょうげき", "shock; impact"],
    ["絶望", "ぜつぼう", "despair"],
    ["復讐", "ふくしゅう", "revenge"],
    ["犠牲", "ぎせい", "sacrifice"],
    ["脅威", "きょうい", "threat"],
    ["真実", "しんじつ", "truth"],
    ["幻想", "げんそう", "illusion; fantasy"],
    ["闇", "やみ", "darkness"],
    ["魂", "たましい", "soul"],
    ["絆", "きずな", "bond"],
    ["宿命", "しゅくめい", "destiny"],
    ["陰謀", "いんぼう", "conspiracy"],
    ["魔術", "まじゅつ", "sorcery"],
    ["蘇る", "よみがえる", "to be resurrected"]
  ],
  N1: [
    ["咆哮", "ほうこう", "roar"],
    ["憎悪", "ぞうお", "hatred"],
    ["怨念", "おんねん", "grudge; resentment"],
    ["執念", "しゅうねん", "tenacity; obsession"],
    ["滅亡", "めつぼう", "ruin; destruction"],
    ["覚醒", "かくせい", "awakening"],
    ["輪廻", "りんね", "reincarnation"],
    ["宿敵", "しゅくてき", "old enemy"],
    ["傀儡", "かいらい", "puppet"],
    ["禁忌", "きんき", "taboo"],
    ["聖域", "せいいき", "sanctuary"],
    ["結界", "けっかい", "barrier"],
    ["詠唱", "えいしょう", "chanting"],
    ["呪縛", "じゅばく", "curse; binding"],
    ["深淵", "しんえん", "abyss"]
  ],
  "Beyond N1": [
    ["魑魅魍魎", "ちみもうりょう", "evil spirits; monsters"],
    ["百鬼夜行", "ひゃっきやこう", "night parade of demons"],
    ["黄泉", "よみ", "underworld"],
    ["冥府", "めいふ", "realm of the dead"],
    ["奈落", "ならく", "abyss; hell"],
    ["業火", "ごうか", "hellfire"],
    ["瘴気", "しょうき", "miasma"],
    ["禍々しい", "まがまがしい", "ominous; sinister"],
    ["慟哭", "どうこく", "wailing; lamentation"],
    ["蹂躙", "じゅうりん", "trampling; overrunning"],
    ["殲滅", "せんめつ", "annihilation"],
    ["悠久", "ゆうきゅう", "eternity"],
    ["泡沫", "うたかた", "transience; bubble"],
    ["幽玄", "ゆうげん", "mysterious profundity"],
    ["黙示録", "もくしろく", "apocalypse"]
  ]
};

const fictionVocabByLevel = {
  "Pre-N5": [
    ["あいつ", "あいつ", "that guy"],
    ["こいつ", "こいつ", "this guy"],
    ["そいつ", "そいつ", "that guy"],
    ["何故", "なぜ", "why"],
    ["何も", "なにも", "nothing"],
    ["誰も", "だれも", "nobody; everyone"],
    ["どれ", "どれ", "which"],
    ["いつ", "いつ", "when"],
    ["もし", "もし", "if"],
    ["まさか", "まさか", "no way; surely not"],
    ["やっと", "やっと", "finally"],
    ["きっと", "きっと", "surely"],
    ["ずっと", "ずっと", "the whole time"],
    ["ちょっと", "ちょっと", "a little; hey"],
    ["なんて", "なんて", "such; what a"],
    ["なんか", "なんか", "somehow; like"],
    ["だめ", "だめ", "no good"],
    ["無理", "むり", "impossible"],
    ["平気", "へいき", "okay; calm"],
    ["大丈夫", "だいじょうぶ", "all right"]
  ],
  N5: [
    ["頼む", "たのむ", "to ask; beg"],
    ["黙る", "だまる", "to be silent"],
    ["叫ぶ", "さけぶ", "to shout"],
    ["走る", "はしる", "to run"],
    ["探す", "さがす", "to search"],
    ["拾う", "ひろう", "to pick up"],
    ["捨てる", "すてる", "to throw away"],
    ["決める", "きめる", "to decide"],
    ["信じる", "しんじる", "to believe"],
    ["忘れる", "わすれる", "to forget"],
    ["覚える", "おぼえる", "to remember"],
    ["消える", "きえる", "to disappear"],
    ["落ちる", "おちる", "to fall"],
    ["壊す", "こわす", "to break"],
    ["壊れる", "こわれる", "to break"],
    ["届く", "とどく", "to reach"],
    ["渡す", "わたす", "to hand over"],
    ["変わる", "かわる", "to change"],
    ["変える", "かえる", "to change something"],
    ["違う", "ちがう", "to differ; be wrong"]
  ],
  N4: [
    ["気配", "けはい", "presence; sign"],
    ["影", "かげ", "shadow"],
    ["光", "ひかり", "light"],
    ["炎", "ほのお", "flame"],
    ["星", "ほし", "star"],
    ["闘い", "たたかい", "battle"],
    ["勝利", "しょうり", "victory"],
    ["敗北", "はいぼく", "defeat"],
    ["傷", "きず", "wound"],
    ["血", "ち", "blood"],
    ["痛み", "いたみ", "pain"],
    ["恐怖", "きょうふ", "fear"],
    ["怒り", "いかり", "anger"],
    ["悲しみ", "かなしみ", "sadness"],
    ["願い", "ねがい", "wish"],
    ["祈り", "いのり", "prayer"],
    ["声", "こえ", "voice"],
    ["姿", "すがた", "figure; appearance"],
    ["腕", "うで", "arm; skill"],
    ["指", "ゆび", "finger"]
  ],
  N3: [
    ["奇跡", "きせき", "miracle"],
    ["絶対", "ぜったい", "absolute; definitely"],
    ["限界", "げんかい", "limit"],
    ["本気", "ほんき", "seriousness"],
    ["覚悟", "かくご", "resolve"],
    ["誓う", "ちかう", "to swear"],
    ["狙う", "ねらう", "to aim at"],
    ["避ける", "さける", "to avoid"],
    ["殴る", "なぐる", "to punch"],
    ["斬る", "きる", "to slash"],
    ["撃つ", "うつ", "to shoot"],
    ["倒す", "たおす", "to defeat"],
    ["倒れる", "たおれる", "to collapse"],
    ["潜む", "ひそむ", "to lurk"],
    ["迫る", "せまる", "to approach; close in"],
    ["耐える", "たえる", "to endure"],
    ["従う", "したがう", "to obey"],
    ["逆らう", "さからう", "to defy"],
    ["巻き込む", "まきこむ", "to drag into"],
    ["立ち向かう", "たちむかう", "to stand against"]
  ],
  N2: [
    ["抗う", "あらがう", "to resist"],
    ["彷徨う", "さまよう", "to wander"],
    ["翻弄", "ほんろう", "being tossed about"],
    ["狂気", "きょうき", "madness"],
    ["殺意", "さつい", "murderous intent"],
    ["悪意", "あくい", "malice"],
    ["憎しみ", "にくしみ", "hatred"],
    ["孤独", "こどく", "loneliness"],
    ["絶体絶命", "ぜったいぜつめい", "desperate situation"],
    ["因果", "いんが", "cause and effect; karma"],
    ["呪文", "じゅもん", "spell; incantation"],
    ["魔力", "まりょく", "magical power"],
    ["霊", "れい", "spirit"],
    ["霊魂", "れいこん", "soul; spirit"],
    ["妖怪", "ようかい", "supernatural creature"],
    ["魔物", "まもの", "monster; demon"],
    ["討つ", "うつ", "to strike down"],
    ["葬る", "ほうむる", "to bury; consign"],
    ["滅ぼす", "ほろぼす", "to destroy"],
    ["滅びる", "ほろびる", "to perish"]
  ],
  N1: [
    ["阿修羅", "あしゅら", "asura; fierce fighter"],
    ["羅刹", "らせつ", "rakshasa; demon"],
    ["怨霊", "おんりょう", "vengeful spirit"],
    ["亡者", "もうじゃ", "dead person; ghost"],
    ["幻影", "げんえい", "phantom; illusion"],
    ["幻惑", "げんわく", "bewilderment; fascination"],
    ["呪詛", "じゅそ", "curse"],
    ["呪術", "じゅじゅつ", "sorcery"],
    ["妖艶", "ようえん", "bewitching"],
    ["妖気", "ようき", "unearthly aura"],
    ["凄惨", "せいさん", "ghastly"],
    ["凄絶", "せいぜつ", "heroic; intense"],
    ["惨劇", "さんげき", "tragedy; disaster"],
    ["血脈", "けつみゃく", "bloodline"],
    ["系譜", "けいふ", "lineage; genealogy"],
    ["末裔", "まつえい", "descendant"],
    ["因果律", "いんがりつ", "law of causality"],
    ["破滅", "はめつ", "ruin; destruction"],
    ["顛末", "てんまつ", "whole story; outcome"],
    ["邂逅", "かいこう", "chance encounter"]
  ],
  "Beyond N1": [
    ["魍魎", "もうりょう", "spirits and goblins"],
    ["怨霊退散", "おんりょうたいさん", "exorcising vengeful spirits"],
    ["百花繚乱", "ひゃっかりょうらん", "profusion of flowers; many talents"],
    ["因果律崩壊", "いんがりつほうかい", "collapse of causality"],
    ["天地開闢", "てんちかいびゃく", "creation of heaven and earth"],
    ["森羅万象", "しんらばんしょう", "all things in nature"],
    ["生者必滅", "しょうじゃひつめつ", "all living things must die"],
    ["盛者必衰", "じょうしゃひっすい", "the prosperous must decline"],
    ["輪廻転生", "りんねてんせい", "reincarnation"],
    ["神出鬼没", "しんしゅつきぼつ", "elusive; appearing unpredictably"],
    ["怨敵調伏", "おんてきちょうぶく", "subjugation of enemies"],
    ["不倶戴天", "ふぐたいてん", "mortal enemy"],
    ["乾坤一擲", "けんこんいってき", "stake everything on one throw"],
    ["明鏡止水", "めいきょうしすい", "clear and serene mind"],
    ["虚心坦懐", "きょしんたんかい", "open and calm mind"],
    ["夢幻泡影", "むげんほうよう", "ephemeral as dreams and bubbles"],
    ["魑魅魍魎跋扈", "ちみもうりょうばっこ", "monsters running rampant"],
    ["万物流転", "ばんぶつるてん", "all things are in flux"],
    ["天衣無縫", "てんいむほう", "flawless; natural"],
    ["疾風迅雷", "しっぷうじんらい", "with lightning speed"]
  ]
};

const genreVocabByLevel = {
  "Pre-N5": [
    ["先輩", "せんぱい", "senior"],
    ["後輩", "こうはい", "junior"],
    ["ちゃん", "ちゃん", "affectionate name suffix"],
    ["くん", "くん", "familiar name suffix"],
    ["様", "さま", "honorific suffix"],
    ["殿", "どの", "lord; formal suffix"],
    ["姉", "あね", "older sister"],
    ["兄", "あに", "older brother"],
    ["妹", "いもうと", "younger sister"],
    ["弟", "おとうと", "younger brother"],
    ["先生", "せんせい", "teacher; doctor"],
    ["生徒", "せいと", "student"],
    ["部屋", "へや", "room"],
    ["席", "せき", "seat"],
    ["門", "もん", "gate"]
  ],
  N5: [
    ["付き合う", "つきあう", "to date; associate"],
    ["告げる", "つげる", "to tell; announce"],
    ["出会う", "であう", "to meet by chance"],
    ["別れる", "わかれる", "to part; break up"],
    ["喜ぶ", "よろこぶ", "to be delighted"],
    ["悲しむ", "かなしむ", "to feel sad"],
    ["驚く", "おどろく", "to be surprised"],
    ["急げ", "いそげ", "hurry!"],
    ["待て", "まて", "wait!"],
    ["行け", "いけ", "go!"],
    ["来い", "こい", "come!"],
    ["やめる", "やめる", "to stop; quit"],
    ["許して", "ゆるして", "forgive me"],
    ["助けて", "たすけて", "help me"],
    ["危ない", "あぶない", "dangerous"]
  ],
  N4: [
    ["恋", "こい", "romantic love"],
    ["恋人", "こいびと", "lover"],
    ["片思い", "かたおもい", "unrequited love"],
    ["告白", "こくはく", "confession"],
    ["約束", "やくそく", "promise"],
    ["裏", "うら", "back; hidden side"],
    ["噂", "うわさ", "rumor"],
    ["勘違い", "かんちがい", "misunderstanding"],
    ["偶然", "ぐうぜん", "coincidence"],
    ["屋上", "おくじょう", "rooftop"],
    ["廊下", "ろうか", "hallway"],
    ["放課後", "ほうかご", "after school"],
    ["部活", "ぶかつ", "club activities"],
    ["転校生", "てんこうせい", "transfer student"],
    ["幼なじみ", "おさななじみ", "childhood friend"],
    ["親友", "しんゆう", "close friend"],
    ["喧嘩", "けんか", "fight; quarrel"],
    ["仲直り", "なかなおり", "making up"],
    ["本音", "ほんね", "true feelings"],
    ["建前", "たてまえ", "public stance"]
  ],
  N3: [
    ["推理", "すいり", "reasoning; deduction"],
    ["謎", "なぞ", "mystery; riddle"],
    ["手掛かり", "てがかり", "clue"],
    ["証言", "しょうげん", "testimony"],
    ["犯人", "はんにん", "culprit"],
    ["容疑者", "ようぎしゃ", "suspect"],
    ["探偵", "たんてい", "detective"],
    ["刑事", "けいじ", "detective; police investigator"],
    ["現場", "げんば", "scene; site"],
    ["真相", "しんそう", "truth of the matter"],
    ["罠", "わな", "trap"],
    ["陰", "かげ", "shade; hidden side"],
    ["正義", "せいぎ", "justice"],
    ["悪", "あく", "evil"],
    ["罪", "つみ", "sin; crime"],
    ["罰", "ばつ", "punishment"],
    ["誤魔化す", "ごまかす", "to deceive; dodge"],
    ["見抜く", "みぬく", "to see through"],
    ["追い詰める", "おいつめる", "to corner"],
    ["暴く", "あばく", "to expose"]
  ],
  N2: [
    ["策略", "さくりゃく", "scheme; stratagem"],
    ["謀略", "ぼうりゃく", "plot; intrigue"],
    ["裏工作", "うらこうさく", "behind-the-scenes maneuvering"],
    ["潜入", "せんにゅう", "infiltration"],
    ["追放", "ついほう", "exile; banishment"],
    ["処刑", "しょけい", "execution"],
    ["暗殺", "あんさつ", "assassination"],
    ["暗躍", "あんやく", "secret maneuvering"],
    ["復活", "ふっかつ", "revival"],
    ["転生", "てんせい", "reincarnation"],
    ["召喚", "しょうかん", "summoning"],
    ["契約", "けいやく", "contract"],
    ["眷属", "けんぞく", "follower; retainer"],
    ["従者", "じゅうしゃ", "servant; follower"],
    ["騎士", "きし", "knight"],
    ["勇者", "ゆうしゃ", "hero"],
    ["魔王", "まおう", "demon king"],
    ["王国", "おうこく", "kingdom"],
    ["帝国", "ていこく", "empire"],
    ["王位", "おうい", "throne"]
  ],
  N1: [
    ["蹴散らす", "けちらす", "to scatter; rout"],
    ["打ち砕く", "うちくだく", "to smash"],
    ["切り裂く", "きりさく", "to cut apart"],
    ["葬送", "そうそう", "funeral; burial"],
    ["弔い", "とむらい", "mourning; funeral rites"],
    ["幽閉", "ゆうへい", "confinement"],
    ["監禁", "かんきん", "confinement; imprisonment"],
    ["謁見", "えっけん", "audience with a superior"],
    ["戴冠", "たいかん", "coronation"],
    ["失脚", "しっきゃく", "loss of position"],
    ["簒奪", "さんだつ", "usurpation"],
    ["粛清", "しゅくせい", "purge"],
    ["反逆", "はんぎゃく", "rebellion; treason"],
    ["謀反", "むほん", "rebellion"],
    ["覇権", "はけん", "hegemony"],
    ["覇者", "はしゃ", "supreme ruler"],
    ["血盟", "けつめい", "blood oath"],
    ["盟約", "めいやく", "pact; covenant"],
    ["神域", "しんいき", "divine realm"],
    ["霊廟", "れいびょう", "mausoleum"]
  ],
  "Beyond N1": [
    ["王権神授", "おうけんしんじゅ", "divine right of kings"],
    ["神殺し", "かみごろし", "god slaying"],
    ["魔王討伐", "まおうとうばつ", "demon king subjugation"],
    ["勇者召喚", "ゆうしゃしょうかん", "hero summoning"],
    ["異世界転生", "いせかいてんせい", "reincarnation in another world"],
    ["因果改変", "いんがかいへん", "alteration of causality"],
    ["時間遡行", "じかんそこう", "time regression"],
    ["世界線", "せかいせん", "world line"],
    ["並行世界", "へいこうせかい", "parallel world"],
    ["終末戦争", "しゅうまつせんそう", "apocalyptic war"],
    ["神罰", "しんばつ", "divine punishment"],
    ["禁呪", "きんじゅ", "forbidden spell"],
    ["大罪", "たいざい", "deadly sin; grave sin"],
    ["聖剣", "せいけん", "holy sword"],
    ["魔剣", "まけん", "demonic sword"],
    ["竜殺し", "りゅうごろし", "dragon slayer"],
    ["竜騎士", "りゅうきし", "dragon knight"],
    ["不老不死", "ふろうふし", "eternal youth and immortality"],
    ["天地創造", "てんちそうぞう", "creation of heaven and earth"],
    ["絶対領域", "ぜったいりょういき", "absolute territory"]
  ]
};

const extraVocabByLevel = {
  "Pre-N5": [
    ["こちら", "こちら", "this way; this person"],
    ["そちら", "そちら", "that way; that person"],
    ["あちら", "あちら", "over there"],
    ["どちら", "どちら", "which way; who"],
    ["みんな", "みんな", "everyone"],
    ["全部", "ぜんぶ", "everything"],
    ["半分", "はんぶん", "half"],
    ["少し", "すこし", "a little"],
    ["多分", "たぶん", "probably"],
    ["一緒", "いっしょ", "together"],
    ["別", "べつ", "separate; different"],
    ["同じ", "おなじ", "same"],
    ["次", "つぎ", "next"],
    ["前", "まえ", "before; front"],
    ["横", "よこ", "side"]
  ],
  N5: [
    ["答え", "こたえ", "answer"],
    ["問題", "もんだい", "problem; question"],
    ["宿題", "しゅくだい", "homework"],
    ["練習", "れんしゅう", "practice"],
    ["勉強", "べんきょう", "study"],
    ["試験", "しけん", "exam"],
    ["授業", "じゅぎょう", "class; lesson"],
    ["旅行", "りょこう", "travel"],
    ["荷物", "にもつ", "luggage"],
    ["切符", "きっぷ", "ticket"],
    ["地図", "ちず", "map"],
    ["入口", "いりぐち", "entrance"],
    ["出口", "でぐち", "exit"],
    ["病院", "びょういん", "hospital"],
    ["薬", "くすり", "medicine"],
    ["風邪", "かぜ", "cold; flu"],
    ["熱", "ねつ", "fever; heat"],
    ["元気", "げんき", "healthy; energetic"],
    ["便利", "べんり", "convenient"],
    ["暇", "ひま", "free time"]
  ],
  N4: [
    ["案内", "あんない", "guidance; information"],
    ["以内", "いない", "within"],
    ["以外", "いがい", "except for"],
    ["以上", "いじょう", "more than; above"],
    ["以下", "いか", "less than; below"],
    ["移る", "うつる", "to move; transfer"],
    ["選ぶ", "えらぶ", "to choose"],
    ["折れる", "おれる", "to break; fold"],
    ["飾る", "かざる", "to decorate"],
    ["噛む", "かむ", "to bite"],
    ["乾く", "かわく", "to dry"],
    ["聞こえる", "きこえる", "to be audible"],
    ["決まる", "きまる", "to be decided"],
    ["比べる", "くらべる", "to compare"],
    ["暮れる", "くれる", "to get dark"],
    ["壊れる", "こわれる", "to break"],
    ["下がる", "さがる", "to go down"],
    ["騒ぐ", "さわぐ", "to make noise"],
    ["知らせる", "しらせる", "to notify"],
    ["育てる", "そだてる", "to raise; grow"]
  ],
  N3: [
    ["扱い", "あつかい", "treatment; handling"],
    ["安定", "あんてい", "stability"],
    ["維持", "いじ", "maintenance"],
    ["意志", "いし", "will; intention"],
    ["一瞬", "いっしゅん", "instant"],
    ["印象", "いんしょう", "impression"],
    ["引用", "いんよう", "quotation"],
    ["演技", "えんぎ", "acting; performance"],
    ["延長", "えんちょう", "extension"],
    ["応答", "おうとう", "response"],
    ["解説", "かいせつ", "explanation; commentary"],
    ["解放", "かいほう", "release"],
    ["格差", "かくさ", "gap; disparity"],
    ["仮説", "かせつ", "hypothesis"],
    ["活動", "かつどう", "activity"],
    ["観測", "かんそく", "observation"],
    ["基礎", "きそ", "foundation; basics"],
    ["記録", "きろく", "record"],
    ["議論", "ぎろん", "discussion; argument"],
    ["偶然", "ぐうぜん", "coincidence"]
  ],
  N2: [
    ["圧力", "あつりょく", "pressure"],
    ["意欲", "いよく", "motivation"],
    ["運命", "うんめい", "fate"],
    ["影響力", "えいきょうりょく", "influence"],
    ["解消", "かいしょう", "resolution; cancellation"],
    ["確保", "かくほ", "securing"],
    ["格闘", "かくとう", "hand-to-hand combat"],
    ["過程", "かてい", "process"],
    ["観念", "かんねん", "idea; notion"],
    ["規律", "きりつ", "discipline; order"],
    ["均一", "きんいつ", "uniformity"],
    ["偶像", "ぐうぞう", "idol; image"],
    ["掲示", "けいじ", "posting; notice"],
    ["軽減", "けいげん", "reduction"],
    ["決意", "けつい", "determination"],
    ["権限", "けんげん", "authority"],
    ["講義", "こうぎ", "lecture"],
    ["交渉", "こうしょう", "negotiation"],
    ["根拠", "こんきょ", "basis; grounds"],
    ["錯誤", "さくご", "mistake; error"]
  ],
  N1: [
    ["曖昧さ", "あいまいさ", "ambiguity"],
    ["悪循環", "あくじゅんかん", "vicious cycle"],
    ["圧巻", "あっかん", "highlight; masterpiece"],
    ["暗黙", "あんもく", "tacit; implicit"],
    ["意義", "いぎ", "significance"],
    ["一端", "いったん", "part; glimpse"],
    ["逸話", "いつわ", "anecdote"],
    ["因果関係", "いんがかんけい", "causal relationship"],
    ["潤う", "うるおう", "to be enriched; moistened"],
    ["円熟", "えんじゅく", "maturity; ripeness"],
    ["介抱", "かいほう", "nursing; care"],
    ["概況", "がいきょう", "overview"],
    ["核心", "かくしん", "core; heart"],
    ["隔たり", "へだたり", "distance; gap"],
    ["過酷", "かこく", "harsh"],
    ["画期的", "かっきてき", "epoch-making"],
    ["感慨", "かんがい", "deep emotion"],
    ["寛容", "かんよう", "tolerance"],
    ["危機感", "ききかん", "sense of crisis"],
    ["機敏", "きびん", "quick-witted; agile"]
  ],
  "Beyond N1": [
    ["因果応報", "いんがおうほう", "karma; retribution"],
    ["栄枯盛衰", "えいこせいすい", "rise and fall"],
    ["温故知新", "おんこちしん", "learning from the past"],
    ["画竜点睛", "がりょうてんせい", "finishing touch"],
    ["起死回生", "きしかいせい", "comeback from the brink"],
    ["疑心暗鬼", "ぎしんあんき", "suspicion breeding fear"],
    ["空前絶後", "くうぜんぜつご", "unprecedented"],
    ["言語道断", "ごんごどうだん", "outrageous"],
    ["五里霧中", "ごりむちゅう", "lost in a fog"],
    ["自業自得", "じごうじとく", "reaping what one sows"],
    ["七転八起", "しちてんはっき", "fall seven times, rise eight"],
    ["十人十色", "じゅうにんといろ", "everyone is different"],
    ["心機一転", "しんきいってん", "fresh start"],
    ["千差万別", "せんさばんべつ", "infinite variety"],
    ["電光石火", "でんこうせっか", "lightning speed"],
    ["二律背反", "にりつはいはん", "antinomy; dilemma"],
    ["波乱万丈", "はらんばんじょう", "full of ups and downs"],
    ["風光明媚", "ふうこうめいび", "scenic beauty"],
    ["無病息災", "むびょうそくさい", "sound health"],
    ["臨機応変", "りんきおうへん", "adaptability"]
  ]
};

const broadVocabByLevel = {
  "Pre-N5": [
    ["今回", "こんかい", "this time"],
    ["前回", "ぜんかい", "last time"],
    ["毎回", "まいかい", "every time"],
    ["最近", "さいきん", "recently"],
    ["最後", "さいご", "last; final"],
    ["最初", "さいしょ", "first; beginning"],
    ["理由", "りゆう", "reason"],
    ["感じ", "かんじ", "feeling"],
    ["形", "かたち", "shape; form"],
    ["場所", "ばしょ", "place"],
    ["場合", "ばあい", "case; situation"],
    ["頃", "ころ", "around; time"],
    ["途中", "とちゅう", "on the way"],
    ["普通", "ふつう", "normal"],
    ["特別", "とくべつ", "special"]
  ],
  N5: [
    ["伝える", "つたえる", "to convey"],
    ["続く", "つづく", "to continue"],
    ["続ける", "つづける", "to continue something"],
    ["受ける", "うける", "to receive; take"],
    ["送る", "おくる", "to send"],
    ["選ぶ", "えらぶ", "to choose"],
    ["増える", "ふえる", "to increase"],
    ["減る", "へる", "to decrease"],
    ["足りる", "たりる", "to be enough"],
    ["足す", "たす", "to add"],
    ["直る", "なおる", "to be fixed"],
    ["直す", "なおす", "to fix"],
    ["謝る", "あやまる", "to apologize"],
    ["頼む", "たのむ", "to ask; request"],
    ["笑顔", "えがお", "smile"],
    ["約束", "やくそく", "promise"],
    ["用事", "ようじ", "errand; business"],
    ["予定", "よてい", "plan; schedule"],
    ["連絡", "れんらく", "contact"],
    ["返事", "へんじ", "reply"]
  ],
  N4: [
    ["理解", "りかい", "understanding"],
    ["納得", "なっとく", "acceptance; understanding"],
    ["確認", "かくにん", "confirmation"],
    ["想像", "そうぞう", "imagination"],
    ["期待", "きたい", "expectation"],
    ["緊張", "きんちょう", "nervousness; tension"],
    ["感謝", "かんしゃ", "gratitude"],
    ["尊敬", "そんけい", "respect"],
    ["反省", "はんせい", "reflection; regret"],
    ["後悔", "こうかい", "regret"],
    ["相談", "そうだん", "consultation"],
    ["報告", "ほうこく", "report"],
    ["発見", "はっけん", "discovery"],
    ["発表", "はっぴょう", "announcement"],
    ["表情", "ひょうじょう", "facial expression"],
    ["感覚", "かんかく", "sense; feeling"],
    ["性格", "せいかく", "personality"],
    ["態度", "たいど", "attitude"],
    ["関心", "かんしん", "interest"],
    ["印象", "いんしょう", "impression"]
  ],
  N3: [
    ["意図", "いと", "intention"],
    ["判断", "はんだん", "judgment"],
    ["決断", "けつだん", "decision"],
    ["選択肢", "せんたくし", "option; choice"],
    ["状況", "じょうきょう", "situation"],
    ["状態", "じょうたい", "condition; state"],
    ["変化", "へんか", "change"],
    ["進化", "しんか", "evolution"],
    ["成長", "せいちょう", "growth"],
    ["発展", "はってん", "development"],
    ["経験", "けいけん", "experience"],
    ["記憶", "きおく", "memory"],
    ["感情", "かんじょう", "emotion"],
    ["衝動", "しょうどう", "impulse"],
    ["欲望", "よくぼう", "desire"],
    ["意志", "いし", "will; intention"],
    ["覚悟", "かくご", "resolve"],
    ["努力", "どりょく", "effort"],
    ["才能", "さいのう", "talent"],
    ["可能性", "かのうせい", "possibility"]
  ],
  N2: [
    ["葛藤", "かっとう", "inner conflict"],
    ["執着", "しゅうちゃく", "attachment; obsession"],
    ["依存", "いぞん", "dependence"],
    ["矛盾", "むじゅん", "contradiction"],
    ["本質", "ほんしつ", "essence"],
    ["抽象", "ちゅうしょう", "abstraction"],
    ["主観", "しゅかん", "subjectivity"],
    ["客観", "きゃっかん", "objectivity"],
    ["偏見", "へんけん", "prejudice"],
    ["価値観", "かちかん", "values"],
    ["世界観", "せかいかん", "worldview"],
    ["倫理", "りんり", "ethics"],
    ["道徳", "どうとく", "morality"],
    ["概念", "がいねん", "concept"],
    ["象徴", "しょうちょう", "symbol"],
    ["比喩", "ひゆ", "metaphor"],
    ["伏線", "ふくせん", "foreshadowing"],
    ["描写", "びょうしゃ", "description; depiction"],
    ["視線", "しせん", "line of sight"],
    ["気配", "けはい", "presence; sign"]
  ],
  N1: [
    ["叙述", "じょじゅつ", "description; narration"],
    ["余韻", "よいん", "aftertaste; lingering impression"],
    ["情緒", "じょうちょ", "emotion; atmosphere"],
    ["趣", "おもむき", "flavor; charm"],
    ["風情", "ふぜい", "taste; elegance"],
    ["機微", "きび", "subtlety"],
    ["示唆", "しさ", "implication"],
    ["暗示", "あんじ", "hint; suggestion"],
    ["兆候", "ちょうこう", "sign; omen"],
    ["余地", "よち", "room; scope"],
    ["余儀ない", "よぎない", "unavoidable"],
    ["齟齬", "そご", "discrepancy"],
    ["乖離", "かいり", "divergence; separation"],
    ["葛藤", "かっとう", "conflict"],
    ["脆さ", "もろさ", "fragility"],
    ["儚さ", "はかなさ", "transience"],
    ["憂い", "うれい", "sorrow; anxiety"],
    ["憂鬱", "ゆううつ", "melancholy"],
    ["苛立ち", "いらだち", "irritation"],
    ["諦念", "ていねん", "resignation"]
  ],
  "Beyond N1": [
    ["春夏秋冬", "しゅんかしゅうとう", "the four seasons"],
    ["諸行無常", "しょぎょうむじょう", "impermanence"],
    ["色即是空", "しきそくぜくう", "form is emptiness"],
    ["盛者必衰", "じょうしゃひっすい", "the mighty must fall"],
    ["有為転変", "ういてんぺん", "vicissitudes of life"],
    ["栄枯盛衰", "えいこせいすい", "rise and fall"],
    ["孤軍奮闘", "こぐんふんとう", "fighting alone"],
    ["乾坤一擲", "けんこんいってき", "do-or-die gamble"],
    ["起承転結", "きしょうてんけつ", "narrative structure"],
    ["百戦錬磨", "ひゃくせんれんま", "veteran; battle-hardened"],
    ["千変万化", "せんぺんばんか", "ever-changing"],
    ["森羅万象", "しんらばんしょう", "all things in nature"],
    ["因果律", "いんがりつ", "law of causality"],
    ["因果応報", "いんがおうほう", "karma"],
    ["明鏡止水", "めいきょうしすい", "clear, serene mind"],
    ["行雲流水", "こううんりゅうすい", "going with the flow"],
    ["花鳥風月", "かちょうふうげつ", "beauties of nature"],
    ["鏡花水月", "きょうかすいげつ", "unattainable beauty"],
    ["幽寂", "ゆうじゃく", "deep quiet"],
    ["幽玄", "ゆうげん", "mysterious profundity"]
  ]
};

const mediaFrequencyRankByWord = {
  僕: 450,
  俺: 650,
  君: 850,
  お前: 1200,
  奴: 1800,
  本当: 700,
  嘘: 1200,
  好き: 850,
  嫌い: 1300,
  強い: 1100,
  弱い: 1450,
  怖い: 1200,
  死ぬ: 1500,
  殺す: 2300,
  助ける: 1600,
  守る: 1900,
  戦う: 2200,
  勝つ: 1500,
  負ける: 1700,
  笑う: 1400,
  先輩: 2800,
  後輩: 4200,
  部活: 3800,
  放課後: 4800,
  幼なじみ: 6200,
  事件: 2600,
  秘密: 2400,
  夢: 1300,
  涙: 2100,
  笑顔: 2500,
  命: 2100,
  心: 1000,
  敵: 2200,
  味方: 3300,
  仲間: 3000,
  勇気: 3000,
  運命: 4300,
  魔法: 4600,
  剣: 4200,
  悪魔: 5600,
  気配: 5200,
  影: 2500,
  光: 1600,
  炎: 4500,
  傷: 3000,
  血: 2600,
  痛み: 2800,
  恐怖: 4200,
  怒り: 3600,
  悲しみ: 3900,
  願い: 3400,
  祈り: 5000,
  声: 1200,
  姿: 3100,
  奇跡: 5200,
  絶対: 2200,
  限界: 4400,
  本気: 3600,
  覚悟: 5600,
  誓う: 5800,
  狙う: 4700,
  殴る: 5200,
  斬る: 7200,
  撃つ: 5200,
  倒す: 3800,
  迫る: 5200,
  抗う: 9000,
  彷徨う: 11000,
  狂気: 8500,
  殺意: 7600,
  悪意: 6200,
  孤独: 5400,
  絶体絶命: 11000,
  因果: 10000,
  呪文: 7800,
  魔力: 8200,
  霊: 6200,
  妖怪: 8500,
  魔物: 7800,
  葬る: 10500,
  滅ぼす: 9000,
  勇者: 7800,
  魔王: 9800,
  王国: 5200,
  帝国: 7200,
  騎士: 7600,
  召喚: 8600,
  転生: 9000,
  復活: 5200,
  結界: 12500,
  詠唱: 13000,
  呪縛: 13500,
  深淵: 14500,
  魑魅魍魎: 24000,
  百鬼夜行: 22000,
  黄泉: 17000,
  冥府: 20000,
  奈落: 18000,
  幽体離脱: 22000,
  因果律崩壊: 28000
};

for (const source of [
  supplementalVocabByLevel,
  expandedVocabByLevel,
  mediaVocabByLevel,
  fictionVocabByLevel,
  genreVocabByLevel,
  extraVocabByLevel,
  broadVocabByLevel
]) {
  for (const [level, entries] of Object.entries(source)) {
    const existing = new Set(vocabByLevel[level].map(([jp]) => jp));
    for (const entry of entries) {
      if (existing.has(entry[0])) continue;
      vocabByLevel[level].push(entry);
      existing.add(entry[0]);
    }
  }
}

const curatedWords = Object.entries(vocabByLevel)
  .flatMap(([level, entries]) => {
    const profile = levelFrequencyProfiles[level];
    const step = (profile.maxRank - profile.minRank) / Math.max(1, entries.length - 1);
    return entries.map(([jp, reading, meaning], index) => {
      const baseRank = profile.minRank + step * index;
      const frequencyRank = balancedFrequencyRank(baseRank, jp, reading, meaning, level);
      return {
        jp,
        reading,
        meaning,
        level,
        frequencyRank,
        rating: ratingForKnownWords(frequencyRank),
        source: "curated"
      };
    });
  })
  .filter((word) => !isSingleKanaEntry(word.jp));

const generatedKanaStopWords = new Set([
  "の",
  "に",
  "は",
  "を",
  "が",
  "と",
  "て",
  "で",
  "へ",
  "も",
  "や",
  "か",
  "ば",
  "た",
  "だ",
  "さ",
  "ら",
  "ん",
  "ぬ"
]);

const commonKanaWords = new Set([
  "する",
  "ある",
  "いる",
  "なる",
  "ない",
  "これ",
  "それ",
  "ため",
  "から",
  "よう",
  "まで",
  "など",
  "また",
  "もの"
]);

const curatedWordSet = new Set(curatedWords.map((word) => word.jp));
const frequencyCandidateRanks = new Map([
  ...Object.entries(wiktionaryFrequencyRankByWord),
  ...Object.entries(animeFrequencyRankByWord),
  ...Object.entries(aozoraFrequencyRankByWord),
  ...Object.entries(youtubeFrequencyRankByWord),
  ...Object.entries(additionalFrequencyRankByWord)
]);
const frequencyOnlyWords = [...frequencyCandidateRanks.entries()]
  .filter(([jp]) =>
    !curatedWordSet.has(jp) && isReliableFrequencyCard(jp, dictionaryEntryByWord[jp], preferredEverydayRank(jp))
  )
  .map(([jp]) => {
    const frequencyRank = adjustedFrequencyRankForEntry(preferredFrequencyRank(jp), jp, dictionaryEntryByWord[jp]);
    return {
    jp,
    reading: dictionaryEntryByWord[jp].reading,
    meaning: dictionaryEntryByWord[jp].meaning,
    level: levelForFrequencyRank(frequencyRank),
    frequencyRank,
    rating: ratingForKnownWords(frequencyRank),
    source: frequencySource(jp)
    };
  });

const words = [...curatedWords, ...frequencyOnlyWords].sort((a, b) => a.frequencyRank - b.frequencyRank);
const wordsByRating = [...words].sort((a, b) => a.rating - b.rating);

function isJapaneseTerm(term) {
  return /[\u3040-\u30ff\u4e00-\u9fff]/.test(term) && !/[A-Za-z]/.test(term);
}

function isReliableFrequencyCard(term, entry, everydayRank) {
  if (!entry || !isJapaneseTerm(term)) return false;
  if (isSingleKanaEntry(term)) return false;
  if (entry.properNoun || entry.grammarOnly) return false;
  if (generatedKanaStopWords.has(term)) return false;
  if (isKanaOnly(term) && [...term].length <= 2 && !commonKanaWords.has(term) && (!everydayRank || everydayRank > 1000)) {
    return false;
  }
  if (looksLikeKatakanaName(term, entry.meaning)) return false;
  if (looksLikeNameOrPlace(entry.meaning)) return false;
  return everydayRank ? everydayRank <= 100000 : entry.commonScore >= 3;
}

function looksLikeNameOrPlace(meaning) {
  return /\b(surname|given name|place name|company|corporation|prefecture|city|town|village|station|Ltd)\b/i.test(
    meaning
  );
}

function looksLikeKatakanaName(term, meaning) {
  return /^[\u30a0-\u30ffー]+$/.test(term) && /\b[A-Z][a-z]{2,}\b/.test(meaning);
}

function isKanaOnly(term) {
  return /^[\u3040-\u309f\u30a0-\u30ffー]+$/.test(term);
}

function isSingleKanaEntry(term) {
  return isKanaOnly(term) && [...term].length === 1;
}

function hasKanjiQuestion(word) {
  return /[\u4e00-\u9fff]/.test(word.jp) && Boolean(word.reading);
}

function levelForFrequencyRank(rank) {
  const level =
    Object.entries(levelFrequencyProfiles).find(([, profile]) => rank >= profile.minRank && rank <= profile.maxRank)?.[0] ||
    (rank < levelFrequencyProfiles["Pre-N5"].minRank ? "Pre-N5" : "Beyond N1");
  return level;
}

function preferredEverydayRank(jp) {
  const ranks = [
    animeFrequencyRankByWord[jp],
    aozoraFrequencyRankByWord[jp],
    youtubeFrequencyRankByWord[jp],
    additionalFrequencyRankByWord[jp]
  ].filter(Number.isFinite);
  if (ranks.length === 0) return null;
  return Math.round(ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length);
}

function preferredFrequencyRank(jp) {
  return preferredEverydayRank(jp) || wiktionaryFrequencyRankByWord[jp] || 30000;
}

function adjustedFrequencyRankForEntry(rank, jp, entry) {
  const textLength = [...jp].length;
  const kanjiCount = (jp.match(/[\u4e00-\u9fff]/g) || []).length;
  const meaning = entry?.meaning?.toLowerCase() || "";
  let multiplier = 1;

  if (isKanaOnly(jp) && textLength <= 4) multiplier *= 0.55;
  if (textLength <= 2 && kanjiCount <= 1) multiplier *= 0.7;
  if (kanjiCount === 0 && textLength <= 6) multiplier *= 0.8;
  if (kanjiCount <= 1 && /(to |i; me|you|this|that|here|there|why|how|what|who)/.test(meaning)) {
    multiplier *= 0.75;
  }
  if (meaning.includes("onomatopoeic") || meaning.includes("sound symbolic")) multiplier *= 0.85;
  if (kanjiCount >= 3) multiplier *= 1.12;
  if (textLength >= 6 && kanjiCount >= 2) multiplier *= 1.18;

  return Math.round(clamp(rank * multiplier, 1, maxKnownWords()));
}

function frequencySource(jp) {
  const sources = [
    animeFrequencyRankByWord[jp] ? "anime" : null,
    aozoraFrequencyRankByWord[jp] ? "aozora" : null,
    youtubeFrequencyRankByWord[jp] ? "youtube" : null,
    additionalFrequencyRankByWord[jp] ? "additional" : null
  ].filter(Boolean);
  if (sources.length > 0) return sources.join("+");
  return "frequency";
}

function balancedFrequencyRank(baseRank, jp, reading, meaning, level) {
  const jlptRank = adjustedFrequencyRank(baseRank, jp, reading, meaning, level);
  const everydayRank = preferredEverydayRank(jp);
  const wiktionaryRank = wiktionaryFrequencyRankByWord[jp];
  const mediaRank = mediaFrequencyRankByWord[jp];
  let blendedRank = jlptRank;
  if (everydayRank) {
    blendedRank = jlptRank * 0.25 + everydayRank * 0.75;
    return Math.round(clamp(blendedRank, 1, 30000));
  } else if (wiktionaryRank) {
    blendedRank = jlptRank * 0.75 + wiktionaryRank * 0.25;
  }
  if (!mediaRank) return Math.round(clamp(blendedRank, 1, 30000));

  const mediaWeightByLevel = {
    "Pre-N5": 0.25,
    N5: 0.3,
    N4: 0.4,
    N3: 0.45,
    N2: 0.5,
    N1: 0.55,
    "Beyond N1": 0.6
  };
  const mediaWeight = mediaWeightByLevel[level] ?? 0.45;
  blendedRank = blendedRank * (1 - mediaWeight) + mediaRank * mediaWeight;
  blendedRank = Math.max(blendedRank, mediaRank * 0.75);
  return Math.round(clamp(blendedRank, 1, 30000));
}

function adjustedFrequencyRank(baseRank, jp, reading, meaning, level) {
  const kanaOnly = isKanaOnly(jp);
  const kanjiCount = (jp.match(/[\u4e00-\u9fff]/g) || []).length;
  const charCount = [...jp].length;
  const meaningText = meaning.toLowerCase();
  let multiplier = 1;

  if (kanaOnly) multiplier *= 0.62;
  if (charCount <= 2 && kanjiCount <= 1) multiplier *= 0.82;
  if (["僕", "俺", "君", "お前", "本当", "嘘", "好き", "嫌い"].includes(jp)) multiplier *= 0.55;
  if (meaningText.includes("hiragana") || meaningText.includes("yes") || meaningText.includes("no")) {
    multiplier *= 0.45;
  }

  if (kanjiCount >= 3) multiplier *= 1.2;
  if (kanjiCount >= 4 || charCount >= 5) multiplier *= 1.35;
  if (/[々]/.test(jp)) multiplier *= 1.12;
  if (meaningText.includes("idiom") || meaningText.includes("proverb")) multiplier *= 1.5;
  if (meaningText.includes("sorcery") || meaningText.includes("demon") || meaningText.includes("causality")) {
    multiplier *= 1.28;
  }
  if (meaningText.includes("concept") || meaningText.includes("abstraction") || meaningText.includes("ethics")) {
    multiplier *= 1.18;
  }
  if (level === "Beyond N1") multiplier *= 1.12;

  return Math.round(clamp(baseRank * multiplier, 1, 30000));
}

const defaultState = {
  rating: 950,
  kanjiRating: 950,
  answered: 0,
  correct: 0,
  scoreTotal: 0,
  readingAnswered: 0,
  readingScoreTotal: 0,
  history: [],
  seen: {},
  streak: 0,
  bestStreak: 0,
  achievements: {}
};

const minimumEstimateAnswers = 10;
const reliableEstimateAnswers = 60;
const minRating = estimateBands[0].minRating;
const maxRating = estimateBands[estimateBands.length - 1].maxRating;
const calibrationLabel = "Calibrating";
const storageKey = "japanese-vocab-frequency-elo-profile-v3";
let state = loadState();
let currentWord = null;
let currentReadingKnown = null;

const els = {
  ratingValue: document.querySelector("#ratingValue"),
  ratingDeltaValue: document.querySelector("#ratingDeltaValue"),
  kanjiRatingValue: document.querySelector("#kanjiRatingValue"),
  kanjiDeltaValue: document.querySelector("#kanjiDeltaValue"),
  kanjiBandValue: document.querySelector("#kanjiBandValue"),
  kanjiCoverageValue: document.querySelector("#kanjiCoverageValue"),
  bandValue: document.querySelector("#bandValue"),
  confidenceValue: document.querySelector("#confidenceValue"),
  calibrationHint: document.querySelector("#calibrationHint"),
  achievementStack: document.querySelector("#achievementStack"),
  wordLevel: document.querySelector("#wordLevel"),
  wordRating: document.querySelector("#wordRating"),
  coverageValue: document.querySelector("#coverageValue"),
  cardPrompt: document.querySelector("#cardPrompt"),
  japaneseWord: document.querySelector("#japaneseWord"),
  reading: document.querySelector("#reading"),
  meaning: document.querySelector("#meaning"),
  revealButton: document.querySelector("#revealButton"),
  readingRevealActions: document.querySelector("#readingRevealActions"),
  revealReadingButton: document.querySelector("#revealReadingButton"),
  readingActions: document.querySelector("#readingActions"),
  missReadingButton: document.querySelector("#missReadingButton"),
  knowReadingButton: document.querySelector("#knowReadingButton"),
  answerActions: document.querySelector("#answerActions"),
  mainActions: document.querySelector("#mainActions"),
  missButton: document.querySelector("#missButton"),
  knowButton: document.querySelector("#knowButton"),
  resetButton: document.querySelector("#resetButton"),
  answeredValue: document.querySelector("#answeredValue"),
  accuracyBar: document.querySelector("#accuracyBar"),
  accuracyValue: document.querySelector("#accuracyValue"),
  historyList: document.querySelector("#historyList"),
  profileOutput: document.querySelector("#profileOutput"),
  copyButton: document.querySelector("#copyButton"),
  knownWordsValue: document.querySelector("#knownWordsValue"),
  readableWordsValue: document.querySelector("#readableWordsValue"),
  rangeValue: document.querySelector("#rangeValue"),
  levelScale: document.querySelector("#levelScale"),
  wordBankValue: document.querySelector("#wordBankValue")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...defaultState,
      ...saved,
      achievements: saved?.achievements || {},
      history: saved?.history || [],
      seen: saved?.seen || {}
    };
  } catch {
    return { ...defaultState, achievements: {}, history: [], seen: {} };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function expectedScore(playerRating, wordRating) {
  return 1 / (1 + 10 ** ((wordRating - playerRating) / 400));
}

function ratingDelta(word, score, rating = state.rating) {
  const kFactor =
    state.answered < minimumEstimateAnswers
      ? 210 - state.answered * 10
      : Math.max(20, 58 - (state.answered - minimumEstimateAnswers) * 0.16);
  return Math.round(kFactor * (score - expectedScore(rating, word.rating)));
}

function estimateFromRating(rating) {
  const band =
    estimateBands.find((item, index) => {
      const isLast = index === estimateBands.length - 1;
      return rating >= item.minRating && (isLast ? rating <= item.maxRating : rating < item.maxRating);
    }) ||
    (rating < estimateBands[0].minRating ? estimateBands[0] : estimateBands[estimateBands.length - 1]);
  const progress = clamp(
    (rating - band.minRating) / Math.max(1, band.maxRating - band.minRating),
    0,
    1
  );
  const estimatedWords = Math.round(band.minWords + (band.maxWords - band.minWords) * progress);
  const estimatedCoverage = coverageFromKnownWords(estimatedWords);
  const spread = confidenceSpread(state.answered);
  return {
    band,
    estimatedWords,
    estimatedCoverage,
    low: Math.max(0, Math.round(estimatedWords * (1 - spread))),
    high: Math.round(estimatedWords * (1 + spread)),
    lowCoverage: coverageFromKnownWords(Math.max(0, estimatedWords * (1 - spread))),
    highCoverage: coverageFromKnownWords(estimatedWords * (1 + spread))
  };
}

function ratingForKnownWords(wordsKnown) {
  const band =
    estimateBands.find((item, index) => {
      const isLast = index === estimateBands.length - 1;
      return wordsKnown >= item.minWords && (isLast ? wordsKnown <= item.maxWords : wordsKnown < item.maxWords);
    }) ||
    (wordsKnown < estimateBands[0].minWords ? estimateBands[0] : estimateBands[estimateBands.length - 1]);
  const progress = clamp(
    (wordsKnown - band.minWords) / Math.max(1, band.maxWords - band.minWords),
    0,
    1
  );
  return Math.round(band.minRating + (band.maxRating - band.minRating) * progress);
}

function maxKnownWords() {
  return estimateBands[estimateBands.length - 1].maxWords;
}

function confidenceSpread(answered) {
  if (answered < minimumEstimateAnswers) return 0.65;
  if (answered < 25) return 0.5;
  if (answered < 60) return 0.35;
  if (answered < 120) return 0.24;
  if (answered < 250) return 0.16;
  return 0.1;
}

function coverageFromKnownWords(wordsKnown) {
  const words = clamp(Math.max(1, wordsKnown), 1, maxKnownWords());
  if (words <= coverageAnchors[0].words) {
    const first = coverageAnchors[0];
    return clamp((words / first.words) * first.coverage, 0, first.coverage);
  }

  for (let index = 0; index < coverageAnchors.length - 1; index += 1) {
    const from = coverageAnchors[index];
    const to = coverageAnchors[index + 1];
    if (words <= to.words) {
      return interpolateLogCoverage(words, from, to);
    }
  }

  return 100;
}

function interpolateLogCoverage(words, from, to) {
  const progress =
    (Math.log(words) - Math.log(from.words)) / Math.max(0.0001, Math.log(to.words) - Math.log(from.words));
  return from.coverage + (to.coverage - from.coverage) * clamp(progress, 0, 1);
}

function pickWord() {
  const targetRating = samplingRating();
  const pool = nearbyWords(targetRating);
  const ratedWords = pool.map((word) => {
    const timesSeen = state.seen[word.jp] || 0;
    const distance = Math.abs(word.rating - targetRating);
    const repeatPenalty = timesSeen * 150;
    const exploration = Math.random() * explorationRange();
    return { word, score: distance + repeatPenalty - exploration };
  });

  ratedWords.sort((a, b) => a.score - b.score);
  const shortlist = ratedWords.slice(0, Math.min(12, ratedWords.length));
  return shortlist[Math.floor(Math.random() * shortlist.length)].word;
}

function nearbyWords(targetRating) {
  const center = lowerBoundByRating(targetRating);
  const radius = state.answered < reliableEstimateAnswers ? 620 : 420;
  const start = Math.max(0, center - radius);
  const end = Math.min(wordsByRating.length, center + radius);
  return wordsByRating.slice(start, end);
}

function lowerBoundByRating(targetRating) {
  let low = 0;
  let high = wordsByRating.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (wordsByRating[mid].rating < targetRating) low = mid + 1;
    else high = mid;
  }
  return low;
}

function explorationRange() {
  if (state.answered < minimumEstimateAnswers) return 260;
  if (state.answered < 40) return 240;
  if (state.answered < 100) return 200;
  if (state.answered < 250) return 155;
  return 110;
}

function samplingRating() {
  if (state.answered === 0 || state.answered >= minimumEstimateAnswers) {
    return state.rating;
  }

  const accuracy = state.correct / state.answered;
  const progress = state.answered / minimumEstimateAnswers;
  const lastAnswerWasCorrect = state.history[0]?.score >= 0.75;
  const momentum = lastAnswerWasCorrect ? 260 : -180;
  const performancePush = (accuracy - 0.5) * 1100;
  const calibrationPush = progress * 420;
  return clamp(state.rating + performancePush + calibrationPush + momentum, minRating, maxRating);
}

function showNextWord() {
  currentWord = pickWord();
  const asksReading = hasKanjiQuestion(currentWord);
  currentReadingKnown = asksReading ? null : undefined;
  els.japaneseWord.textContent = currentWord.jp;
  els.japaneseWord.classList.toggle("kana-only", isKanaOnly(currentWord.jp));
  els.reading.textContent = currentWord.reading || "No kanji-reading check for this card";
  els.meaning.textContent = currentWord.meaning;
  els.cardPrompt.textContent = asksReading ? "Can you read this word?" : "Do you know this word?";
  els.wordRating.textContent = `~ top ${formatNumber(currentWord.frequencyRank)} word · rating ${currentWord.rating}`;
  els.wordLevel.textContent = difficultyLabel(currentWord.rating);
  els.meaning.classList.add("hidden");
  els.reading.classList.toggle("hidden", asksReading);
  els.readingRevealActions.classList.toggle("hidden", !asksReading);
  els.readingActions.classList.add("hidden");
  els.answerActions.classList.add("hidden");
  els.mainActions.classList.toggle("hidden", asksReading);
  render();
}

function difficultyLabel(rating) {
  const estimate = estimateFromRating(rating);
  return estimate.band.level;
}

function bandLabel(rating) {
  const estimate = estimateFromRating(rating);
  return estimate.band.level;
}

function confidenceLabel(answered) {
  if (answered < minimumEstimateAnswers) return "Low";
  if (answered < 30) return "Early estimate";
  if (answered < reliableEstimateAnswers) return "Building";
  if (answered < 120) return "Settling";
  if (answered < 250) return "Good";
  return "High";
}

function answer(knewMeaning) {
  const score = knewMeaning ? 1 : 0;
  const combinedScore = answerScore(currentReadingKnown, knewMeaning);
  const delta = ratingDelta(currentWord, score);
  const asksReading = hasKanjiQuestion(currentWord);
  const kanjiDelta = asksReading ? ratingDelta(currentWord, currentReadingKnown ? 1 : 0, state.kanjiRating) : 0;
  const oldRating = state.rating;
  const oldKanjiRating = state.kanjiRating;
  state.rating = clamp(state.rating + delta, minRating, maxRating);
  if (asksReading) {
    state.kanjiRating = clamp(state.kanjiRating + kanjiDelta, minRating, maxRating);
  }
  state.answered += 1;
  state.scoreTotal = (state.scoreTotal || 0) + score;
  state.streak = knewMeaning ? (state.streak || 0) + 1 : 0;
  state.bestStreak = Math.max(state.bestStreak || 0, state.streak);
  if (asksReading) {
    state.readingAnswered = (state.readingAnswered || 0) + 1;
    state.readingScoreTotal = (state.readingScoreTotal || 0) + (currentReadingKnown ? 1 : 0);
  }
  state.correct = state.scoreTotal;
  if (state.answered === minimumEstimateAnswers && state.scoreTotal === 0) {
    state.rating = estimateBands[0].minRating;
  }
  if (state.answered === minimumEstimateAnswers && state.scoreTotal === minimumEstimateAnswers) {
    state.rating = estimateBands[estimateBands.length - 1].minRating;
  }
  if (state.readingAnswered === minimumEstimateAnswers && state.readingScoreTotal === 0) {
    state.kanjiRating = estimateBands[0].minRating;
  }
  if (state.readingAnswered === minimumEstimateAnswers && state.readingScoreTotal === minimumEstimateAnswers) {
    state.kanjiRating = estimateBands[estimateBands.length - 1].minRating;
  }
  state.seen[currentWord.jp] = (state.seen[currentWord.jp] || 0) + 1;
  state.history.unshift({
    jp: currentWord.jp,
    meaning: currentWord.meaning,
    level: currentWord.level,
    knewReading: currentReadingKnown,
    knewMeaning,
    source: currentWord.source,
    score: combinedScore,
    vocabScore: score,
    delta,
    kanjiDelta,
    from: oldRating,
    to: state.rating,
    kanjiFrom: oldKanjiRating,
    kanjiTo: state.kanjiRating
  });
  state.history = state.history.slice(0, 8);
  checkAchievements({ knewMeaning, knewReading: currentReadingKnown, asksReading });
  saveState();
  showNextWord();
}

function answerScore(knewReading, knewMeaning) {
  if (knewReading === undefined) return knewMeaning ? 1 : 0;
  if (knewReading && knewMeaning) return 1;
  if (!knewReading && knewMeaning) return 0.7;
  if (knewReading && !knewMeaning) return 0.35;
  return 0;
}

function checkAchievements(result) {
  const achievements = [
    {
      id: "first-round",
      title: "First Drop",
      detail: "You entered the vocabulary ladder.",
      unlocked: () => state.answered >= 1
    },
    {
      id: "first-correct",
      title: "Confirmed Hit",
      detail: "First known word locked in.",
      unlocked: () => result.knewMeaning
    },
    {
      id: "first-reading",
      title: "Kanji Read",
      detail: "First kanji reading cleared.",
      unlocked: () => result.asksReading && result.knewReading === true
    },
    {
      id: "rank-online",
      title: "Rank Online",
      detail: "Calibration complete. Your Elo is live.",
      unlocked: () => state.answered >= minimumEstimateAnswers
    },
    {
      id: "streak-5",
      title: "Hot Streak",
      detail: "5 words correct in a row.",
      unlocked: () => state.streak >= 5
    },
    {
      id: "streak-10",
      title: "Rampage",
      detail: "10 words correct in a row.",
      unlocked: () => state.streak >= 10
    },
    {
      id: "kanji-10",
      title: "Reader Mode",
      detail: "10 kanji readings answered correctly.",
      unlocked: () => (state.readingScoreTotal || 0) >= 10
    }
  ];

  for (const achievement of achievements) {
    if (!state.achievements[achievement.id] && achievement.unlocked()) {
      state.achievements[achievement.id] = new Date().toISOString();
      showAchievement(achievement);
    }
  }
}

function showAchievement(achievement) {
  if (!els.achievementStack) return;
  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.innerHTML = `
    <span>Achievement unlocked</span>
    <strong>${achievement.title}</strong>
    <p>${achievement.detail}</p>
  `;
  els.achievementStack.append(toast);
  window.setTimeout(() => {
    toast.classList.add("leaving");
    window.setTimeout(() => toast.remove(), 280);
  }, 4200);
}

function clearAchievementToasts() {
  if (!els.achievementStack) return;
  els.achievementStack.innerHTML = "";
}

function answerReading(knewReading) {
  currentReadingKnown = knewReading;
  els.cardPrompt.textContent = "Do you know what it means?";
  els.readingActions.classList.add("hidden");
  els.mainActions.classList.remove("hidden");
}

function revealReading() {
  els.reading.classList.remove("hidden");
  els.readingRevealActions.classList.add("hidden");
  els.readingActions.classList.remove("hidden");
}

function render() {
  const scoreTotal = state.scoreTotal ?? state.correct ?? 0;
  const accuracy = state.answered === 0 ? 0 : Math.round((scoreTotal / state.answered) * 100);
  const estimate = estimateFromRating(state.rating);
  const kanjiEstimate = estimateFromRating(state.kanjiRating);
  const canEstimate = state.answered >= minimumEstimateAnswers;
  const canEstimateKanji = (state.readingAnswered || 0) >= minimumEstimateAnswers;
  els.ratingValue.textContent = canEstimate ? state.rating : calibrationLabel;
  els.kanjiRatingValue.textContent = canEstimateKanji ? state.kanjiRating : calibrationLabel;
  renderDelta(els.ratingDeltaValue, "delta");
  renderDelta(els.kanjiDeltaValue, "kanjiDelta");
  renderRankValue(els.bandValue, estimate, canEstimate);
  renderRankValue(els.kanjiBandValue, kanjiEstimate, canEstimateKanji);
  els.confidenceValue.textContent = confidenceLabel(state.answered);
  els.calibrationHint.classList.toggle("hidden", canEstimate);
  els.calibrationHint.textContent = `Play ${minimumEstimateAnswers - state.answered} more ${
    minimumEstimateAnswers - state.answered === 1 ? "round" : "rounds"
  } to show your rank`;
  els.knownWordsValue.textContent = canEstimate ? formatNumber(estimate.estimatedWords) : calibrationLabel;
  els.coverageValue.textContent = canEstimate ? formatCoverage(estimate.estimatedCoverage) : calibrationLabel;
  els.readableWordsValue.textContent = canEstimateKanji
    ? formatNumber(kanjiEstimate.estimatedWords)
    : calibrationLabel;
  els.kanjiCoverageValue.textContent = canEstimateKanji
    ? formatCoverage(kanjiEstimate.estimatedCoverage)
    : calibrationLabel;
  els.rangeValue.textContent = canEstimate
    ? `${formatNumber(estimate.low)}-${formatNumber(estimate.high)} words · ${formatCoverage(
        estimate.lowCoverage
      )}-${formatCoverage(estimate.highCoverage)} coverage`
    : `Answer ${minimumEstimateAnswers - state.answered} more to estimate`;
  els.answeredValue.textContent = `${state.answered} answered`;
  els.accuracyBar.style.width = `${accuracy}%`;
  els.accuracyValue.textContent =
    state.answered === 0 ? "No answers yet" : `${accuracy}% correct this session`;
  els.wordBankValue.textContent = `${formatNumber(words.length)} quiz words`;
  renderScale(canEstimate);
  renderProfile(accuracy, estimate, kanjiEstimate, canEstimate, canEstimateKanji);
  renderHistory();
}

function renderRankValue(target, estimate, canEstimate) {
  target.textContent = canEstimate ? estimate.band.level : calibrationLabel;
  target.className = "rank-value";
  target.parentElement.className = "rank-stat";
  const strip = target.closest(".rating-strip");
  const baseClass = strip.classList.contains("kanji-strip") ? "rating-strip kanji-strip" : "rating-strip";
  strip.className = canEstimate ? `${baseClass} tier-${estimate.band.tier}` : baseClass;
}

function renderDelta(target, key) {
  const last = state.history[0];
  if (!last) {
    target.className = "rating-delta hidden";
    target.textContent = "";
    return;
  }

  const value = last[key];
  if (key === "kanjiDelta" && last.knewReading === undefined) {
    target.className = "rating-delta hidden";
    target.textContent = "";
    return;
  }
  const sign = value > 0 ? "+" : "";
  target.className = `rating-delta ${value >= 0 ? "plus" : "minus"}`;
  target.textContent = `${sign}${value}`;
}

function renderScale(canEstimate) {
  els.levelScale.innerHTML = "";
  for (const band of estimateBands) {
    const marker = document.createElement("div");
    marker.className = `scale-row tier-${band.tier}`;
    const bandIndex = estimateBands.indexOf(band);
    const isLast = bandIndex === estimateBands.length - 1;
    const isCurrent =
      state.rating >= band.minRating && (isLast ? state.rating <= band.maxRating : state.rating < band.maxRating);
    if (canEstimate && isCurrent) marker.classList.add("active");
    marker.innerHTML = `
      <span>${band.level}</span>
      <strong>${formatNumber(band.minWords)}-${formatNumber(band.maxWords)}</strong>
    `;
    els.levelScale.append(marker);
  }
}

function renderProfile(accuracy, estimate, kanjiEstimate, canEstimate, canEstimateKanji) {
  els.profileOutput.value = JSON.stringify(
    {
      rating: canEstimate ? state.rating : null,
      kanjiRating: canEstimateKanji ? state.kanjiRating : null,
      kanjiLevelEstimate: canEstimateKanji ? bandLabel(state.kanjiRating) : calibrationLabel,
      estimatedReadableWords: canEstimateKanji ? kanjiEstimate.estimatedWords : null,
      estimatedReadableRange: canEstimateKanji ? [kanjiEstimate.low, kanjiEstimate.high] : null,
      estimatedReadableCoverage: canEstimateKanji ? kanjiEstimate.estimatedCoverage : null,
      estimatedReadableCoverageRange: canEstimateKanji
        ? [kanjiEstimate.lowCoverage, kanjiEstimate.highCoverage]
        : null,
      levelEstimate: canEstimate ? bandLabel(state.rating) : calibrationLabel,
      estimatedKnownWords: canEstimate ? estimate.estimatedWords : null,
      estimatedRange: canEstimate ? [estimate.low, estimate.high] : null,
      estimatedCoverage: canEstimate ? estimate.estimatedCoverage : null,
      estimatedCoverageRange: canEstimate ? [estimate.lowCoverage, estimate.highCoverage] : null,
      answered: state.answered,
      readingAnswered: state.readingAnswered || 0,
      currentStreak: state.streak || 0,
      bestStreak: state.bestStreak || 0,
      achievements: Object.keys(state.achievements || {}),
      minimumEstimateAnswers,
      reliableEstimateAnswers,
      accuracy: state.answered === 0 ? null : accuracy,
      confidence: confidenceLabel(state.answered),
      wordBankSize: words.length
    },
    null,
    2
  );
}

function renderHistory() {
  els.historyList.innerHTML = "";
  if (state.history.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "Your answers will appear here.";
    els.historyList.append(empty);
    return;
  }

  for (const item of state.history) {
    const row = document.createElement("li");
    const word = document.createElement("span");
    const result = document.createElement("span");
    const readingMark = item.knewReading === undefined ? "R skipped" : item.knewReading ? "R+" : "R-";
    const meaningMark = item.knewMeaning ? "M+" : "M-";
    word.textContent = `${item.jp} (${readingMark}/${meaningMark}) · ${item.meaning}`;
    result.className = item.delta >= 0 ? "result-good" : "result-miss";
    result.textContent =
      item.knewReading === undefined
        ? `V ${item.delta > 0 ? "+" : ""}${item.delta}`
        : `V ${item.delta > 0 ? "+" : ""}${item.delta} · K ${item.kanjiDelta > 0 ? "+" : ""}${item.kanjiDelta}`;
    row.append(word, result);
    els.historyList.append(row);
  }
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatCoverage(value) {
  return `${Number(value).toFixed(value >= 10 ? 1 : 2)}%`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

els.revealButton.addEventListener("click", () => {
  els.meaning.classList.remove("hidden");
  els.mainActions.classList.add("hidden");
  els.answerActions.classList.remove("hidden");
});

els.revealReadingButton.addEventListener("click", revealReading);
els.knowReadingButton.addEventListener("click", () => answerReading(true));
els.missReadingButton.addEventListener("click", () => answerReading(false));
els.knowButton.addEventListener("click", () => answer(true));
els.missButton.addEventListener("click", () => answer(false));

els.resetButton.addEventListener("click", () => {
  state = { ...defaultState, achievements: {}, history: [], seen: {} };
  clearAchievementToasts();
  saveState();
  showNextWord();
});

els.copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(els.profileOutput.value);
  els.copyButton.textContent = "Copied";
  window.setTimeout(() => {
    els.copyButton.textContent = "Copy profile";
  }, 1200);
});

showNextWord();
